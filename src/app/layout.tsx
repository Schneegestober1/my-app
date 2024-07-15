import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Skypro music",
  description: "Music for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="shortcut icon" href="src/app/spotify_icon-icons.com_65503.ico" type="image/x-icon" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
