import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Registration } from "@/components/Registration";

const HifthRegistration = () => {
  useEffect(() => {
    document.title = "Hifth Registration - Ibn Al-Jazari Institute";
  }, []);
  const hifthCourses = [
    "HIFTHBEG - Beginner Hifth (Juz 30)",
    "HIFTHINT - Intermediate Hifth (10 Juz)",
    "HIFTHADV - Advanced Hifth (Full Quran)",
    "HIFTHREV - Hifth Revision & Maintenance"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <Registration courseType="Hifth (Memorization)" courses={hifthCourses} />
      </div>
      <Footer />
    </div>
  );
};

export default HifthRegistration;