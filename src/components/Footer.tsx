
export const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Institute Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ibn Al-Jazari Institute</h3>
            <div className="text-lg mb-2 opacity-90">معهد ابن الجزري</div>
            <p className="text-sm opacity-80 leading-relaxed">
              Dedicated to preserving and transmitting authentic Islamic knowledge 
              through excellence in education, following the methodology of the 
              righteous predecessors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-yellow-300 transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-yellow-300 transition-colors">Programs</a></li>
              <li><a href="#admissions" className="hover:text-yellow-300 transition-colors">Admissions</a></li>
              <li><a href="#faculty" className="hover:text-yellow-300 transition-colors">Faculty</a></li>
              <li><a href="#contact" className="hover:text-yellow-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Islamic Quote */}
          <div>
            <h4 className="font-semibold mb-4">Wisdom</h4>
            <blockquote className="text-sm opacity-90 italic">
              <p className="mb-2">"The best of people are those who learn and teach others."</p>
              <p className="text-yellow-300">- Prophet Muhammad (ﷺ)</p>
            </blockquote>
            <div className="mt-4 text-2xl opacity-60">
              ﷽
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2024 Ibn Al-Jazari Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
