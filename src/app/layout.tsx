import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bistro by Rumipet | Borca",
  description: "Bistro și cafenea de specialitate în Borca, județul Neamț.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className={`${inter.className} antialiased px-4 md:px-8 lg:px-12`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
