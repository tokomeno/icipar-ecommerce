export interface IProductCetegory {
  id: number;
  title: string;
}

export const productCategories: IProductCetegory[] = [
  { id: 1, title: "სუნამოები" },
  { id: 2, title: "კანის მოვლა" },
  { id: 3, title: "თმის მოვლა" },
  { id: 4, title: "მაკიაჟი" }
  // { id: 5, title: "ფრჩხილის მოვლა" },
  // { id: 6, title: "პარაფარმაცია" },
  // { id: 7, title: "ფასდაკლება" }
  // { title: "სიახლე" },
  // { title: "ბრენდები" },
  // { title: "სასაჩუქრე ბარათი" },
  // { title: "ნაკრებები" },
  // { title: "ბლოგი" }
];
