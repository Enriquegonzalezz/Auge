import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AUGE — La Importancia del Detalle",
  description: "AUGE | Valencia, Carabobo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="antialiased"
    >
      <body className="m-0 p-0 overflow-x-hidden">{children}</body>
    </html>
  );
}
