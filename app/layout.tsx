import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavBar from "./components/NavBar";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
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
    <html lang="en" className={roboto.className} suppressHydrationWarning>
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
