import Contact from "@/components/custom/contact";
import Features from "@/components/custom/features";
import Hero from "@/components/custom/hero";
import Navbar from "@/components/custom/navbar";
import Products from "@/components/custom/products";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar/>
      <Hero/>
      <Products/>
      <Features/>
      <Contact/>
    </div>
  );
}
