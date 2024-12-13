import type { Metadata } from "next";
import { daysOneFont } from "@/app/fonts/font";
import "./globals.css";
import NavLink from "@/components/NavLink";

export const metadata: Metadata = {
  title: "Carnicru",
  description: "Carnicru, le site de vente de viande en ligne pour chien", // a modifier
};

export const favicon = "/icone-carnicru.svg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href={favicon} />
      </head>
      <body className={`${daysOneFont.className} bg-[#F8F9E9]`}>
        <NavLink />
        {children}
      </body>
    </html>
  );
}
