import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import UpperMenu from "@/components/UpperMenu";
import FixedBtns from "@/components/FixedBtns";

const montserrat = Montserrat({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Hotel in Bressanone, Northern Italy - Hotel Fischer",
  description: "Hotel Fischer in Bressanone/Brixen, South Tyrol, Italy. Family-owned with a long tradition in hospitality. Nature, Active, Culinaric!",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
      <UpperMenu />
      <FixedBtns />
        {children}
      </body>
    </html>
  );
}
