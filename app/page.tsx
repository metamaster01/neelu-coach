// import Header from "@/components/header";
import Hero from "@/components/hero";
import Feeling from "@/components/feelings";
import MessageSection from "@/components/MessageSection"
import Help from "@/components/help"
import Services from "@/components/services";
import AboutMe from "@/components/aboutme";
import Emotional from "@/components/emotional"; 
import ChildHealing from "@/components/ChildHealing";
import HowItWorks from "@/components/howitworks";
import Podcast from "@/components/podcast";
import {Testimonial } from "@/components/testimonial";
import Investment  from "@/components/investment";
import BeforeAfter from "@/components/beforeafter";
import Rebuild from "@/components/rebuild";
import PhotoCarousel  from "@/components/photo-carousel"
import RelationshipSection from "@/components/relationshipsection";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      
      <Hero/>
       <Feeling/>
      <MessageSection /> 
      <Help/>
      <Services/>
      <AboutMe/>
      <Emotional/>
      <ChildHealing/> 
      <HowItWorks/>
      <Podcast/>
      <Testimonial/>
      <Investment/>
      <BeforeAfter/>
      <Rebuild/>
      <PhotoCarousel/>
      <RelationshipSection/>
      <Footer/>

    </main>
  );
}

