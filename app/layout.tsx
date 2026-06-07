import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./_components/layouts/Navbar";
import Footer from "./_components/layouts/Footer";

export const metadata: Metadata = {
  title: {
    default:
      "UDUMSA | Usmanu Danfodiyo University Medical Students' Association",
    template: "%s | UDUMSA",
  },

  description:
    "Official website of the Usmanu Danfodiyo University Medical Students' Association (UDUMSA). Promoting academic excellence, leadership, community health outreach, advocacy, and professional development among medical students in Sokoto, Nigeria.",

  keywords: [
    "UDUMSA",
    "Usmanu Danfodiyo University",
    "Medical Students Association",
    "Medical Students Nigeria",
    "UDUS",
    "UDUTH",
    "College of Health Sciences",
    "Medical Education",
    "Healthcare Leadership",
    "Community Health",
    "Medical Students",
    "NiMSA",
    "Northwest region",
    "Health Outreach",
    "Sokoto",
    "Medical Training",
    "Future Doctors",
  ],

  authors: [
    {
      name: "UDUMSA",
      url: "https://udumsa.com",
    },
  ],

  creator: "UDUMSA Tech Hub",
  publisher: "Usmanu Danfodiyo University Medical Students' Association",

  applicationName: "UDUMSA Official Website Developed by UDUMSA Tech Hub",

  referrer: "origin-when-cross-origin",

  category: "education",

  alternates: {
    canonical: "https://udumsa.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://udumsa.com",
    title: "UDUMSA | Usmanu Danfodiyo University Medical Students' Association",
    description:
      "Empowering future healthcare professionals through academic excellence, leadership, advocacy, and community service.",
    siteName: "UDUMSA",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "UDUMSA Official Website",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "UDUMSA | Usmanu Danfodiyo University Medical Students' Association",
    description:
      "Official platform of UDUMSA showcasing events, leadership, community outreach, academic activities, and student development initiatives.",
    images: ["/hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo2.jpg", type: "image/jpg", sizes: "32x32" },
    ],
    apple: [{ url: "/logo2.jpg", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "UDUMSA",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  other: {
    "theme-color": "#a01e66",
    "color-scheme": "light dark",
  },
};

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/poppins/Poppins-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/poppins/Poppins-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/poppins/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/poppins/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/poppins/Poppins-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-poppins",
});

const montserrat = localFont({
  src: [
    {
      path: "../public/fonts/Montserrat/Montserrat-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat/Montserrat-Italic-VariableFont_wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-montserrat",
});

const inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${inter.variable}`}
    >
      <body className="font-poppins">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
