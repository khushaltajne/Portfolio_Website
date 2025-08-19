import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio - Khushal",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth "> 
      {/* ✅ "dark" class here enables dark mode */}
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8
          overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
