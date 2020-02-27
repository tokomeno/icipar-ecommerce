import React, { useEffect, useState } from "react";
import { Layout } from "../../layout";
import chunk from "lodash.chunk";
import { BrandSlider } from "../../components/sliders/brandSlider/brandSlider";
import { axiosWithToken } from "../../api/axios-with-token";
import { ALL_BRANDS } from "../../api/endpoints";
import { useTranslation } from "react-i18next";
import { Spinner } from "../../components/spinner";
import { LayoutSpinner } from "../../components/spinners/layout-spinner";

interface IAllBrandsResponse {
  [k: string]: {
    name: string;
    slug: string;
  }[];
}

interface AllBrandsPageProps {}

const alphabet = "abcdefghijklmnopqrstuvwxyz#".toUpperCase().split("");

export const AllBrandsPage: React.FC<AllBrandsPageProps> = props => {
  const [brands, setBrands] = useState<IAllBrandsResponse | null>(null);
  useEffect(() => {
    axiosWithToken
      .get<IAllBrandsResponse>(ALL_BRANDS)
      .then(res => {
        setBrands(res.data);
        console.log(res.data);
      })
      .catch(err => {
        alert("404");
        console.error(err);
      });
  }, []);
  const { t } = useTranslation();

  if (!brands) return <LayoutSpinner />;
  return (
    <Layout>
      <div className="container">
        <div className="allbrands">
          <BrandSlider />
          <div className="all">
            <div className="top row align-items-center justify-content-between">
              <div className="col-md-4" />
              <h3 className="title text-center col-md-4">{t("all_brands")}</h3>
              <form className="col-md-4 text-right">
                <input type="text" placeholder="მოძებნე ბრენდი" />
                <button className="d-flex align-items-center justify-content-center">
                  <i className="fas fa-search" />
                </button>
              </form>
            </div>
            {/* active */}
            <div className="alphabet d-flex align-items-center justify-content-between">
              {Object.keys(brands).map(l => (
                <a href={"#" + l} className="alphabet_item ">
                  {l}
                </a>
              ))}
            </div>
            <div className="list">
              {Object.keys(brands).map(l => (
                <div id={l} className="list-row d-flex flex-md-row flex-column">
                  <div className="list-row_col first_col">
                    <div className="alpha-title">{l}</div>
                  </div>
                  <div className="scroll_list d-flex">
                    {chunk(brands[l], Math.ceil(brands[l].length / 4)).map(
                      _brands => {
                        console.log(_brands);
                        return (
                          <div className="list-row_col">
                            {_brands.map(b => (
                              <a href="#!" className="link">
                                {b.name}
                              </a>
                            ))}
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
    </Layout>
  );
};
