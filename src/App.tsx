import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TajweedRegistration from "./pages/TajweedRegistration";
import QiraatRegistration from "./pages/QiraatRegistration";
import HifthRegistration from "./pages/HifthRegistration";
import ArabicRegistration from "./pages/ArabicRegistration";
import Contact from "./pages/ContactPage";
import Donations from "./pages/Donations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tajweed/tajweed-registration" element={<TajweedRegistration />} />
          <Route path="/qiraat/major-qiraat-registration" element={<QiraatRegistration />} />
          <Route path="/qiraat/minor-qiraat-registration" element={<QiraatRegistration />} />
          <Route path="/tahfedh/hifthregister" element={<HifthRegistration />} />
          <Route path="/arabic/arabic-registration" element={<ArabicRegistration />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/donations" element={<Donations />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
