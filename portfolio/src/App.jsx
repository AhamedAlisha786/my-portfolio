import React from "react";
import { Toaster } from "sonner"; // Toast notifications
import * as Tooltip from "@radix-ui/react-tooltip"; // Tooltip provider
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Tooltip.Provider>
        <Toaster richColors position="top-right" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Tooltip.Provider>
    </QueryClientProvider>
  );
};

export default App;
