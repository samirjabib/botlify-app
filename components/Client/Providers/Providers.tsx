"use client";

import { FC, useEffect } from "react";
import Chat from "../Chat/Chat";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MessagesProvider } from "../Chat/context/messages";
import SupabaseProvider from "context/supabase/supabase-provider";
import { usePathname } from "next/navigation";

interface ProvidersProps {
  children: React.ReactNode;
}

const setupViewportHeight = () => {
  // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  const viewportHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  viewportHeight();

  window.addEventListener("resize", viewportHeight);

  return () => {
    window.removeEventListener("resize", viewportHeight);
  };
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();

  useEffect(() => {
    return setupViewportHeight();
  }, []);

  // Temporary solution for scroll on route change for Next.js 13 --> https://github.com/vercel/next.js/issues/28778
  const pathname = usePathname();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SupabaseProvider>
          <MessagesProvider>
            {children}
            <Chat />
          </MessagesProvider>
        </SupabaseProvider>
      </QueryClientProvider>
    </>
  );
};

export default Providers;
