import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatWeTeach } from "@/components/WhatWeTeach";
import { QASPA } from "@/components/QASPA";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Ibn Al-Jazari Institute - Home";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhatWeTeach />
      <QASPA />
      <div className="py-12"></div>
      <Footer />
    </div>
  );
};

export default Index;
