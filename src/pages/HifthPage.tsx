import { useEffect } from "react";
import { Header } from "@/components/Header";
import { HifthLessons } from "@/components/HifthLessons";
import { Footer } from "@/components/Footer";

const HifthPage = () => {
  useEffect(() => {
    document.title = "Ibn Al-Jazari Institute - Hifth";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HifthLessons />
      <Footer />
    </div>
  );
};

export default HifthPage;

