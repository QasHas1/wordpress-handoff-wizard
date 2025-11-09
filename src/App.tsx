import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import CoursesPage from "./pages/Courses";
import IjazaatPage from "./pages/IjazaatPage";
import TajweedPage from "./pages/TajweedPage";
import HifthPage from "./pages/HifthPage";
import QiraatPage from "./pages/QiraatPage";
import ArabicPage from "./pages/ArabicPage";
import NotFound from "./pages/NotFound";
import TajweedRegistration from "./pages/TajweedRegistration";
import MinorQiraatRegistration from "./pages/MinorQiraatRegistration";
import MajorQiraatRegistration from "./pages/MajorQiraatRegistration";
import TenSaghirRegistration from "./pages/TenSaghirRegistration";
import HifthRegistration from "./pages/HifthRegistration";
import ArabicRegistration from "./pages/ArabicRegistration";
import ReadAndRiseRegistration from "./pages/ReadAndRiseRegistration";
import Contact from "./pages/ContactPage";
import Donations from "./pages/Donations";
import Videos from "./pages/Videos";
import Events from "./pages/Events";
import Terms from "./pages/Terms";

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
          <Route path="/courses" element={<Navigate to="/courses/overview" replace />} />
          <Route path="/courses/overview" element={<CoursesPage />} />
          <Route path="/courses/ijazaat" element={<IjazaatPage />} />
          <Route path="/tajweed" element={<TajweedPage />} />
          <Route path="/courses/hifth" element={<HifthPage />} />
          <Route path="/courses/qiraat" element={<QiraatPage />} />
          <Route path="/courses/arabic" element={<ArabicPage />} />
          <Route path="/tajweed/tajweed-registration" element={<TajweedRegistration />} />
          <Route path="/tajweed/read-and-rise" element={<ReadAndRiseRegistration />} />
          <Route path="/qiraat/major-qiraat-registration" element={<MajorQiraatRegistration />} />
          <Route path="/qiraat/minor-qiraat-registration" element={<MinorQiraatRegistration />} />
          <Route path="/qiraat/ten-saghir-registration" element={<TenSaghirRegistration />} />
          <Route path="/tahfedh/hifthregister" element={<HifthRegistration />} />
          <Route path="/arabic/arabic-registration" element={<ArabicRegistration />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/events" element={<Events />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
