import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer, Header } from "@/components/shared";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "cyrillic-ext"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});
const playfairDisplay = Playfair_Display({
  subsets: ["cyrillic"],
  variable: "--font-playfair",
  display: "swap",
  weight: ['400', '500', '600', '700', '800'],
});


export const metadata: Metadata = {
  title: "Irina Korzhel - Portfolio",
  description: "Portfolio of Irina Korzhel, a web designer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="h-full antialiased" suppressHydrationWarning>
      <body className={`${playfairDisplay.variable} min-h-dvh flex flex-col font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
