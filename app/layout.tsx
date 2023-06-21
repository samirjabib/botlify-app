import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { exo, roboto } from "./../design-system";
import clsx from "clsx";
import RootProviders from "@/components/Client/providers/root-providers";

import "server-only";
import { createClientSupabase } from "@/lib/supabase/supabase-browser";

export const metadata = {
  title: "ChatBox | Find your chatbox",
  description: "get your chatbox",
  category: "Technologies",
  keywords: ["Chatbox", "ChatGtp", "Landing", "Vacation", "Work"],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const supabase = createClientSupabase();
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
