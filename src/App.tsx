
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/learning" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Learning Logs - Coming Soon</h1></div>} />
                <Route path="/featured" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Featured Project - Coming Soon</h1></div>} />
                <Route path="/tech-stack" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Tech Stack - Coming Soon</h1></div>} />
                <Route path="/timeline" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Timeline - Coming Soon</h1></div>} />
                <Route path="/certifications" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Certifications - Coming Soon</h1></div>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
