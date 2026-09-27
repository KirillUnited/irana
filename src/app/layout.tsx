import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer, Header } from "@/components/shared";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { siteConfig } from "@/lib/content";

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
const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || '';
const SITE_LOCALE = process.env.NEXT_PUBLIC_LOCALE || 'ru_BY';
const APP_ENV = process.env.NEXT_PUBLIC_APP_ENV || '';
const IS_STAGING = APP_ENV === 'staging';

export const metadata: Metadata = {
  title: "Irina Korzhel - Portfolio",
  description: "Portfolio of Irina Korzhel, a web designer",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: `${siteConfig.seo.title || ''}`,
    description: `${siteConfig.seo.description}`,
    images: ['/apple-touch-icon.png'],
    type: 'website',
    locale: SITE_LOCALE,
    siteName: 'ArtMarketPrint',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.seo.title || ''}`,
    description: `${siteConfig.seo.description}`,
    images: ['/apple-touch-icon.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: IS_STAGING
    ? {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: true,
        },
      }
    : {
        index: true,
        follow: true,
      },
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
