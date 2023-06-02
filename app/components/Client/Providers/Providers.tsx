"use client";

import { FC } from "react";
import Chat from "../Chat/Chat";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Chat />
    </QueryClientProvider>
  );
};

export default Providers;
