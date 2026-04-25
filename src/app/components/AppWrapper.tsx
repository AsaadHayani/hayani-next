"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "next-themes";

const AppWrapper = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer theme="dark" position="top-center" />
      <ThemeProvider attribute="class" enableSystem defaultTheme="system">
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default AppWrapper;
