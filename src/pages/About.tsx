import { Header } from "@/components/Header";
import { About as AboutSection } from "@/components/About";
import { WhatWeTeach } from "@/components/WhatWeTeach";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutSection />
      <WhatWeTeach />
      <Footer />
    </div>
  );
};

export default About;
