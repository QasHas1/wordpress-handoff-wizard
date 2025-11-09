import { useEffect } from "react";
import { Header } from "@/components/Header";
import { TajweedLessons } from "@/components/TajweedLessons";
import { Footer } from "@/components/Footer";

const TajweedPage = () => {
  useEffect(() => {
    document.title = "Ibn Al-Jazari Institute - Tajweed";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <TajweedLessons />
      <Footer />
    </div>
  );
};

export default TajweedPage;

