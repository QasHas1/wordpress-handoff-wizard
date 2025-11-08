import { useEffect } from "react";
import { Header } from "@/components/Header";
import { About as AboutSection } from "@/components/About";
import { WhatWeTeach } from "@/components/WhatWeTeach";
import { Footer } from "@/components/Footer";

const About = () => {
  useEffect(() => {
    document.title = "About Us - Ibn Al-Jazari Institute";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatWeTeach />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
