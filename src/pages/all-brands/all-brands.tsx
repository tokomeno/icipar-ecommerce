import React, { useEffect, useState } from "react";

import chunk from "lodash.chunk";
import { BrandSlider } from "../../components/sliders/brandSlider/brandSlider";
import { useTranslation } from "react-i18next";
import { LayoutSpinner } from "../../components/spinners/layout-spinner";
import { BrandService, IAllBrandsResponse } from "../../services/brand.http";
import { routes } from "../../routes/routes";
import { NavLink } from "react-router-dom";
import { useInput } from "../../hooks/common/useInput";

interface AllBrandsPageProps {}

// const alphabet = "abcdefghijklmnopqrstuvwxyz#".toUpperCase().split("");

export const AllBrandsPage: React.FC<AllBrandsPageProps> = () => {
  const { t } = useTranslation();
  const [brands, setBrands] = useState<IAllBrandsResponse | null>(null);
  const brandSearchInput = useInput();
  useEffect(() => {
    BrandService.getAll()
      .then((res) => {
        setBrands(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!brands) return <LayoutSpinner />;
  return (
    <>
      <div className="container">
        <div className="allbrands">
          <BrandSlider />
          <div className="all">
            <div className="top row align-items-center justify-content-between">
              <div className="col-md-4" />
              <h3 className="title text-center col-md-4">{t("all_brands")}</h3>
              <form action="" className="col-md-4 text-right">
                <input
                  {...brandSearchInput}
                  type="text"
                  placeholder={t("search_brand")}
                />
                <button
                  type="button"
                  className="d-flex align-items-center justify-content-center"
                >
                  <i className="fas fa-search" />
                </button>
              </form>
            </div>
            {/* active */}
            <div className="alphabet d-flex align-items-center justify-content-between">
              {Object.keys(brands).map((l, index) => (
                <a href={"#" + l} key={index} className="alphabet_item ">
                  {l}
                </a>
              ))}
            </div>
            <div className="list">
              {Object.keys(brands).map((l) => (
                <div id={l} className="list-row d-flex flex-md-row flex-column">
                  <div className="list-row_col first_col">
                    <div className="alpha-title">{l}</div>
                  </div>
                  <div className="scroll_list d-flex">
                    {chunk(brands[l], Math.ceil(brands[l].length / 4)).map(
                      (_brands) => {
                        return (
                          <div className="list-row_col">
                            {_brands.map((b) => {
                              if (
                                brandSearchInput.value.length === 0 ||
                                b.name
                                  .toLowerCase()
                                  .includes(
                                    brandSearchInput.value.toLowerCase()
                                  )
                              ) {
                                return (
                                  <NavLink
                                    to={routes.brandShow(b.slug)}
                                    className="link"
                                  >
                                    {b.name}
                                  </NavLink>
                                );
                              }
                              return null;
                            })}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
