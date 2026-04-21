import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews"; // Importul nou

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Menu />
      <Reviews />
    </main>
  );
}
