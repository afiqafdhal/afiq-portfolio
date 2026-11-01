
import type { Metadata } from "next";
import "./globals.css";

import { CursorFX } from "@/components/cursor-fx";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackgroundFX } from "@/components/background-fx";
import { profile } from "@/data/site";

// =====================================
// PORTFOLIO SEO CONFIGURATION
// =====================================

const siteName = `${profile.name} | Engineering Portfolio`;

const siteTitle =
  `${profile.name} | Mechatronics Engineering Portfolio`;

const siteDescription =
  `${profile.name}'s engineering portfolio showcasing ` +
  "Mechatronics Engineering, Industrial Automation, " +
  "IoT, Python, computer vision, AI projects, " +
  "and manufacturing digitalisation experience.";

// =====================================
// NEXT.JS METADATA
// =====================================

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${profile.shortName}`,
  },

  description: siteDescription,

  applicationName: siteName,

  keywords: [
    profile.name,
    "Mechatronics Engineering",
    "Engineering Portfolio",
    "Automation Engineering",
    "Industrial Automation",
    "Industrial IoT",
    "Industry 4.0",
    "Python",
    "Node-RED",
    "Raspberry Pi",
    "Computer Vision",
    "YOLOv8",
    "Manufacturing Digitalisation",
    "Engineering Graduate",
    "Malaysia",
  ],

  authors: [
    {
      name: profile.name,
    },
  ],

  creator: profile.name,
  publisher: profile.name,
  category: "Engineering and Technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_MY",
    siteName,
    title: siteTitle,
    description: siteDescription,
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// =====================================
// ROOT LAYOUT + BACKGROUND + CURSOR
// =====================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BackgroundFX />
        <CursorFX />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
