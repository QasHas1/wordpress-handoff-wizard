import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Courses } from "@/components/Courses";
import { HifthLessons } from "@/components/HifthLessons";
import { QiraatLessons } from "@/components/QiraatLessons";
import { ArabicLessons } from "@/components/ArabicLessons";
import { Footer } from "@/components/Footer";

const CoursesPage = () => {
  useEffect(() => {
    document.title = "Ibn Al-Jazari Institute - Overview";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Courses />
      <HifthLessons />
      <QiraatLessons />
      <ArabicLessons />
      <Footer />
    </div>
  );
};

export default CoursesPage;
