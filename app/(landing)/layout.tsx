import Footer from "@/design-system/elements/footer/Footer";
import Header from "@/design-system/elements/header/Header";

export const metadata = {
  title: "ChatBox | Find your chatbox",
  description: "get your chatbox",
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
