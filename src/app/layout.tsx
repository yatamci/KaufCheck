import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "KaufCheck - Lohnt sich ein Neukauf?",
    template: "%s | KaufCheck",
  },
  description:
    "Berechne einfach, ob sich ein Neukauf deines Geräts lohnt. Professionelle Analyse deiner Kaufhistorie mit intelligenter Bewertung.",
  keywords: [
    "Kaufentscheidung",
    "Neukauf",
    "Geräte",
    "Kosten",
    "Kalkulator",
    "Lebensdauer",
  ],
  authors: [{ name: "Yasin" }],
  creator: "Yasin",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://kaufcheck.app",
    siteName: "KaufCheck",
    title: "KaufCheck - Lohnt sich ein Neukauf?",
    description:
      "Intelligente Analyse für bessere Kaufentscheidungen bei elektronischen Geräten.",
    images: [
      {
        url: "https://kaufcheck.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "KaufCheck",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KaufCheck - Lohnt sich ein Neukauf?",
    description:
      "Intelligente Analyse für bessere Kaufentscheidungen bei elektronischen Geräten.",
    images: ["https://kaufcheck.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#007AFF" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
