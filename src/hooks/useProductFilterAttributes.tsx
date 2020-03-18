import { useState, useEffect } from "react";
import { ProductService } from "../services/product.http";

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

export const useProductFilterAttributes = () => {
  const [productFilterAttributes, setProductFilterAttributes] = useState<
    IProductFilterData
  >();
  useEffect(() => {
    ProductService.getFilterAttributes().then(res => {
      const data = addTitlePropertiesToFilterData(res.data.data);
      setProductFilterAttributes(data);
    });
  }, []);
  return { productFilterAttributes };
};

const addTitlePropertiesToFilterData = (data: IProductFilterData) => {
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
