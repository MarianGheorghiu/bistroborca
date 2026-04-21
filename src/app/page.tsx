import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"; // Importul nou

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Menu />
      <Reviews />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
