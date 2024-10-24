import React from "react"; 
import Hero1 from "../Componentes/HomePage/Hero1";
import Hero2 from "../Componentes/HomePage/Hero2";
import Hero3 from "../Componentes/HomePage/Hero3";
import Hero4 from "../Componentes/HomePage/Hero4";
import Hero5 from "../Componentes/HomePage/Hero5";
import Testimonial from "../Componentes/HomePage/Testimonial";

export default function HomePage() {
  return (
    <div className="bg-">
      <Hero1/>
      <Hero2/>
      <Hero3/>
      <Hero4/>
      <Hero5/>
      <Testimonial/>
    </div>
  );
}
