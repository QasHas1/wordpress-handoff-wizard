import { Youtube, Instagram, Twitter, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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
              <li><a href="/" className="hover:text-yellow-300 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-300 transition-colors">About Us</a></li>
              <li><a href="/#courses" className="hover:text-yellow-300 transition-colors">Courses</a></li>
              <li><a href="/videos" className="hover:text-yellow-300 transition-colors">Videos</a></li>
              <li><a href="/events" className="hover:text-yellow-300 transition-colors">Events</a></li>
              <li><a href="/#contact" className="hover:text-yellow-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Media & WhatsApp */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-6">
              <a 
                href="https://www.youtube.com/channel/UCzUyAwv-VQhZk4dvwSA8rIg?view_as=subscriber" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/ibnaljazariinstitute/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://x.com/ibnaljazariinst" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="https://www.facebook.com/IbnAljazariinstitute" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            
            <div className="bg-emerald-700 rounded-lg p-4">
              <h5 className="font-semibold mb-2 flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Join Our WhatsApp
              </h5>
              <p className="text-xs mb-3 opacity-90">Get updates and announcements</p>
              <Button 
                asChild
                size="sm"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <a 
                  href="https://chat.whatsapp.com/KTtCAwAQsf4IrFEldv58vA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Join Chat
                </a>
              </Button>
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
