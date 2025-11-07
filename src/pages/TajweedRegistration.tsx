import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Registration } from "@/components/Registration";

const TajweedRegistration = () => {
  useEffect(() => {
    document.title = "Tajweed Registration - Ibn Al-Jazari Institute";
  }, []);
  const tajweedCourses = [
    "TAJBEG - Beginner Tajweed",
    "TAJINT - Intermediate Tajweed", 
    "TAJADV - Advanced Tajweed",
    "TAJPOEM - Tajweed Poems",
    "TAJBOOK - Tajweed Books"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <Registration courseType="Tajweed Lessons" courses={tajweedCourses} />
      </div>
      <Footer />
    </div>
  );
};

export default TajweedRegistration;