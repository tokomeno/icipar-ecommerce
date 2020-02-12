export interface IBlogList {
  slug: string;
  title: string;
  thumbnail: string;
  created_at: string;
  excerpt: string;
}

export interface IBlogShow {
  slug: string;
  title: string;
  thumbnail: string;
  created_at: string;
  excerpt: string;
}

// "slug": "quasi",
// "title": "quasi",
// "thumbnail": "http://iciparis.ge/Content/Resources/Products/4673klorane-capillaire-apres-shampooing-illuminatrice-a-la-camomille-150-ml.jpg",
// "excerpt": "Christmas.' And she began very cautiously: 'But I don't care which happens!' She ate a little.",
// "created_at": "2020-02-11T19:47:12.000000Z"

export const dummyBlogData: IBlogList[] = [
  {
    slug: "adfdasfasdfsf",
    title: "სუნამოს შერჩევის ხელოვნება",
    excerpt:
      "ალბათ ყველას გვქონია მომენტი, როდესაც მივეშურებით ახალი სუნამოს შესაძენად, მაგრამ ზუსტად არ ვიცით როგორი არომატი გვსურს. სუნამოს შეძენისას, ხან ბრენდით ვიხიბლებით, ხან ვიზუალით, ხან მეგობრის რჩევას ვითვალისწინებთ, ხანაც კონსულტანტის. ხშირ შემთხვევაში ამართლებს და მოგვწონს, ხანდახან კი გვაწუხებს და დისკომფორტის შეგრძნებას იწვევს.",
    thumbnail: "/assets/uploads/images/blog1.png",
    created_at: "12 თებერვალი 2019"
  },
  {
    slug: "adfdasfasdfsf",
    title: "სუნამოს შერჩევა",
    excerpt:
      "ალბათ ყველას გვქონია მომენტი, როდესაც მივეშურებით ახალი სუნამოს შესაძენად, მაგრამ ზუსტად არ ვიცით როგორი არომატი გვსურს. სუნამოს შეძენისას, ხან ბრენდით ვიხიბლებით, ხან ვიზუალით, ხან მეგობრის რჩევას ვითვალისწინებთ, ხანაც კონსულტანტის. ხშირ შემთხვევაში ამართლებს და მოგვწონს, ხანდახან კი გვაწუხებს და დისკომფორტის შეგრძნებას იწვევს.",
    thumbnail: "/assets/uploads/images/blog2.png",
    created_at: "12 თებერვალი 2019"
  },
  {
    slug: "adfdasfasdfsf",
    title: "სუნამოს შერჩევა",
    excerpt:
      "ალბათ ყველას გვქონია მომენტი, როდესაც მივეშურებით ახალი სუნამოს შესაძენად, მაგრამ ზუსტად არ ვიცით როგორი არომატი გვსურს. სუნამოს შეძენისას, ხან ბრენდით ვიხიბლებით, ხან ვიზუალით, ხან მეგობრის რჩევას ვითვალისწინებთ, ხანაც კონსულტანტის. ხშირ შემთხვევაში ამართლებს და მოგვწონს, ხანდახან კი გვაწუხებს და დისკომფორტის შეგრძნებას იწვევს.",
    thumbnail: "/assets/uploads/images/blog3.png",
    created_at: "12 თებერვალი 2019"
  },
  {
    slug: "adfdasfasdfsf",
    title: "სუნამოს შერჩევა",
    excerpt:
      "ალბათ ყველას გვქონია მომენტი, როდესაც მივეშურებით ახალი სუნამოს შესაძენად, მაგრამ ზუსტად არ ვიცით როგორი არომატი გვსურს. სუნამოს შეძენისას, ხან ბრენდით ვიხიბლებით, ხან ვიზუალით, ხან მეგობრის რჩევას ვითვალისწინებთ, ხანაც კონსულტანტის. ხშირ შემთხვევაში ამართლებს და მოგვწონს, ხანდახან კი გვაწუხებს და დისკომფორტის შეგრძნებას იწვევს.",
    thumbnail: "/assets/uploads/images/blog4.png",
    created_at: "12 თებერვალი 2019"
  }
];
