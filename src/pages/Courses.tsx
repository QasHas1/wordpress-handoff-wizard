import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Courses } from "@/components/Courses";
import { QiraatLessons } from "@/components/QiraatLessons";
import { HifthLessons } from "@/components/HifthLessons";
import { ArabicLessons } from "@/components/ArabicLessons";
import { Footer } from "@/components/Footer";

const CoursesPage = () => {
  useEffect(() => {
    document.title = "Ibn Al-Jazari Institute - Courses";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Courses />
      <QiraatLessons />
      <HifthLessons />
      <ArabicLessons />
      <Footer />
    </div>
  );
};

export default CoursesPage;
