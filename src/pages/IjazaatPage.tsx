import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Ijazaat } from "@/components/Ijazaat";
import { Footer } from "@/components/Footer";

const IjazaatPage = () => {
  useEffect(() => {
    document.title = "Ibn Al-Jazari Institute - Ijazaat";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Ijazaat />
      <Footer />
    </div>
  );
};

export default IjazaatPage;
