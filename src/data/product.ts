export interface IProduct {
  id: number;
  title: string;
  qty: number;
  thumbnail: string;
  rating: number;
  price?: number;
  price_min: number;
  price_max?: number;
  main_item_id: number;
}
export interface ICartItem {
  item_id: number;
  items_count: number;
  price: number;
  original_price: number;
  discount_rate: number;
  thumbnail: string;
  title: string;
}

export const dummyProductData: IProduct[] = [
  {
    main_item_id: 13,
    id: 1,
    title: "Calvin Klein All, 100ml",
    price: 123,
    price_min: 1234,
    rating: 13,
    qty: 12,
    thumbnail: "/assets/uploads/images/slider1.png"
  },

  {
    main_item_id: 13,
    id: 2,
    title: "Bruno Banna, 100ml",
    price: 89,
    price_min: 1234,
    rating: 13,
    qty: 12,
    thumbnail: "/assets/uploads/images/slider2.png"
  },
  {
    main_item_id: 13,
    id: 3,
    title: "Super Bower, 200ml",
    price: 150,
    price_min: 1234,
    rating: 13,
    qty: 11,
    thumbnail: "/assets/uploads/images/slider3.png"
  },
  {
    main_item_id: 13,
    id: 4,
    title: "Super Bower, 200ml",
    price: 150,
    price_min: 1234,
    rating: 13,
    qty: 11,
    thumbnail: "/assets/uploads/images/slider4.png"
  },
  {
    main_item_id: 13,
    id: 5,
    title: "Bruno Banna, 100ml",
    price: 89,
    price_min: 1234,
    rating: 13,
    qty: 12,
    thumbnail: "/assets/uploads/images/slider5.png"
  },
  {
    main_item_id: 13,
    id: 6,
    title: "Bruno Banna, 100ml",
    price: 89,
    price_min: 1234,
    rating: 13,
    qty: 12,
    thumbnail: "/assets/uploads/images/slider6.png"
  },
  {
    main_item_id: 13,
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
