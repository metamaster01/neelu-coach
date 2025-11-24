import Header from "@/components/header";
import Hero from "@/components/hero";
import MessageSection from "@/components/MessageSection"
import Help from "@/components/help"
import Services from "@/components/services";
import AboutMe from "@/components/aboutme";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
       <Hero/>
      <MessageSection /> 
      <Help/>
      <Services/>
      <AboutMe/>
    </main>
  );
}

