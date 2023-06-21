"use client";

import { FC, useEffect } from "react";
import Chat from "../Chat/Chat";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MessagesProvider } from "../Chat/context/messages";
import SupabaseProvider from "context/supabase/supabase-provider";
import { usePathname } from "next/navigation";
import AuthProvider from "context/auth/auth-provider";
import { Session } from "@supabase/supabase-js";
import setupViewportHeight from "utils/setup-viewport-height";

interface ProvidersProps {
  children: React.ReactNode;
  serverSession: Session | null;
}

const RootProviders: FC<ProvidersProps> = ({ children, serverSession }) => {
  const queryClient = new QueryClient();

  useEffect(() => {
    return setupViewportHeight();
  }, []);

  // Temporary solution for scroll on route change for Next.js 13 --> https://github.com/vercel/next.js/issues/28778
  const pathname = usePathname();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  console.log(serverSession);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SupabaseProvider>
          <AuthProvider serverSession={serverSession}>
            <MessagesProvider>
              {children}
              <Chat />
            </MessagesProvider>
          </AuthProvider>
        </SupabaseProvider>
      </QueryClientProvider>
    </>
  );
};

export default RootProviders;
