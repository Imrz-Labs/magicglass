import { Footer, Header } from "../components";
import "./globals.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head />
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
