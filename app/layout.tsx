import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavBar from "./components/NavBar";

const inter = Inter({
  subsets: ['latin'],
})

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
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="antialiased grid grid-rows-[auto_1fr_auto] min-h-dvh md:max-w-7xl mx-auto px-global-x py-4">
        <ThemeProvider attribute="class">
          <header className="pb-4">
            <NavBar />
          </header>
          <main className="pb-4">
            {children}
          </main>
          <footer className="flex items-center justify-center">
            <p className="text-center">
              Lorem ipsum dolor sit amet
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
