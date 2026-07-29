import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lyk6666.github.io/FOX-project-page/"),
  title: "FOX · Visual Exploration of Data Fact Outliers",
  description:
    "FOX is a visual analytics system for detecting, exploring, and explaining data fact outliers.",
  keywords: [
    "visual analytics",
    "data fact outliers",
    "exploratory data analysis",
    "information visualization",
    "FOX",
  ],
  authors: [
    { name: "Yikai Li", url: "https://liyikai.com/" },
    { name: "Yong Wang", url: "https://yong-wang.org/" },
  ],
  openGraph: {
    title: "FOX · Visual Exploration of Data Fact Outliers",
    description:
      "Find the data facts that do not fit with FOX's scope-aware outlier exploration.",
    url: "https://lyk6666.github.io/FOX-project-page/",
    siteName: "FOX",
    images: [
      {
        url: "https://lyk6666.github.io/FOX-project-page/og.png",
        width: 1200,
        height: 630,
        alt: "FOX: Visual Exploration of Data Fact Outliers",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOX · Visual Exploration of Data Fact Outliers",
    description:
      "Find the data facts that do not fit with FOX's scope-aware outlier exploration.",
    images: ["https://lyk6666.github.io/FOX-project-page/og.png"],
  },
  icons: {
    icon: "https://lyk6666.github.io/FOX-project-page/favicon.png",
    shortcut: "https://lyk6666.github.io/FOX-project-page/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
