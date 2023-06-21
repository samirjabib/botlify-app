import "server-only";

import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { exo, roboto } from "./../design-system";
import clsx from "clsx";

import RootProviders from "@/components/providers/root-providers";
import { createServerSupabase } from "@/lib/supabase/supabase-server";

export const metadata = {
  title: "ChatBox | Find your chatbox",
  description: "get your chatbox",
  category: "Technologies",
  keywords: ["Chatbox", "ChatGtp", "Landing", "Work"],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerSupabase();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="es" className={clsx(exo.variable, roboto.variable)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-darkGray">
        <RootProviders serverSession={session}>{children}</RootProviders>
        <Analytics />
      </body>
    </html>
  );
}
