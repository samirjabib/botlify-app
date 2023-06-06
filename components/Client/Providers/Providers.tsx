"use client";

import { FC } from "react";
import Chat from "../Chat/Chat";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MessagesProvider } from "../Chat/context/messages";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MessagesProvider>{children}</MessagesProvider>
      <Chat />
    </QueryClientProvider>
  );
};

export default Providers;
