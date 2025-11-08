import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import CoursesPage from "./pages/Courses";
import IjazaatPage from "./pages/IjazaatPage";
import NotFound from "./pages/NotFound";
import TajweedRegistration from "./pages/TajweedRegistration";
import QiraatRegistration from "./pages/QiraatRegistration";
import HifthRegistration from "./pages/HifthRegistration";
import ArabicRegistration from "./pages/ArabicRegistration";
import ReadAndRiseRegistration from "./pages/ReadAndRiseRegistration";
import Contact from "./pages/ContactPage";
import Donations from "./pages/Donations";
import Videos from "./pages/Videos";
import Events from "./pages/Events";
import { HifthLessons } from "./components/HifthLessons";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only handle hash scrolling on the home page
    if (pathname === "/" && hash) {
      // Wait for page to load, then scroll to hash
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // For all other pages, always scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/ijazaat" element={<IjazaatPage />} />
          <Route path="/courses/hifth" element={<HifthLessons />} />
          <Route path="/tajweed/tajweed-registration" element={<TajweedRegistration />} />
          <Route path="/tajweed/read-and-rise" element={<ReadAndRiseRegistration />} />
          <Route path="/qiraat/major-qiraat-registration" element={<QiraatRegistration />} />
          <Route path="/qiraat/minor-qiraat-registration" element={<QiraatRegistration />} />
          <Route path="/tahfedh/hifthregister" element={<HifthRegistration />} />
          <Route path="/arabic/arabic-registration" element={<ArabicRegistration />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/events" element={<Events />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
