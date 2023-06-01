import ChatBox from "./(landing)/components/Client/Chat/Chat";
import Providers from "./(landing)/components/Client/Providers/Providers";
import { exo, roboto } from "./design-system";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";

export const metadata = {
  title: "ChatBox | Find your chatbox",
  description: "get your chatbox",
  category: "Technologies",
  keywords: ["Chatbox", "ChatGtp", "Landing", "Vacation", "Work"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={clsx(exo.variable, roboto.variable)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-black">
        <Providers>{children}</Providers>
        <ChatBox />
        <Analytics />
      </body>
    </html>
  );
}
