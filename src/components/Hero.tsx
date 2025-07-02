
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-emerald-800 mb-6">
            Ibn Al-Jazari Institute
          </h1>
          
          <div className="text-2xl md:text-3xl text-emerald-700 mb-4 font-semibold">
            معهد ابن الجزري للتعليم الإسلامي
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Preserving Islamic Knowledge Through Excellence in Education
          </p>

          <div className="mb-12">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dedicated to providing authentic Islamic education rooted in the Quran and Sunnah, 
              following the methodology of the righteous predecessors. We offer comprehensive 
              programs in Islamic studies, Arabic language, and Quranic sciences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3">
              Explore Programs
            </Button>
            <Button size="lg" variant="outline" className="border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white px-8 py-3">
              Apply Now
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Arabic Calligraphy */}
      <div className="absolute top-20 left-10 opacity-10 text-8xl text-emerald-800 font-bold hidden lg:block">
        ﷽
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 text-6xl text-emerald-800 font-bold hidden lg:block">
        الله
      </div>
    </section>
  );
};
