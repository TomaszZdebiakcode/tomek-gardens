import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Pricing from "@/components/sections/Pricing";
import Reviews from "@/components/sections/Reviews";
import Features from "@/components/sections/Features";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Pricing />
      <Reviews />
      <Features />
    </>
  );
}