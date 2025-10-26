
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Courses } from "@/components/Courses";
import { QASPA } from "@/components/QASPA";
import { QiraatLessons } from "@/components/QiraatLessons";
import { HifthLessons } from "@/components/HifthLessons";
import { ArabicLessons } from "@/components/ArabicLessons";
import { Ijazaat } from "@/components/Ijazaat";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Courses />
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
