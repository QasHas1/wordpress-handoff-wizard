import { useEffect } from "react";
import { Header } from "@/components/Header";
import { ArabicLessons } from "@/components/ArabicLessons";
import { Footer } from "@/components/Footer";

const ArabicPage = () => {
  useEffect(() => {
    document.title = "Ibn Al-Jazari Institute - Arabic";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ArabicLessons />
      <Footer />
    </div>
  );
};

export default ArabicPage;

