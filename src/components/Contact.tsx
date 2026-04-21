"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const schedule = [
    { day: "Luni – Vineri", hours: "07:00 - 20:00" }, // Am folosit en-dash (–) pentru un aspect mai rafinat
    { day: "Sâmbătă", hours: "07:00 - 17:00" },
    { day: "Duminică", hours: "08:00 - 17:00" },
  ];

  return (
    <section
      id="contact"
      className="py-6 scroll-mt-26 px-4 md:px-8 lg:px-12 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* =========================================
            Antetul Secțiunii
            ========================================= */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#3E2723] mb-4">
            Te așteptăm la Bistro
          </h2>
          <p className="text-lg text-[#3E2723]/70 font-medium max-w-xl mx-auto px-4 md:px-0">
            Indiferent dacă vrei o cafea rapidă sau o masă relaxantă, suntem
            aici pentru tine.
          </p>
        </div>

        {/* =========================================
            Panoul Principal - Liquid Glass Premium
            ========================================= */}
        <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl rounded-[2.5rem] md:rounded-[3rem] p-5 sm:p-8 md:p-12 flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch">
          {/* =========================================
              COLOANA STÂNGA: Date & Program 
              ========================================= */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            {/* Secțiunea de Informații Rapide */}
            <div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-5 text-center">
                Contactează-ne
              </h3>

              <div className="space-y-3">
                {/* Card Telefon */}
                <a
                  href="tel:0734037273"
                  className="flex items-center gap-4 bg-white/50 hover:bg-white/80 p-3.5 rounded-3xl border border-white/60 shadow-sm transition-all duration-300 group cursor-pointer active:scale-[0.98]"
                >
                  <div className="bg-[#3E2723] p-3 rounded-2xl text-[#FAF6F0] shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-bold text-[#3E2723]/50 uppercase tracking-widest mb-0.5">
                      Telefon
                    </p>
                    <p className="text-[15px] sm:text-lg font-extrabold text-[#3E2723] group-hover:text-[#8D6E63] transition-colors leading-none">
                      0734 037 273
                    </p>
                  </div>
                </a>

                {/* Card Email */}
                <a
                  href="mailto:contact@rumipet.ro"
                  className="flex items-center gap-4 bg-white/50 hover:bg-white/80 p-3.5 rounded-3xl border border-white/60 shadow-sm transition-all duration-300 group cursor-pointer active:scale-[0.98]"
                >
                  <div className="bg-[#3E2723] p-3 rounded-2xl text-[#FAF6F0] shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-bold text-[#3E2723]/50 uppercase tracking-widest mb-0.5">
                      Email
                    </p>
                    <p className="text-[15px] sm:text-lg font-extrabold text-[#3E2723] group-hover:text-[#8D6E63] transition-colors leading-tight break-words">
                      contact@rumipet.ro
                    </p>
                  </div>
                </a>

                {/* Card Adresă */}
                <div className="flex items-center gap-4 bg-white/50 p-3.5 rounded-3xl border border-white/60 shadow-sm group">
                  <div className="bg-[#3E2723] p-3 rounded-2xl text-[#FAF6F0] shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-bold text-[#3E2723]/50 uppercase tracking-widest mb-0.5">
                      Adresă
                    </p>
                    <p className="text-sm sm:text-base font-extrabold text-[#3E2723] leading-tight">
                      Strada Principală nr 22, Borca, 617075
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Separator subtil cu distanțe mult mai mici (my-5 în loc de pb-8 / pt-8) */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#3E2723]/10 to-transparent my-6"></div>

            {/* Secțiunea de Program - REPARATĂ: Tabel unificat, mult mai premium */}
            <div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-5 flex items-center justify-center gap-3">
                <Clock className="text-[#8D6E63]" size={26} />
                Program
              </h3>

              {/* Un singur container unitar cu divide-y pentru linii fine între zile */}
              <div className="bg-white/50 rounded-3xl border border-white/60 shadow-sm flex flex-col divide-y divide-[#3E2723]/10 overflow-hidden">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center px-5 py-3.5 hover:bg-white/40 transition-colors"
                  >
                    <span className="text-[13px] sm:text-sm font-bold text-[#3E2723]/70 uppercase tracking-wider">
                      {item.day}
                    </span>
                    <span className="font-extrabold text-[#3E2723] text-sm sm:text-base">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =========================================
              COLOANA DREAPTĂ: Harta Google Integrată
              ========================================= */}
          <div className="w-full lg:w-7/12 flex flex-col mt-2 lg:mt-0">
            <h3 className="text-2xl font-bold text-[#3E2723] mb-5 text-center">
              Cum ajungi la noi
            </h3>

            <div className="flex-grow min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] rounded-[2rem] overflow-hidden relative border-4 border-white/60 shadow-lg group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21694.916837134515!2d25.74594497680663!3d47.18008743535736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47357938ce0ebd6d%3A0xbc78ae377e0421da!2sBistro%20by%20Rumipet!5e0!3m2!1sro!2sro!4v1776763101803!5m2!1sro!2sro"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(0.2) contrast(1.1) opacity(0.9)",
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
