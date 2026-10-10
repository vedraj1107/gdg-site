import type { Metadata } from "next";
import { Inter, Jersey_10, Space_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const head = Jersey_10({ subsets: ["latin"], weight: "400", variable: "--font-head" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "GDG RBU",
  description: "Google Developer Groups, Ramdeobaba University",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${head.variable} ${mono.variable} ${sans.variable} font-[family-name:var(--font-mono)]`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}