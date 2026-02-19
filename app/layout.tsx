import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import UpperMenu from "@/components/UpperMenu";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['200', '300', '400']
});

export const metadata: Metadata = {
  title: "Hotel in Bressanone, Northern Italy - Hotel Fischer",
  description: "Hotel Fischer in Bressanone/Brixen, South Tyrol, Italy. Family-owned with a long tradition in hospitality. Nature, Active, Culinaric!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat} antialiased`}
      >
      <UpperMenu />
        {children}
      </body>
    </html>
  );
}
