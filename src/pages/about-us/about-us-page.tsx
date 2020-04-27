import React from "react";

import { PageSideMenu } from "../../components/pageSideMenu";

interface AboutUsPageProps {}

export const AboutUsPage: React.FC<AboutUsPageProps> = (props) => {
  return (
    <>
      <div className="container">
        <div className="about row">
          <PageSideMenu />
          <div className="col-lg-9">
            <div className="right">
              <div className="top">
                <h1 className="title">ჩვენს შესახებ</h1>
              </div>
              <div className="desc">
                <p className="txt">
                  დღეს ისი-პარის ქსელში 19 პარფიუმერიული მაღაზია შედის.
                  ისი-პარის პრიორიტეტია - ხარისხი და მრავალფეროვნება! მსოფლიო
                  პარფიუმერიული სიახლეები ქსელში დროულად ჩნდება და მრავალფეროვან
                  არჩევანს სთავაზობს მომხმარებელს.
                </p>
                <p className="txt">
                  ვერცხლისფერის და ცისფერის კომბინაცია, თანამედროვე ლოგო და
                  ნაცნობი წარწერა Ici Paris - დიახ, ეს თქვენი ისი პარია. 1995
                  წელს, როცა ქვეყანა ეკონომიკური პრობლემების ქაოსში ცხოვრობდა,
                  თბილისში ისი პარის პირველი მაღაზია გაიხსნა. ურთულესი დრო იყო,
                  ქვეყანას უჭირდა და ესთეტიკისთვის ნაკლებად ეცალათ…
                </p>
                <p className="txt">
                  ისი-პარი - ეს არის ყველაზე მოდური, ყველაზე ხარისხიანი, ყველაზე
                  საჭირო და სასარგებლო კომპანია, სადაც ყველაფერია თქვენი
                  სილამაზისა და ჯანმრთელობისთვის. აირჩიეთ სიახლეები! Ici Paris
                  (ქართულად - აქ არის პარიზი) ეპატიჟება ყველას, ვისაც სურს
                  პარფიუმერული სამყაროს რიტმს აჰყვეს, ყოველთვის ფორმაში იყოს და
                  კიდევ უფრო მომხიბვლელად გამოიყურებოდეს. ყურადღებით დააკვირდით
                  მაღაზიების ვიტრინებს – განახლებული ვიტრინები და საპრეზენტაციო
                  ზონები პარფიუმერულ სიახლეებზე მიგითითებთ. პარფიუმერული სამყარო
                  ძალიან სწრაფად ვითარდება, მსოფლიო სიახლეები და პრეზენტაციები -
                  დაუყოვნებლივ აღწევს ქართველ მომხმარებლამდე. ისი პარის
                  მაღაზიებში 80-ზე მეტი პარფიუმერული სახელია წარმოდგენილი:
                  CHANEL, Dior, Guerlain, Givenchy, Kenzo, BVLGARI, Gucci,
                  Escada, Stella Mccartney, Calvin Klein, Chloe, Marc Jacobs,
                  Burberry, Roberto Cavalli, Davidoff, Lancaster, Boss, Lacoste,
                  Trussardi, Mexx, Aguilera, Sabatini, James Bond, Bruno Banani,
                  Bourjois, Yves Saint Laurent, Lancome, Armani, Biotherm,
                  Cacharel, Shiseido, Dolce &amp; Gabbana, Narciso Rodriguez,
                  Alaia, Zadig&amp;Voltaire, Issey Miyake, Elie Saab, Mont
                  Blanc, S.T. Dupont, Coach, Tom Ford, Estee Lauder, Donna
                  Karan, Zegna, Antonio Banderas, Benetton, Shakira, Carolina
                  Herrera, Jean Paul Gaultier, Paco Rabanne, Nina Ricci,
                  Valentino, Prada, Sisley, Hermes, Pupa, Versace, Missoni,
                  Moschino, Jeanne Piaubert, Naf Naf, Chevignon, Bogart, Ted
                  Lapidus, Carven, Cartier, Palm Beach Beaute, Byblos, Marina De
                  Bourbon, Barbara Gould, Bettina Barty, John Players Special,
                  Avene, Klorene, Mavala, Ulric De Varens, Arno Sorel.
                  საერთაშორისო სტანდარტების მაღაზიები და მაღალი დონის
                  მომსახურება ისი-პარის ნებისმიერ სტუმარს საკუთარ არჩევანს
                  სთავაზობს. აქ შეგიძლიათ თქვენი სურვილი და შესაძლებლობა
                  შესანიშნავად მოარგოთ ერთმანეთს: თქვენს წინაშეა სუპერსელექტიური
                  პროდუქცია და შედარებით ხელმისაწვდომი – ლაიფსთაილი.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
