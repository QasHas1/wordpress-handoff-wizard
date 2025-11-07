import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Registration } from "@/components/Registration";

const QiraatRegistration = () => {
  useEffect(() => {
    document.title = "Qira'at Registration - Ibn Al-Jazari Institute";
  }, []);
  const qiraatCourses = [
    "QIR10MIN - Ten Minor Qira'at",
    "QIR10MAJ - Ten Major Qira'at", 
    "QIRASIM - Qira'at Asim",
    "QIRNAFI - Qira'at Nafi'",
    "QIRHAF - Qira'at Hafs",
    "QIRWAR - Qira'at Warsh"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <Registration courseType="Qira'at Lessons" courses={qiraatCourses} />
      </div>
      <Footer />
    </div>
  );
};

export default QiraatRegistration;