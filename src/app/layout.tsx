import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import ContactButtons from "@/components/ContactButtons";

export const metadata: Metadata = {
  title: "IQ აკადემია — მოსამზადებელი ცენტრი",
  description:
    "IQ აკადემია — მოსამზადებელი ცენტრი 1-6 კლასის მოსწავლეებისთვის. მშობლების პორტალი დღიური აქტივობებისა და კვირის შეფასებების სანახავად.",
  icons: {
    icon: "/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ka">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Georgian:wght@500;600;700&family=Noto+Sans+Georgian:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col text-ink-800 bg-paper">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ContactButtons />
        </Providers>
      </body>
    </html>
  );
}
