"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-8 px-4 md:px-8 lg:px-12 relative z-10">
      <div className="max-w-6xl mx-auto bg-white/40 backdrop-blur-xl border border-white/60 shadow-sm rounded-[1.5rem] p-5 md:px-8 md:py-6">
        {/* SECȚIUNEA PRINCIPALĂ: Așezată pe un singur rând pe desktop */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* BRAND & SEO TEXT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg">
            <h2 className="text-xl font-extrabold text-[#3E2723] mb-1">
              Bistro by <span className="text-[#8D6E63]">Rumipet</span>
            </h2>
            <p className="text-[11px] md:text-xs text-[#3E2723]/70 font-medium leading-relaxed">
              Experiență premium în Borca, Neamț. Cafea de specialitate,
              preparate artizanale și evenimente private.
            </p>
          </div>

          {/* SOCIAL MEDIA BUTTONS */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61573180810546&locale=ro_RO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/50 rounded-lg border border-white/60 text-[#3E2723] hover:bg-[#3E2723] hover:text-white transition-all duration-300 group shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Facebook
              </span>
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/50 rounded-lg border border-white/60 text-[#3E2723] hover:bg-[#3E2723] hover:text-white transition-all duration-300 group shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Instagram
              </span>
            </a>

            <a
              href="https://wa.me/40734037273"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/50 rounded-lg border border-white/60 text-[#3E2723] hover:bg-[#3E2723] hover:text-white transition-all duration-300 group shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span className="text-[10px] font-bold uppercase tracking-wider">
                WhatsApp
              </span>
            </a>
          </div>
        </div>

        {/* LINIE DESPĂRȚITOARE FINĂ */}
        <div className="w-full h-px bg-[#3E2723]/10 my-4 md:my-5"></div>

        {/* COPYRIGHT & CREDITS */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] md:text-xs font-bold text-[#3E2723]/50 uppercase tracking-widest">
          <p>© {currentYear} Bistro by Rumipet</p>

          <div className="flex items-center gap-1">
            Made with <span className="text-red-400">❤</span> by
            <a
              href="#"
              className="text-[#3E2723] hover:text-[#8D6E63] transition-colors border-b border-[#3E2723]/20 hover:border-[#8D6E63] ml-1"
            >
              mcropdev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
