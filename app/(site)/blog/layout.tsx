import { Header, Footer } from "@/design-system/index";

export const metadata = {
  title: "ChatBox | Learn about chatbox",
  description: "posts abouts chatbot",
  category: "Technologies",
  keywords: ["Chatbox", "ChatGtp", "Landing", "Vacation", "Work"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
