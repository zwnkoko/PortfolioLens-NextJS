import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio Lens",
  description: "Simple & Minimalistic portfolio tracker app for retail investors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header>
          {/* Navigation Bar */}
        </header>
        <main>
          {children}
        </main>
        <footer>
          {/* Footer */}
        </footer>
      </body>
    </html>
  );
}
