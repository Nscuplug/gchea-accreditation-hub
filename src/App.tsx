
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
import Business from "./pages/Business";
import Engineering from "./pages/Engineering";
import Benchmarking from "./pages/Benchmarking";
import AIEducation from "./pages/AIEducation";
import Grants from "./pages/Grants";
import Government from "./pages/Government";
import UNUnesco from "./pages/UNUnesco";
import ResearchPapers from "./pages/ResearchPapers";
import SelfAssessment from "./pages/SelfAssessment";
import Press from "./pages/Press";
import Careers from "./pages/Careers";
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
          
          {/* Navigation Pages - All functional */}
          <Route path="/team" element={<Team />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/institutions" element={<Institutions />} />
          <Route path="/frameworks" element={<Frameworks />} />
          
          {/* Services & Programs */}
          <Route path="/business" element={<Business />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/benchmarking" element={<Benchmarking />} />
          <Route path="/ai-education" element={<AIEducation />} />
          
          {/* Research & Development */}
          <Route path="/grants" element={<Grants />} />
          
          {/* Global Partnerships */}
          <Route path="/government" element={<Government />} />
          <Route path="/un-unesco" element={<UNUnesco />} />
          
          {/* Resources */}
          <Route path="/research-papers" element={<ResearchPapers />} />
          <Route path="/self-assessment" element={<SelfAssessment />} />
          
          {/* News & Careers */}
          <Route path="/press" element={<Press />} />
          <Route path="/careers" element={<Careers />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
