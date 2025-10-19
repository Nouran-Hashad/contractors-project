import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Projects from "./pages/Projects";
import Pricing from "./pages/Pricing";
import ClientDashboard from "./pages/client/Dashboard";
import ContractorDashboard from "./pages/contractor/Dashboard";
import NewProject from "./pages/client/NewProject";
import ProjectDetails from "./pages/ProjectDetails";
import SubmitBid from "./pages/SubmitBid";
import ContractorProfile from "./pages/contractor/Profile";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/client/dashboard" element={<ClientDashboard />} />
          <Route path="/client/new-project" element={<NewProject />} />
          <Route path="/contractor/dashboard" element={<ContractorDashboard />} />
          <Route path="/contractor/profile" element={<ContractorProfile />} />
          <Route path="/contractor/:id" element={<ContractorProfile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/projects/:id/submit-bid" element={<SubmitBid />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
