import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Dialogs",
  description: "interactive-comments-section",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-vlGray" lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
