import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Registration } from "@/components/Registration";

const ArabicRegistration = () => {
  useEffect(() => {
    document.title = "Arabic Registration - Ibn Al-Jazari Institute";
  }, []);
  const arabicCourses = [
    "ARAB01 - Arabic Alphabet & Basic Reading",
    "ARAB02 - Grammar Fundamentals", 
    "ARAB03 - Intermediate Arabic",
    "ARAB04 - Advanced Arabic & Literature",
    "ARABC - Arabic Conversation",
    "ARABQ - Quranic Arabic"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <Registration courseType="Arabic Language" courses={arabicCourses} />
      </div>
      <Footer />
    </div>
  );
};

export default ArabicRegistration;