import "./globals.css";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "multi-step-form",
  description:
    "https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ",
};

export default function RootLayout({ children }) {
  return (
    <html className="w-screen h-screen" lang="en">
      <body className={`${ubuntu.className} w-full h-full`}>{children}</body>
    </html>
  );
}
