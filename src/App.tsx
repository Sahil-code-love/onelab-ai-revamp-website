import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import CaseStudies from "./pages/CaseStudies";
import NotFound from "./pages/NotFound";
import DigitalHealth from "./pages/verticals/DigitalHealth";
import BankingFinance from "./pages/verticals/BankingFinance";
import DataIntelligence from "./pages/verticals/DataIntelligence";
import ConsumerApps from "./pages/verticals/ConsumerApps";
import SalesAutomation from "./pages/verticals/SalesAutomation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/verticals/digital-health" element={<DigitalHealth />} />
          <Route path="/verticals/banking-finance" element={<BankingFinance />} />
          <Route path="/verticals/data-intelligence" element={<DataIntelligence />} />
          <Route path="/verticals/consumer-apps" element={<ConsumerApps />} />
          <Route path="/verticals/sales-automation" element={<SalesAutomation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
