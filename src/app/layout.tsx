import Header from "../components/header/Header";

import type { Metadata } from "next";

import { Nunito } from "../assets/fonts/fonts";
import "@/src/styles/globals.css";

export const metadata: Metadata = {
  title: "Countries challenge",
  description: "Countries challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Nunito.className}>
        <Header />
        <main className="container">
          { children }
        </main>
      </body>
    </html>
  );
}
