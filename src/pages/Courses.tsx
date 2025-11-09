import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Courses } from "@/components/Courses";
import { Footer } from "@/components/Footer";

const CoursesPage = () => {
  useEffect(() => {
    document.title = "Ibn Al-Jazari Institute - Overview";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Courses />
      <Footer />
    </div>
  );
};

export default CoursesPage;
