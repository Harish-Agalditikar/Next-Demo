
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "ShopNest | Online Shopping",
  description: "Discover quality products for your everyday life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-layout">
          <Header />

          <main className="main-content">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
