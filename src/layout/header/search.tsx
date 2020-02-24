import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef
} from "react";
import classnames from "classnames";
import { PorductFilterContext } from "../../contexts/productFilterContext";
import { useTranslation } from "react-i18next";
import { useLocation, useHistory } from "react-router-dom";
import { routes } from "../../routes/routes";
import { useInput } from "../../hooks/common/useInput";
import { axiosWithToken } from "../../api/axios-with-token";
import { PRODUCT_CATEGORIES, FETCH_PRODUCTS_URL } from "../../api/endpoints";
import { IProduct } from "../../data/product";
import { fetchProducts } from "../../hooks/useProducts/helper";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useDeteckOutsideClick } from "../../hooks/common/useDeteckOutsideClick";

interface ICategory {
  id: number;
  title: string;
}

interface SearchProps {}

export const Search: React.FC<SearchProps> = props => {
  const { t } = useTranslation();
  const location = useLocation();
  const history = useHistory();
  const { setProductFilterData, productFilterData } = useContext(
    PorductFilterContext
  );
  const { value: keyword, onChange: setKeyword } = useInput("");
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [activeTab, setActiveTab] = useState<ICategory | null>(null);

  const reserProducts = useCallback(() => {
    setProducts([]);
  }, [setProducts]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (location.pathname === routes.catalog) {
      const value = e.target.value;
      setProductFilterData(prevState => ({
        ...prevState,
        keyword: value
      }));
    }
    if (location.pathname !== routes.catalog) {
      setKeyword(e.target.value);
    }
  };

  useEffect(() => {
    if (!keyword || keyword.length === 0) {
      setProducts([]);
      return;
    }
    const fetching = setTimeout(() => {
      fetchProducts(
        FETCH_PRODUCTS_URL,
        {
          keyword: keyword,
          categories: activeTab ? [activeTab.id] : []
        },
        res => {
          setProducts(res.data);
        }
      );
    }, 300);
    return () => {
      clearTimeout(fetching);
    };
  }, [keyword, activeTab]);

  const getKeywordValue = () => {
    return location.pathname === routes.catalog
      ? productFilterData.keyword
      : keyword;
  };

  const handleSubmit = () => {
    if (location.pathname === routes.catalog) return;
    setProductFilterData(prevState => ({
      ...prevState,
      keyword: keyword
    }));
    history.push({ pathname: routes.catalog });
  };

  useEffect(() => {
    axiosWithToken
      .get<{ data: ICategory[] }>(PRODUCT_CATEGORIES)
      .then(res => {
        setCategories(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const searchDropdownRef = useRef(null);
  useDeteckOutsideClick(searchDropdownRef, () => {
    setProducts([]);
  });

  return (
    <div className="col-md-7" style={{ position: "relative" }}>
      <form className="search d-flex justify-content-between">
        <Dropdown className={"search-dropdown dropdown d-flex"}>
          <Dropdown.Toggle className="btn btn-secondary " id="categories">
            <img src="/assets/images/squares.svg" alt="squares icon" />
            <span>{activeTab ? activeTab.title : t("categories")}</span>
            <i className="fas fa-angle-down" />
            <i className="fas fa-angle-up" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="search-menu">
            {!activeTab ? null : (
              <a
                onClick={e => {
                  e.preventDefault();
                  setActiveTab(null);
                }}
                className="dropdown-item"
                href="#!"
              >
                {t("categories")}
              </a>
            )}
            {categories.map(c => (
              <Dropdown.Item
                className="dropdown-item"
                onClick={() => {
                  setActiveTab(c);
                }}
              >
                {c.title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <input
          type="text"
          className="search-input"
          placeholder={t("enter_search_word")}
          value={getKeywordValue()}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} type="button" className="search-btn">
          <i className="fas fa-search" />
        </button>
      </form>
      {products.length > 0 ? (
        <div ref={searchDropdownRef} className="hdr-cart">
          <div className="dropdown">
            <div
              className="dropdown-menu show"
              style={{ overflowY: "auto", zIndex: 100 }}
              aria-labelledby="cart1"
            >
              {products.map(p => (
                <SearchItem
                  reserProducts={reserProducts}
                  key={p.id}
                  product={p}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

interface SearchItemProps {
  product: IProduct;
  reserProducts: () => void;
}
const SearchItem: React.FC<SearchItemProps> = ({ product, reserProducts }) => {
  return (
    <NavLink
      onClick={reserProducts}
      to={`/product/${product.id}`}
      className="d-flex align-items-center item"
    >
      <div className="image d-flex align-items-center justify-content-center">
        <img src={product.thumbnail} alt="" />
      </div>
      <div className="desc">
        <div className="item-title">{product.title}</div>
        <div className="price">
          {product.price_min}
          {product.price_max ? " - " + product.price_max : ""}
          <sub>D</sub>
        </div>
      </div>
    </NavLink>
  );
};
