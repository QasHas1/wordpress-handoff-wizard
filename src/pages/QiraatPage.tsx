import { useEffect } from "react";
import { Header } from "@/components/Header";
import { QiraatLessons } from "@/components/QiraatLessons";
import { Footer } from "@/components/Footer";

const QiraatPage = () => {
  useEffect(() => {
    document.title = "Ibn Al-Jazari Institute - Qiraat";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <QiraatLessons />
      <Footer />
    </div>
  );
};

export default QiraatPage;

