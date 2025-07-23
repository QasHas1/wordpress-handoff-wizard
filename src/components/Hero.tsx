
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          IBN AL JAZARI INSTITUTE
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-yellow-300 font-semibold tracking-wide">
          QIRAAT - HIFTH - TAJWEED - ARABIC
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto font-arabic leading-relaxed" dir="rtl">
          معهد ابن الجزري للقراءات والتجويد والحفظ واللغة العربية
        </p>
        
        <Button 
          size="lg" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          <Send className="mr-2 h-5 w-5" />
          Contact us
        </Button>
      </div>
    </section>
  );
};
