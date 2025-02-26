import "./globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AcademiInCode",
  description: "academy for programmers to become monsters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} antialiased`}>
        <div className="flex h-full w-full">{children}</div>
      </body>
    </html>
  );
}
