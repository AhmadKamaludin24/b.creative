import React from "react";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";

import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";

import ClientSection from "./components/ClientSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div className="bg-black mx-auto relative px-5 sm:px-10 flex justify-center items-center flex-col overflow-hidden">
      <div className="max-w-7xl w-full relative"> 
        
        <HomeSection/>
        <ClientSection/>
        <AboutSection/>
        <ServicesSection/>
        <TeamSection/>
        <Footer/>
      </div>
    </div>
  );
}
