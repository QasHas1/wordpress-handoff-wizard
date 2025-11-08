import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import qaspaBackground from "@/assets/qaspa-background.jpg";

export const QASPA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${qaspaBackground})` }}
      >
        <div className="absolute inset-0 bg-green-900/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-white">Q.A.S.P.A</h2>
          <p className="text-2xl mb-8 text-white font-semibold">
            We are all members of the Q.A.S.P.A : Quran and Sunna Preservation Association - UK
          </p>
          <p className="text-lg mb-12 text-green-100 italic">
            Our aim is to help preserve the Quran and all its related sciences
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Apply
          </Button>
        </div>
      </div>
    </section>
  );
};