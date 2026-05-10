"use client";

import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ionuț R.",
    text: "Un popas excelent pe drumul spre Vatra Dornei. Am fost plăcut surprins să descopăr o cafea premium, la același standard cu cele mai bune cafenele de specialitate din oraș.",
  },
  {
    name: "Alex M.",
    text: "Fără îndoială, cea mai rafinată locație din Borca! Burgerii sunt excepționali – carne suculentă și ingrediente de top. O experiență culinară peste așteptări.",
  },
  {
    name: "Maria T.",
    text: "O adevărată oază de relaxare. Ne-am oprit întâmplător, dar am revenit a doua zi pentru deserturile savuroase. Recomand acest bistro tuturor celor care tranzitează județul Neamț.",
  },
  {
    name: "Bogdan C.",
    text: "Un espresso impecabil și o servire ireproșabilă. Am apreciat în mod special curățenia exemplară și atmosfera modernă. Locul ideal pentru o pauză rafinată.",
  },
  {
    name: "Ștefan D.",
    text: "În sfârșit, un restaurant în zona Borca unde poți savura o masă de înaltă calitate. Pizza are un blat perfect și ingrediente proaspete, alese cu grijă.",
  },
  {
    name: "Alina P.",
    text: "Raportul calitate-preț este excelent. Cafeaua este desăvârșită, iar designul interior îți oferă acea atmosferă intimă și premium, rară în această zonă.",
  },
  {
    name: "Cristi S.",
    text: "Preparatele la grill sunt extrem de savuroase, iar limonada a fost exact ce aveam nevoie după un traseu pe munte. O surpriză gastronomică extraordinară.",
  },
  {
    name: "Gabriela I.",
    text: "Curățenia este la cele mai înalte standarde, un detaliu crucial pentru călători. Mai mult, cappuccino-ul pe care l-am savurat aici a fost absolut delicios.",
  },
  {
    name: "Valentin O.",
    text: "O atmosferă de o eleganță discretă, cu muzică ambientală în surdină. Este mediul perfect pentru a savura o masă liniștită sau pentru o întâlnire de afaceri.",
  },
  {
    name: "Mihaela E.",
    text: "O destinație culinară care merită din plin! Dacă tranzitați Neamțul pe traseul spre Vatra Dornei, Bistro by Rumipet este oprirea obligatorie pentru calitate și bun gust.",
  },
];

const Reviews = () => {
  // Dublăm lista pentru a asigura un scroll infinit perfect
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section
      id="recenzii"
      className="py-16 mt-4 scroll-mt-14 mb-4 px-4 md:px-8 lg:px-12 relative z-10"
    >
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
            Cuvintele oaspeților noștri
          </h2>
          <p className="text-lg text-[#3E2723]/70 font-medium max-w-2xl mx-auto text-center">
            Ne mândrim cu o comunitate care apreciază detaliile și gustul bun.
            Iată câteva gânduri de la cei care s-au bucurat de experiența Bistro
            by Rumipet.
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
