import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// "Registrul" temporar ținut în memoria serverului Edge
const rateLimitMap = new Map();

// Atenție: exportăm funcția `proxy` pentru Next.js 16+
export function proxy(request: NextRequest) {
  // Extragem IP-ul corect prin headerele de proxy
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  // Luăm primul IP din listă sau setăm un fallback local
  const ip = forwardedFor?.split(",")[0].trim() ?? realIp ?? "127.0.0.1";

  // ==========================================
  // SETĂRI DE SECURITATE
  // ==========================================
  const limit = 20; // Numărul maxim de cereri permise...
  const windowMs = 10 * 1000; // ...în acest interval de timp (ex: 10 secunde)

  // Logica de limitare
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, {
      count: 1,
      lastReset: Date.now(),
    });
  } else {
    const ipData = rateLimitMap.get(ip);

    // Dacă a trecut fereastra de timp, resetăm contorul
    if (Date.now() - ipData.lastReset > windowMs) {
      ipData.count = 1;
      ipData.lastReset = Date.now();
    } else {
      // Adunăm la numărul de cereri
      ipData.count += 1;

      // Dacă a depășit limita, blocăm request-ul la nivel de proxy
      if (ipData.count > limit) {
        return new NextResponse(
          JSON.stringify({
            error: "Prea multe cereri!",
            message:
              "Te rugăm să aștepți câteva secunde înainte de a reîncărca pagina.",
          }),
          {
            status: 429,
            headers: { "content-type": "application/json" },
          },
        );
      }
    }
  }

  // Trecem mai departe dacă totul e ok
  return NextResponse.next();
}

// Configurația proxy-ului: ignorăm fișierele statice pentru a nu bloca imaginile
export const config = {
  matcher:
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|png|svg|webp)).*)",
};
