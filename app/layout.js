import "./globals.css";

export const metadata = {
  title: "EduQuest",
  description: "The next Gen-Learning App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
