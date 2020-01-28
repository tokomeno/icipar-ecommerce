export interface IProduct {
  id: number;
  title: string;
  qty: number;
  thumbnail: string;
  rating: number;
  price?: number;
  price_min: number;
  price_max?: number;
}

export const dummyProductData: IProduct[] = [
  {
    id: 1,
    title: "Calvin Klein All, 100ml",
    price: 123,
    price_min: 1234,
    rating: 13,
    qty: 12,
    thumbnail: "/assets/uploads/images/slider1.png"
  },

  {
    id: 2,
    title: "Bruno Banna, 100ml",
    price: 89,
    price_min: 1234,
    rating: 13,
    qty: 12,
    thumbnail: "/assets/uploads/images/slider2.png"
  },
  {
    id: 3,
    title: "Super Bower, 200ml",
    price: 150,
    price_min: 1234,
    rating: 13,
    qty: 11,
    thumbnail: "/assets/uploads/images/slider3.png"
  },
  {
    id: 4,
    title: "Super Bower, 200ml",
    price: 150,
    price_min: 1234,
    rating: 13,
    qty: 11,
    thumbnail: "/assets/uploads/images/slider4.png"
  },
  {
    id: 5,
    title: "Bruno Banna, 100ml",
    price: 89,
    price_min: 1234,
    rating: 13,
    qty: 12,
    thumbnail: "/assets/uploads/images/slider5.png"
  },
  {
    id: 6,
    title: "Bruno Banna, 100ml",
    price: 89,
    price_min: 1234,
    rating: 13,
    qty: 12,
    thumbnail: "/assets/uploads/images/slider6.png"
  },
  {
    id: 7,
    title: "Bruno Banna, 100ml",
    price: 89,
    price_min: 1234,
    rating: 13,
    qty: 12,
    thumbnail: "/assets/uploads/images/slider7.png"
  }
];
