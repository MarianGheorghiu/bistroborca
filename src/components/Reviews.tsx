"use client";

import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ionuț R.",
    text: "Am oprit la o cafea pe drumul spre Vatra Dornei și am rămas surprins. Cafea super bună, exact ca la cafenelele de fițe din oraș.",
  },
  {
    name: "Alex M.",
    text: "Cea mai faină locație din Borca! Burgerii sunt demențiali, chifla moale și carnea suculentă. Bravo băieți!",
  },
  {
    name: "Maria T.",
    text: "O oază de liniște. Ne-am oprit întâmplător, dar am revenit a doua zi pentru prăjiturile alea de casă. Recomand din suflet.",
  },
  {
    name: "Bogdan C.",
    text: "Un espresso scurt și corect. Personalul e de treabă, te servesc repede. Atmosferă mișto și curățenie exemplară.",
  },
  {
    name: "Ștefan D.",
    text: "În sfârșit un loc unde poți mânca ceva bun în zonă. Am luat pizza și a fost ce trebuie, blat subțire și ingrediente ok.",
  },
  {
    name: "Alina P.",
    text: "Cafeaua excelentă, prețuri super decente pentru calitatea pe care o oferă. Designul e superb, foarte cozy.",
  },
  {
    name: "Cristi S.",
    text: "Mici blană, cartofi buni și o limonadă rece. Fix ce aveam nevoie după o zi obositoare pe munte.",
  },
  {
    name: "Gabriela I.",
    text: "Foarte curat, baia lună, ceea ce contează enorm pe drum. Am băut un cappuccino de nota 10.",
  },
  {
    name: "Valentin O.",
    text: "Atmosferă faină, muzică în surdină, nu urlă boxele ca în alte părți. O experiență super relaxantă.",
  },
  {
    name: "Mihaela E.",
    text: "Singurul loc din zonă unde chiar merită să te oprești. Dacă treceți prin Neamț, nu-i ratați.",
  },
];

const Reviews = () => {
  // Dublăm lista pentru a asigura un scroll infinit perfect
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section id="recenzii" className="py-8 px-4 md:px-8 lg:px-12 relative z-10">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        .animate-marquee {
          animation: scroll 40s linear infinite;
          width: max-content; 
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `,
        }}
      />

      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Header-ul copiază exact stilul de la Menu */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#3E2723] mb-4">
            Ce spun oaspeții noștri
          </h2>
          <p className="text-lg text-[#3E2723]/70 font-medium max-w-2xl mx-auto text-center">
            Ne bucurăm să oferim experiențe memorabile. Iată ce spun cei care
            ne-au trecut pragul!
          </p>
        </div>

        {/* Containerul Liquid Glass */}
        <div className="w-full">
          {/* Zona de fade (mască) pentru a nu tăia brusc marginile pe desktop/mobil */}
          <div
            className="w-full overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            }}
          >
            {/* Banda rulantă */}
            <div className="flex gap-4 md:gap-6 animate-marquee px-4">
              {doubledReviews.map((review, index) => (
                <div
                  key={index}
                  className="w-[280px] md:w-[350px] shrink-0 flex flex-col bg-white/50 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-white/60 transition-all duration-300 hover:bg-white/70 hover:shadow-md cursor-default"
                >
                  <Quote size={24} className="text-[#8D6E63]/40 mb-4" />
                  <p className="text-[#3E2723]/80 font-medium text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[#3E2723]/10">
                    <div className="w-10 h-10 rounded-full bg-[#3E2723] text-[#FAF6F0] flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#3E2723] text-sm md:text-base">
                        {review.name}
                      </h4>
                      <div className="flex text-yellow-600 gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={12} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
