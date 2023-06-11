export const metadata = {
  title: "Blog ChatBot | Information about ChatBot",
  description: "get your chatbox",
  category: "Technologies",
  keywords: ["Chatbox", "ChatGtp", "Landing", "Vacation", "Work", "blog"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="bg-darkGray">{children}</main>;
}
