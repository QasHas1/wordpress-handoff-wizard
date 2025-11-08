import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QASPA } from "@/components/QASPA";
import { QiraatLessons } from "@/components/QiraatLessons";
import { HifthLessons } from "@/components/HifthLessons";
import { ArabicLessons } from "@/components/ArabicLessons";
import { Ijazaat } from "@/components/Ijazaat";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Ibn Al-Jazari Institute - Home";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <QASPA />
      <QiraatLessons />
      <HifthLessons />
      <ArabicLessons />
      <Ijazaat />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
