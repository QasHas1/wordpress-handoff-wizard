import { useEffect } from "react";
import { Header } from "@/components/Header";
import { About as AboutSection } from "@/components/About";
import { WhatWeTeach } from "@/components/WhatWeTeach";
import { Mission } from "@/components/Mission";
import { Journey } from "@/components/Journey";
import { Footer } from "@/components/Footer";

const About = () => {
  useEffect(() => {
    document.title = "About Us - Ibn Al-Jazari Institute";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutSection />
      <WhatWeTeach />
      <Mission />
      <Journey />
      <Footer />
    </div>
  );
};

export default About;
