"use client";

import { FC } from "react";
import Chat from "../Chat/Chat";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MessagesProvider } from "../Chat/context/messages";
import SupabaseProvider from "context/supabase/supabase-provider";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SupabaseProvider>
        <MessagesProvider>
          {children}
          {/* <Chat /> */}
        </MessagesProvider>
      </SupabaseProvider>
    </QueryClientProvider>
  );
};

export default Providers;
