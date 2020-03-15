import React from "react";
import { ProfileBasePage } from "../index";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { IFavoritesState } from "../../../redux/favorites/favoritesTypes";
import { IStoreState } from "../../../redux/mainReducer";
import { toggleFavorite } from "../../../redux/favorites/favoritesActions";

interface WishlistProfilePageProps {
  favorites: IFavoritesState["items"];
  toggleFavorite: typeof toggleFavorite;
}

export const _WishlistProfilePage: React.FC<WishlistProfilePageProps> = ({
  favorites,
  toggleFavorite
}) => {
  const { t } = useTranslation();

  return (
    <ProfileBasePage>
      <div className="profile-right profile-side table-profile">
        <div className="profile-top">
          <h1 className="profile-top_title">{t("wishes")}</h1>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>{t("products")}</th>
                <th className="text-center">{t("price")}</th>
                <th className="text-center">{t("favorites")}</th>
              </tr>
            </thead>
            <tbody>
              {favorites.map(favoriteProduct => (
                <tr>
                  <td className="first-td">
                    <a href="#!" className="d-flex align-items-center">
                      <div className="image d-flex align-items-center justify-content-center">
                        <img src={favoriteProduct.thumbnail} alt="cart" />
                      </div>
                      <div>
                        <div className="name">{favoriteProduct.title}</div>
                        <div className="profbtns d-flex">
                          <button
                            onClick={() => {
                              toggleFavorite(favoriteProduct.product_id);
                            }}
                            className="profbtns_btn"
                          >
                            {t("delete")}
                          </button>
                          <button
                            onClick={() => {
                              toggleFavorite(favoriteProduct.product_id);
                            }}
                            className="heart profbtns_btn cart d-block d-sm-none"
                          >
                            <img
                              src="/assets/images/loved.svg"
                              alt="favorite"
                            />
                            <div className="qty">
                              <span className="num">0</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </a>
                  </td>
                  <td className="price-td text-center">
                    {favoriteProduct.price && (
                      <div className="price-block">
                        <div className="price sum">
                          {favoriteProduct.price}
                          <sub>D</sub>
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="text-center bag-td">
                    <div
                      onClick={e => {
                        e.preventDefault();
                        toggleFavorite(favoriteProduct.product_id);
                      }}
                      className="bag d-flex flex-column align-items-center"
                    >
                      <img src="/assets/images/loved.svg" alt="cart" />
                      <img
                        src="/assets/images/loved.svg"
                        alt="cart"
                        className="hover"
                      />
                      <a href="#!" className="add-bag">
                        {t("remove_from_favorite")}
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <div className="pagination d-none d-md-flex">
            {t("pages")}:
            <div className="d-flex pages">
              <span className="pages-item">1</span>
              <a href="#!" className="pages-item">
                2
              </a>
              <a href="#!" className="pages-item">
                3
              </a>
              <a href="#!" className="pages-item">
                4
              </a>
              <a href="#!" className="pages-item">
                5
              </a>
              <a href="#!" className="pages-item">
                6
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </ProfileBasePage>
  );
};
const mapStateToProps = ({ favorites }: IStoreState) => ({
  favorites: favorites.items
});

export const WishlistProfilePage = connect(mapStateToProps, { toggleFavorite })(
  _WishlistProfilePage
);
