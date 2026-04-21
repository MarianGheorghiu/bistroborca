"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Star, MapPin } from "lucide-react";

const Hero = () => {
  // Starea pentru a stoca dacă este deschis și la ce oră se deschide următoarea dată
  const [shopStatus, setShopStatus] = useState<{
    isOpen: boolean;
    nextOpen: string;
  } | null>(null);

  useEffect(() => {
    const checkStatus = () => {
      // Obținem data și ora exactă a României, indiferent pe ce fus orar este vizitatorul
      const roTime = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Europe/Bucharest" }),
      );
      const hour = roTime.getHours();
      const day = roTime.getDay(); // 0 = Duminică, 1 = Luni, ..., 6 = Sâmbătă

      let isOpenNow = false;
      let nextOpenText = "07:00";

      // Program Duminică: 08:00 - 20:00
      if (day === 0) {
        isOpenNow = hour >= 8 && hour < 20;
        if (hour < 8)
          nextOpenText = "08:00"; // Duminică dimineața
        else nextOpenText = "07:00"; // Duminică seara (următoarea zi e luni, se deschide la 7)
      }
      // Program Luni - Sâmbătă: 07:00 - 20:00
      else {
        isOpenNow = hour >= 7 && hour < 20;
        if (hour >= 20 && day === 6) {
          nextOpenText = "08:00"; // Sâmbătă seara (următoarea zi e duminică, se deschide la 8)
        } else {
          nextOpenText = "07:00"; // În orice altă seară din timpul săptămânii
        }
      }

      setShopStatus({ isOpen: isOpenNow, nextOpen: nextOpenText });
    };

    checkStatus(); // Verificăm instant la încărcare
    const interval = setInterval(checkStatus, 60000); // Actualizăm o dată pe minut pentru a se schimba automat la oră fixă

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-16 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* =========================================
            COLOANA STÂNGĂ: Text și Acțiuni
            ========================================= */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#3E2723] leading-[1.1]">
            Savoare și relaxare <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E2723] to-[#8D6E63]">
              în inima munților
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#3E2723]/80 font-medium max-w-lg leading-relaxed mx-auto lg:mx-0">
            Bistro by Rumipet este locul unde cafeaua de specialitate întâlnește
            o atmosferă premium. Te așteptăm în Borca pentru o experiență locală
            autentică.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
            <a
              href="#meniu"
              className="inline-flex justify-center items-center gap-2 bg-[#3E2723] text-[#FAF6F0] px-8 py-4 rounded-full font-semibold hover:bg-[#5D4037] transition-all hover:scale-105 active:scale-95 shadow-lg group"
            >
              Vezi Meniul
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#locatie"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full font-semibold text-[#3E2723] bg-white/30 backdrop-blur-md border border-white/50 hover:bg-white/50 transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              <MapPin size={18} />
              Localizare
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 w-full">
            <div className="flex flex-col items-center lg:items-start text-sm font-bold">
              <div className="flex text-yellow-600 gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-[#3E2723] opacity-90 tracking-wide">
                APRECIAT DE CLIENȚII NOȘTRI LOCALI
              </span>
            </div>
          </div>
        </div>

        {/* =========================================
            COLOANA DREAPTĂ: Imaginea Reală
            ========================================= */}
        <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] flex items-center justify-center mt-8 lg:mt-0">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-[2.5rem] transform rotate-2 scale-105 border border-white/30"></div>

          <div className="relative w-full h-full bg-white/40 backdrop-blur-md border-2 border-white/60 shadow-2xl rounded-[2.5rem] overflow-hidden">
            <Image
              src="/hero.jpg"
              alt="Exterior Bistro by Rumipet"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />

            {/* BADGE DINAMIC PROGRAM */}
            {shopStatus && (
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-xl px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-white animate-in fade-in zoom-in duration-500">
                <span
                  className={`w-2 h-2 rounded-full animate-pulse ${shopStatus.isOpen ? "bg-green-500" : "bg-red-500"}`}
                ></span>
                <span className="text-xs font-bold text-[#3E2723]">
                  {shopStatus.isOpen
                    ? "DESCHIS ACUM"
                    : `ÎNCHIS, DESCHIDEM LA ${shopStatus.nextOpen}`}
                </span>
              </div>
            )}

            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-xl border border-white shadow-xl rounded-2xl p-4 hidden md:flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-[#3E2723] text-[#FAF6F0] p-3 rounded-full shadow-inner">
                <Star size={24} fill="currentColor" />
              </div>
              <div className="pr-2">
                <p className="font-extrabold text-[#3E2723] text-xl leading-tight">
                  4.9
                </p>
                <p className="text-[10px] font-bold text-[#3E2723]/70 uppercase tracking-tighter">
                  Scor Clienți
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
