import React from "react";
import { Layout } from "../../layout";
import chunk from "lodash.chunk";
import { BrandSlider } from "../../components/sliders/brandSlider/brandSlider";

interface AllBrandsPageProps {}

const alphabet = "abcdefghijklmnopqrstuvwxyz#".toUpperCase().split("");

export const AllBrandsPage: React.FC<AllBrandsPageProps> = props => {
  return (
    <Layout>
      <div className="container">
        <div className="allbrands">
          <BrandSlider />
          <div className="all">
            <div className="top row align-items-center justify-content-between">
              <div className="col-md-4" />
              <h3 className="title text-center col-md-4">ყველა ბრენდი</h3>
              <form className="col-md-4 text-right">
                <input type="text" placeholder="მოძებნე ბრენდი" />
                <button className="d-flex align-items-center justify-content-center">
                  <i className="fas fa-search" />
                </button>
              </form>
            </div>
            <div className="alphabet d-flex align-items-center justify-content-between">
              {alphabet.map(l => (
                <a href="#!" className="alphabet_item active">
                  {l}
                </a>
              ))}
            </div>
            <div className="list">
              {alphabet.slice(0, 4).map(l => (
                <div className="list-row d-flex flex-md-row flex-column">
                  <div className="list-row_col first_col">
                    <div className="alpha-title">{l}</div>
                  </div>
                  <div className="scroll_list d-flex">
                    {chunk(brands, 5).map(_brands => (
                      <div className="list-row_col">
                        {_brands.map(b => (
                          <a href="#!" className="link">
                            {b}
                          </a>
                        ))}
                      </div>
                    ))}
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

const brands = [
  "Acqua Di Parma",
  "AERIN",
  "Aether Beauty",
  "Algenist",
  "Alpha-H",
  "Acqua Di Parma",
  "AERIN",
  "Aether Beauty",
  "Algenist",
  "Alpha-H",
  "Acqua Di Parma",
  "AERIN",
  "Aether Beauty",
  "Algenist",
  "Alpha-H",
  "Acqua Di Parma",
  "AERIN",
  "Aether Beauty",
  "Algenist",
  "Alpha-H",
  "Acqua Di Parma",
  "AERIN",
  "Aether Beauty",
  "Algenist",
  "Alpha-H",
  "Acqua Di Parma",
  "AERIN",
  "Aether Beauty",
  "Algenist",
  "Alpha-H"
];
