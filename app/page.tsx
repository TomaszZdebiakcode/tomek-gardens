import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Pricing from "@/components/sections/Pricing";
import Reviews from "@/components/sections/Reviews";
import Features from "@/components/sections/Features";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import DeveloperCTA from "@/components/sections/DeveloperCTA";
import Footer from "@/components/layout/Footer";
import { Layout } from "lucide-react";

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
      <Process />
      <Contact />
      <FAQ />
      <DeveloperCTA />
      <Footer />
    </>
  );
}