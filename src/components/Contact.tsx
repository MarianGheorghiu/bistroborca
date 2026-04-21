"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const schedule = [
    { day: "Luni - Vineri", hours: "07:00 - 20:00" },
    { day: "Sâmbătă", hours: "07:00 - 20:00" },
    { day: "Duminică", hours: "08:00 - 20:00" },
  ];

  return (
    <section id="contact" className="py-24 px-4 md:px-8 lg:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Antetul Secțiunii */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#3E2723] mb-4">
            Te așteptăm la Bistro
          </h2>
          <p className="text-lg text-[#3E2723]/70 font-medium max-w-xl mx-auto">
            Indiferent dacă vrei o cafea rapidă sau o masă relaxantă, suntem
            aici pentru tine.
          </p>
        </div>

        {/* Panoul Principal - Liquid Glass Premium */}
        <div className="bg-white/40 backdrop-blur-xl border-2 border-white/60 shadow-2xl rounded-[3rem] p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row gap-12 items-stretch">
          {/* =========================================
              COLOANA STÂNGA: Date & Program 
              ========================================= */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center divide-y divide-[#3E2723]/10">
            {/* Secțiunea de Informații Rapide */}
            <div className="pb-8 space-y-6">
              <h3 className="text-2xl font-bold text-[#3E2723] mb-6">
                Contactează-ne
              </h3>

              <a
                href="tel:0734 037 273"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="bg-[#3E2723] p-3 rounded-2xl text-[#FAF6F0] transition-transform group-hover:scale-105 shadow-md">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#3E2723]/50 uppercase tracking-widest">
                    Telefon
                  </p>
                  <p className="text-lg font-bold text-[#3E2723] group-hover:text-[#8D6E63] transition-colors">
                    0734 037 273
                  </p>
                </div>
              </a>

              <a
                href="mailto:contact@rumipet.ro"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="bg-[#3E2723] p-3 rounded-2xl text-[#FAF6F0] transition-transform group-hover:scale-105 shadow-md">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#3E2723]/50 uppercase tracking-widest">
                    Email
                  </p>
                  <p className="text-lg font-bold text-[#3E2723] group-hover:text-[#8D6E63] transition-colors">
                    contact@rumipet.ro
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="bg-[#3E2723] p-3 rounded-2xl text-[#FAF6F0] transition-transform group-hover:scale-105 shadow-md">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#3E2723]/50 uppercase tracking-widest">
                    Adresă
                  </p>
                  <p className="text-lg font-bold text-[#3E2723]">
                    Strada Principală nr 22, Borca, Romania, 617075
                  </p>
                </div>
              </div>
            </div>

            {/* Secțiunea de Program */}
            <div className="pt-8">
              <h3 className="text-2xl font-bold text-[#3E2723] mb-6 flex items-center gap-3">
                <Clock className="text-[#8D6E63]" size={28} />
                Program
              </h3>

              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-white/40 px-4 py-3 rounded-xl border border-white/50 shadow-sm"
                  >
                    <span className="font-semibold text-[#3E2723]/80">
                      {item.day}
                    </span>
                    <span className="font-extrabold text-[#3E2723] bg-white/60 px-3 py-1 rounded-lg">
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
          <div className="w-full lg:w-7/12 flex flex-col">
            {/* Titlu centrat deasupra hărții */}
            <h3 className="text-2xl font-bold text-[#3E2723] mb-6 text-center">
              Cum ajungi la noi
            </h3>

            <div className="flex-grow min-h-[350px] lg:min-h-[400px] rounded-[2rem] overflow-hidden relative border-4 border-white/50 shadow-inner group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21694.916837134515!2d25.74594497680663!3d47.18008743535736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47357938ce0ebd6d%3A0xbc78ae377e0421da!2sBistro%20by%20Rumipet!5e0!3m2!1sro!2sro!4v1776763101803!5m2!1sro!2sro"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.3) opacity(0.9)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
