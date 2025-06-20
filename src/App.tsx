import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Verification from "./pages/Verification";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Offices from "./pages/Offices";
import Institutions from "./pages/Institutions";
import Frameworks from "./pages/Frameworks";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          
          {/* Batch 1 - Now with proper content */}
          <Route path="/team" element={<Team />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/institutions" element={<Institutions />} />
          <Route path="/frameworks" element={<Frameworks />} />
          
          {/* Batch 2-5 - Still placeholder pages for now */}
          <Route path="/business" element={<Services />} />
          <Route path="/engineering" element={<Services />} />
          <Route path="/benchmarking" element={<Services />} />
          <Route path="/ai-education" element={<Services />} />
          <Route path="/grants" element={<Services />} />
          <Route path="/government" element={<Services />} />
          <Route path="/un-unesco" element={<Services />} />
          <Route path="/research-papers" element={<Services />} />
          <Route path="/self-assessment" element={<Services />} />
          <Route path="/press" element={<Services />} />
          <Route path="/careers" element={<Services />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
