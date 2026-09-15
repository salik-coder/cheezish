import type { Metadata } from "next";
import "./globals.css";
import "./after-dark.css";
import { Navbar } from "@/src/components/navigation/NewNavbar";
import { Footer } from "@/src/components/Footer";
import { siteUrl } from "@/src/data/site";

export const metadata: Metadata = {
  title: "Cheezish",
  description: "Cheezish - Bite into another dimension",
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <div id="main-content" tabIndex={-1} className="flex flex-col flex-1 outline-none">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
