export interface IProduct {
  id: number;
  title: string;
  price: number;
  qty: number;
  image: string;
}

export const dummyProductData: IProduct[] = [
  {
    id: 1,
    title: "Calvin Klein All, 100ml",
    price: 123,
    qty: 12,
    image: "/assets/uploads/images/slider1.png"
  },

  {
    id: 2,
    title: "Bruno Banna, 100ml",
    price: 89,
    qty: 12,
    image: "/assets/uploads/images/slider2.png"
  },
  {
    id: 2,
    title: "Super Bower, 200ml",
    price: 150,
    qty: 11,
    image: "/assets/uploads/images/slider3.png"
  }
];
