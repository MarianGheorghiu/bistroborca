"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  MapPin,
  CalendarHeart,
  ChevronLeft,
  ChevronRight,
  X,
  Info,
} from "lucide-react";

// Am actualizat la 11 imagini, pornind de la 0.jpg până la 10.jpg
const galleryImages = Array.from({ length: 11 }, (_, i) => `/${i}.jpg`);

const Location = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Dublăm lista pentru a asigura un scroll infinit perfect
  const carouselImages = [...galleryImages, ...galleryImages];

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  }, []);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextImage, prevImage, closeModal]);

  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextImage();
    if (isRightSwipe) prevImage();

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    // Am scos id-ul și am pus z-index-ul corect
    <section
      id="locatie"
      className={`py-16 px-4 scroll-mt-8 md:px-8 lg:px-12 relative ${isOpen ? "z-[60]" : "z-10"}`}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes galleryScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        .animate-gallery {
          animation: galleryScroll 55s linear infinite; /* Ușor încetinită pentru că sunt mai multe imagini */
          width: max-content;
        }
        .animate-gallery:hover {
          animation-play-state: paused;
        }
      `,
        }}
      />

      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* =========================================
            Antetul Secțiunii (Centrat)
            ========================================= */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#3E2723] mb-4">
            Povestea Noastră în <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E2723] to-[#8D6E63]">
              Inima Naturii
            </span>
          </h2>
          <p className="text-lg text-[#3E2723]/70 font-medium max-w-2xl mx-auto text-center">
            Amplasat strategic în peisajul pitoresc din Borca, județul Neamț,
            Bistro by Rumipet este un refugiu premium unde cafeaua de
            specialitate întâlnește preparatele artizanale.
          </p>
        </div>

        {/* =========================================
            Carduri Info
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16">
          <div className="bg-white/40 backdrop-blur-md rounded-2xl p-8 border border-white/60 shadow-sm flex flex-col items-center md:items-start text-center md:text-left transition-all hover:bg-white/60">
            <MapPin className="text-[#8D6E63] mb-4" size={32} />
            <h3 className="text-xl font-bold text-[#3E2723] mb-2">
              Locația Noastră
            </h3>
            <p className="text-[#3E2723]/80 font-medium leading-relaxed">
              Te așteptăm cu drag direct la strada principală în{" "}
              <strong className="text-[#3E2723]">Borca, județul Neamț</strong>.
              Un spațiu gândit pentru relaxare și momente de respiro.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-md rounded-2xl p-8 border border-white/60 shadow-sm flex flex-col items-center md:items-start text-center md:text-left transition-all hover:bg-white/60">
            <CalendarHeart className="text-[#8D6E63] mb-4" size={32} />
            <h3 className="text-xl font-bold text-[#3E2723] mb-2">
              Evenimente Private
            </h3>
            <p className="text-[#3E2723]/80 font-medium leading-relaxed">
              Organizăm{" "}
              <strong className="text-[#3E2723]">
                zile de naștere și evenimente restrânse
              </strong>
              . Oferim un meniu personalizat și o atmosferă intimă, premium,
              pentru momentele tale speciale.
            </p>
          </div>
        </div>

        {/* =========================================
            Caruselul Galeriei
            ========================================= */}
        <div className="w-full">
          <div
            className="w-full overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            }}
          >
            <div className="flex gap-4 md:gap-6 animate-gallery px-4 py-4 cursor-pointer">
              {carouselImages.map((src, index) => {
                const realIndex = index % galleryImages.length;
                return (
                  <div
                    key={index}
                    onClick={() => openModal(realIndex)}
                    className="w-[240px] md:w-[280px] h-[320px] md:h-[380px] shrink-0 rounded-2xl overflow-hidden relative border border-white/60 shadow-sm transition-all hover:shadow-md hover:scale-[1.02]"
                  >
                    <Image
                      src={src}
                      alt={`Galerie Bistro Borca ${realIndex}`}
                      fill
                      sizes="(max-width: 768px) 240px, 280px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[#3E2723]/0 hover:bg-[#3E2723]/20 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                      <Info className="text-white drop-shadow-md" size={32} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="text-xs font-bold text-[#3E2723]/50 mt-2 uppercase tracking-widest text-center">
            Apasă pe o imagine pentru a o mări
          </p>
        </div>
      </div>

      {/* =========================================
          Modalul (Lightbox) Interactiv
          ========================================= */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 z-[110] p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={32} />
          </button>

          <div className="absolute top-6 left-6 z-[110] text-white/70 font-semibold tracking-widest text-sm bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">
            {currentIndex + 1} / {galleryImages.length}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="hidden md:flex absolute left-8 z-[110] p-3 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-md transition-all active:scale-95"
          >
            <ChevronLeft size={36} />
          </button>

          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh] mx-4 flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={closeModal}
          >
            <div
              className="relative w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* unoptimized={true} forțează claritatea maximă a fișierului original */}
              <Image
                src={galleryImages[currentIndex]}
                alt={`Galerie mărită ${currentIndex}`}
                fill
                unoptimized={true}
                className="object-contain animate-in fade-in zoom-in-95 duration-300"
                priority
              />
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="hidden md:flex absolute right-8 z-[110] p-3 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-md transition-all active:scale-95"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Location;
