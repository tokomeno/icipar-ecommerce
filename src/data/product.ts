import { IProduct } from "../services/product.http";

export const dummyProductData: IProduct[] = [
  {
    main_item_id: 1,
    id: 1,
    title: "Calvin Klein All, 100ml",
    price: 123,
    price_min: 1234,
    rating: 13,
    qty: 12,
    thumbnail: "/assets/uploads/images/slider1.png"
  },

  {
    main_item_id: 2,
    id: 2,
    title: "Bruno Banna, 100ml",
    price: 89,
    price_min: 1234,
    rating: 13,
    qty: 12,
    thumbnail: "/assets/uploads/images/slider2.png"
  },
  {
    main_item_id: 3,
    id: 3,
    title: "Super Bower, 200ml",
    price: 150,
    price_min: 1234,
    rating: 13,
    qty: 11,
    thumbnail: "/assets/uploads/images/slider3.png"
  },
  {
    main_item_id: 4,
    id: 4,
    title: "Super Bower, 200ml",
    price: 150,
    price_min: 1234,
    rating: 13,
    qty: 11,
    thumbnail: "/assets/uploads/images/slider4.png"
  },
  {
    main_item_id: 5,
    id: 5,
    title: "Bruno Banna, 100ml",
    price: 89,
    price_min: 1234,
    rating: 13,
    qty: 12,
    thumbnail: "/assets/uploads/images/slider5.png"
  },
  {
    main_item_id: 6,
    id: 6,
    title: "Bruno Banna, 100ml",
    price: 89,
    price_min: 1234,
    rating: 13,
    qty: 12,
    thumbnail: "/assets/uploads/images/slider6.png"
  },
  {
    main_item_id: 7,
    id: 7,
    title: "Bruno Banna, 100ml",
    price: 89,
    price_min: 1234,
    rating: 13,
    qty: 12,
    thumbnail: "/assets/uploads/images/slider7.png"
  }
];

export interface IProductWithItems {
  id: number;
  title: string;
  rating: number;
  details: {
    description: string;
    usage: string;
    ingredients: string;
  };
  brand: {
    name: string;
    description: string;
  };
  preorderable?: any;
  items: Item[];
}

interface Item {
  id: number;
  title: string;
  volume: number;
  thumbnail: string;
  color?: any;
  stock: number;
  price: number;
  original_price: number;
  discount_rate: number;
  images: { image: string }[];
}
