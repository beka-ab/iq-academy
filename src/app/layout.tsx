import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "IQ აკადემია — მოსამზადებელი ცენტრი",
  description:
    "IQ აკადემია — მოსამზადებელი ცენტრი 1-6 კლასის მოსწავლეებისთვის. მშობლების პორტალი დღიური აქტივობებისა და კვირის შეფასებების სანახავად.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ka">
      <body className="min-h-screen flex flex-col text-slate-800 bg-white">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
