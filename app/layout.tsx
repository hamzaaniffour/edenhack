import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Global/Navigation/Navbar";
import Footer from "./components/Global/Footer/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "EdenHack",
  description: "Espion Snapchat Victime Gratuitement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="bg-zinc-900">
      <body>
        <div className="max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1250px] mx-auto">
          <Navbar />
            {children}
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-Y2HM5L1CDT" />
    </html>
  );
}
