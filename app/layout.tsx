import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <header style={{backgroundColor: "lightblue",padding:"1rem"}}>
          Header
        </header>
        {children}
        <footer style={{backgroundColor: "ghostwhite",padding:"1rem"}}>
          Footer
        </footer>
      </body>
    </html>
  );
}
