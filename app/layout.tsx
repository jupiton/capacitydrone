import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Capacity Drone",
  description: "Capacity Drone - Services professionnels d'inspection par drone en Normandie. Topographie, thermographie, suivi de chantier et télécommunications.",
  keywords: "drone, inspection, normandie, topographie, thermographie, suivi de chantier, télécommunications",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
