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
  release_years: ReleaseYears[];

  ////////////////
  volume_range: RangeCheckBox[];
  age_range: RangeCheckBox[];
  discount_range: RangeCheckBox[];
}

interface RangeCheckBox {
  id: string;
  title: string;
  min: number;
  max: number;
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

interface ReleaseYears {
  id: number;
  title: string;
}

export const useProductFilterAttributes = () => {
  const [productFilterAttributes, setProductFilterAttributes] = useState<
    IProductFilterData
  >();
  useEffect(() => {
    ProductService.getFilterAttributes().then((res) => {
      const data = addTitlePropertiesToFilterData(res.data.data);
      setProductFilterAttributes(data);
    });
  }, []);
  return { productFilterAttributes };
};

const addTitlePropertiesToFilterData = (data: IProductFilterData) => {
  data.categories = data.categories.map((item) => ({
    ...item,
    title: item.title,
  }));
  data.genders = data.genders.map((item) => ({
    ...item,
    title: item.gender,
  }));
  data.brands = data.brands.map((item) => ({ ...item, title: item.name }));
  data.collections = data.collections.map((item) => ({
    ...item,
    title: item.title,
  }));
  data.aromas = data.aromas.map((item) => ({ ...item, title: item.aroma }));
  data.usages = data.usages.map((item) => ({ ...item, title: item.usage }));
  data.smells = data.smells.map((item) => ({ ...item, title: item.smell }));
  data.color_groups = data.color_groups.map((item) => ({
    ...item,
    title: item.code,
  }));
  data.countries = data.countries.map((item) => ({
    ...item,
    title: item.country,
  }));

  let years: any = data.release_years;

  data.release_years = years.map((item: any) => ({
    id: parseInt(item),
    title: item as number,
  }));

  // Calm down :D
  let volume_range: {
    title: string;
    min: number;
    max: number;
  }[] = Object.values(data.volume_range);
  data.volume_range = volume_range.map((item) => ({
    ...item,
    id: [item.min, item.max].join("-"),
    title: item.title,
  }));

  let age_range: {
    title: string;
    min: number;
    max: number;
  }[] = Object.values(data.age_range);
  data.age_range = age_range.map((item) => ({
    ...item,
    id: [item.min, item.max].join("-"),
    title: item.title,
  }));

  let discount_range: {
    title: string;
    min: number;
    max: number;
  }[] = Object.values(data.discount_range);
  data.discount_range = discount_range.map((item) => ({
    ...item,
    id: [item.min, item.max].join("-"),
    title: item.title,
  }));

  return data;
};
