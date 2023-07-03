import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from "next";

//##############################################(METADATA)##############################################//

export const metadata = {
  title: {
    default: "Magic Glass | AR Mirror",
    template: "%s  ✦ AR Mirror",
  },
  description:
    "MagicGlass provides users with a fun on-site experience that can amplify your brand through sharing and promotion.",
  applicationName: "Magic Glass",
  referrer: "origin-when-cross-origin",
  keywords: [
    "MagicGlass",
    "AR",
    "Mirror",
    "Augmented Reality",
    "AR Mirror",
    "AR Mirror",
    "AR Mirror",
    "AR Glass",
  ],
  authors: [{ name: "Imrz Labs", url: "https://www.imrzlabs.com" }],
  icons: [{ url: "/icon.png" }],
  themeColor: "",
  colorScheme: "dark",
  creator: "IMRZ Labs",
  publisher: "IMRZ Labs",
  alternates: {},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  //##############################################(OPEN GRAPH)##############################################//
  openGraph: {
    title: "Magic Glass | AR Mirror",
    description:
      "MagicGlass provides users with a fun on-site experience that can amplify your brand through sharing and promotion",
    url: "https://www.magiclass.io",
    siteName: "Magic Glass",
    images: [
      {
        url: "/images/og-image.png",
        width: 800,
        height: 600,
      },
      {
        url: "/images/og-image.png",
        width: 1800,
        height: 1600,
        alt: "Magic Glass | AR Mirror",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

//##############################################(FONTS)##############################################//

//Montserrat MS
const montserrat = localFont({
  src: "../public/fonts/montserrat.ttf",
  variable: "--font-montserrat",
  preload: true,
  fallback: ["system-ui"],
});

//##############################################(LAYOUT)##############################################//

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${montserrat.variable} 
        `}
    >
      <body>{children}</body>
    </html>
  );
}
