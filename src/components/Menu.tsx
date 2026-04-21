"use client";

import { useState } from "react";
import { Coffee, Utensils, CakeSlice, CupSoda } from "lucide-react";

const menuCategories = [
  {
    id: "coffee",
    label: "Coffee Bar",
    icon: <Coffee size={20} />,
    description: "Cafea premium Costa și specialități preparate cu pasiune.",
    items: [
      {
        name: "Specialty Espresso",
        description: "O extracție perfectă, note de ciocolată și alune.",
        price: "12 Lei",
      },
      {
        name: "Creamy Cappuccino",
        description: "Espresso, cremă de lapte fină și artă în ceașcă.",
        price: "16 Lei",
      },
      {
        name: "Signature Iced Latte",
        description: "Răcoritor, echilibrat, servit pe gheață artizanală.",
        price: "18 Lei",
      },
      {
        name: "Întregul Meniu de Cafea",
        description:
          "Vino în locație pentru a descoperi toate varietățile noastre de brew și arome.",
        price: "Te așteptăm",
      },
    ],
  },
  {
    id: "food",
    label: "Bistro & Grill",
    icon: <Utensils size={20} />,
    description:
      "Preparate sățioase, de la burgeri premium la clasicii mici artizanali.",
    items: [
      {
        name: "Premium Beef Burger",
        description:
          "Chiflă brioche, carne de vită suculentă și cartofi aurii.",
        price: "45 Lei",
      },
      {
        name: "Pizza Tradițională",
        description: "Blat dospit lent, ingrediente proaspete și mozzarella.",
        price: "38 Lei",
      },
      {
        name: "Mici Artizanali",
        description: "Rețetă autentică, serviți cu muștar și pâine proaspătă.",
        price: "25 Lei",
      },
      {
        name: "Restul Preparatelor",
        description:
          "Te invităm la masă pentru a savura întreaga noastră gamă de preparate.",
        price: "Te așteptăm",
      },
    ],
  },
  {
    id: "sweets",
    label: "Patiserie & Dulciuri",
    icon: <CakeSlice size={20} />,
    description:
      "Prăjituri naturale, torturi fine și produse de patiserie proaspete.",
    items: [
      {
        name: "Tortul Casei",
        description: "Ingrediente 100% naturale, rețete artizanale zilnice.",
        price: "22 Lei",
      },
      {
        name: "Croissant cu Unt",
        description: "Pufos, crocant și copt proaspăt în fiecare dimineață.",
        price: "10 Lei",
      },
      {
        name: "Înghețată Artizanală",
        description: "Arome intense preparate din fructe și lapte premium.",
        price: "15 Lei",
      },
      {
        name: "Vitrina cu Deserturi",
        description:
          "Treci pe la noi să vezi selecția zilnică de prăjituri de casă și bunătăți proaspete.",
        price: "Te așteptăm",
      },
    ],
  },
  {
    id: "refreshments",
    label: "Răcoritoare",
    icon: <CupSoda size={20} />,
    description: "Băuturi proaspete pentru a completa perfect orice preparat.",
    items: [
      {
        name: "Limonadă cu Mentă",
        description: "Lămâi proaspăt stoarse, miere și mentă proaspătă.",
        price: "18 Lei",
      },
      {
        name: "Fresh de Portocale",
        description: "100% natural, stors pe loc pentru maximum de vitamine.",
        price: "20 Lei",
      },
      {
        name: "Apă Minerală / Plată",
        description: "Selecție de ape premium servite la sticlă.",
        price: "10 Lei",
      },
      {
        name: "Meniu",
        description: "Descoperă la bar toate sucurile și băuturile noastre.",
        price: "Te așteptăm",
      },
    ],
  },
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState(menuCategories[0].id);
  const activeCategory = menuCategories.find((c) => c.id === activeTab);

  return (
    <section id="meniu" className="py-8 px-4 md:px-8 lg:px-12 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#3E2723] mb-4">
            Selecția Noastră
          </h2>
          <p className="text-lg text-[#3E2723]/70 font-medium max-w-2xl mx-auto text-center">
            Descoperă o parte din bunătățile noastre. Vizitează Bistro by
            Rumipet pentru experiența completă!
          </p>
        </div>

        <div className="w-full md:w-auto grid grid-cols-2 md:flex md:flex-wrap justify-center gap-2 md:gap-3 mb-10 bg-white/30 backdrop-blur-md border border-white/50 p-2.5 rounded-3xl md:rounded-full shadow-sm">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-2 px-3 py-3 md:px-6 md:py-3 rounded-2xl md:rounded-full font-semibold transition-all duration-300 cursor-pointer text-center ${
                activeTab === category.id
                  ? "bg-[#3E2723] text-[#FAF6F0] shadow-md scale-[1.02] md:scale-105"
                  : "text-[#3E2723] hover:bg-white/40"
              }`}
            >
              {category.icon}
              <span className="text-[11px] sm:text-sm md:text-base leading-tight">
                {category.label}
              </span>
            </button>
          ))}
        </div>

        <div className="w-full bg-white/40 backdrop-blur-xl border-2 border-white/60 shadow-2xl rounded-[2.5rem] p-5 md:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center mb-8 border-b border-[#3E2723]/10 pb-6">
            <h3 className="text-2xl font-bold text-[#3E2723] mb-2">
              {activeCategory?.label}
            </h3>
            <p className="text-[#3E2723]/70">{activeCategory?.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-8">
            {activeCategory?.items.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row md:justify-between items-center md:items-start gap-4 group transition-all duration-300 ${
                  index === 3
                    ? "bg-white/40 border border-white/60 p-6 rounded-3xl shadow-sm hover:bg-white/60"
                    : "p-2"
                }`}
              >
                {/* Zona de Text (Centrată pe mobil, Aliniată la stânga pe desktop) */}
                <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
                  <h4
                    className={`text-xl md:text-lg font-extrabold transition-colors ${
                      index === 3
                        ? "text-[#8D6E63]"
                        : "text-[#3E2723] group-hover:text-[#8D6E63]"
                    }`}
                  >
                    {item.name}
                  </h4>
                  <p className="text-sm font-medium text-[#3E2723]/70 mt-2 md:mt-1.5 leading-relaxed max-w-xs md:max-w-none">
                    {item.description}
                  </p>
                </div>

                {/* Zona de Preț (Buton Full Width pe mobil, Inline pe desktop) */}
                <div className="w-full md:w-auto flex-shrink-0 mt-2 md:mt-0">
                  <span
                    className={`block md:inline-block w-full md:w-auto text-center text-sm font-bold px-6 py-3 md:py-2 rounded-full shadow-md md:shadow-sm transition-transform active:scale-95 ${
                      index === 3
                        ? "bg-[#8D6E63] text-white"
                        : "bg-[#3E2723] text-[#FAF6F0]"
                    }`}
                  >
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 md:mt-12 text-center">
            <span className="inline-block text-[11px] uppercase tracking-widest font-extrabold text-[#3E2723]/60 bg-white/50 px-6 py-2 rounded-full border border-white/60 shadow-sm">
              Calitate Premium & Ingrediente Naturale
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
