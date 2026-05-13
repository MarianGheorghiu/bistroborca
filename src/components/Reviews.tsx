"use client";

import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ionuț R.",
    text: "Sincer, am oprit doar să folosim baia și să luăm o apă. Am văzut ce mâncare ieșea din bucătărie și am rămas la un burger. Absolut demențial! Baia e lună, cafeaua tare. Opriți cu încredere.",
  },
  {
    name: "Alex M.",
    text: "În sfârșit un loc pe ruta spre Vatra Dornei unde nu mănânci sandvișuri obosite de la benzinărie. Pizza pe vatră e bombă, iar espresso-ul chiar te trezește la viață după 3 ore de condus.",
  },
  {
    name: "Maria T.",
    text: "Nu mă așteptam să găsesc specialty coffee în Borca. Eram super obosită la volan, dar flat white-ul de aici a salvat situația. Plus că au fost super rapizi cu comanda.",
  },
  {
    name: "Bogdan C.",
    text: "Am oprit la dus. Ne-a plăcut atât de mult încât am oprit și la întoarcere. Cartofii sunt geniali, carnea din burger suculentă, nu talpă. Prețuri super cinstite pentru ce primești.",
  },
  {
    name: "Ștefan D.",
    text: "Eram pe motor, înghețați și flămânzi. Locul ăsta a fost fix ce ne trebuia. Căldură, un grătar cinstit și o limonadă cum face bunica. Jos pălăria pentru servire!",
  },
  {
    name: "Alina P.",
    text: "Cel mai bun popas din județul Neamț. Fără fițe, curățenie exemplară (chestie rară pe traseu) și o cafea excelentă. Recomand oricui e în tranzit.",
  },
  {
    name: "Cristi S.",
    text: "Dacă ești din zonă sau doar în trecere, bagă un burger de la ei. Sincer, e la nivelul celor mai bune burgerii din Cluj sau București. Nu glumesc deloc.",
  },
  {
    name: "Gabriela I.",
    text: "Atmosferă faină, loc relaxat, nu urlă boxele cu muzică proastă. Am luat un desert și o cafea – nota 10. Chiar îți tragi sufletul și te relaxezi înainte să te întorci la volan.",
  },
  {
    name: "Valentin O.",
    text: "Mâncare excelentă și porții generoase. Raportul calitate-preț este imbatabil. A devenit oficial oprirea mea obligatorie ori de câte ori trec Carpații spre Moldova.",
  },
  {
    name: "Mihaela E.",
    text: "O surpriză excelentă! Curat, servire rapidă, gustos. Nu mai opriți pe marginea drumului la tot felul de chioșcuri, aici aveți mâncare caldă făcută pe bune.",
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
            Nu ne crede pe noi. Vezi ce spun cei care au oprit deja aici.
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
