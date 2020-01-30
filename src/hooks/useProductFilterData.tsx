// categories
// genders
// brands
// collections
// aromas
// smells
// usages
// color_groups
// countries
import { useState, useEffect } from "react";
import Axios from "axios";
import { FETCH_PRODUCTS_FILTER_DATA } from "../api/endpoints";

export interface IProductFilterData {
  categories: Category[];
  genders: Gender[];
  brands: Brand[];
  collections: Child[];
  aromas: Aroma[];
  usages: Usage[];
  smells: Smell[];
  color_groups: Colorgroup[];
  countries: Country[];
}

interface Country {
  title: string;
  id: number;
  country: string;
}

interface Colorgroup {
  title: string;
  id: number;
  code: string;
}

interface Smell {
  title: string;
  id: number;
  smell: string;
}

interface Usage {
  title: string;
  id: number;
  usage: string;
}

interface Aroma {
  title: string;
  id: number;
  aroma: string;
}

interface Brand {
  title: string;
  id: number;
  name: string;
}

interface Gender {
  title: string;
  id: number;
  gender: string;
}

interface Category {
  id: number;
  title: string;
  children: Child[];
}

interface Child {
  id: number;
  title: string;
}

export const useProductFilterData = () => {
  const [productFilterData, setProductFilterData] = useState<
    IProductFilterData
  >();
  useEffect(() => {
    Axios.get<{ data: IProductFilterData }>(FETCH_PRODUCTS_FILTER_DATA).then(
      res => {
        const data = addTitlePropertoesToFilterData(res.data.data);
        setProductFilterData(data);
      }
    );
  }, []);
  return { productFilterData };
};

const addTitlePropertoesToFilterData = (data: IProductFilterData) => {
  data.categories = data.categories.map(item => ({
    ...item,
    title: item.title
  }));
  data.genders = data.genders.map(item => ({
    ...item,
    title: item.gender
  }));
  data.brands = data.brands.map(item => ({ ...item, title: item.name }));
  data.collections = data.collections.map(item => ({
    ...item,
    title: item.title
  }));
  data.aromas = data.aromas.map(item => ({ ...item, title: item.aroma }));
  data.usages = data.usages.map(item => ({ ...item, title: item.usage }));
  data.smells = data.smells.map(item => ({ ...item, title: item.smell }));
  data.color_groups = data.color_groups.map(item => ({
    ...item,
    title: item.code
  }));
  data.countries = data.countries.map(item => ({
    ...item,
    title: item.country
  }));
  return data;
};
