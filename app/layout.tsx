import Providers from "@/components/Providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baseorbitplay.xyz"),

  title: "Base Orbit",

  description:
    "Can You Beat Today's Orbit? Practice for free, enter Ranked Mode, build your streak, and climb the daily leaderboard on Base.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Base Orbit",
    description:
      "Can You Beat Today's Orbit? Practice for free, compete in Ranked Mode, build your streak, and climb the daily leaderboard on Base.",
    url: "https://baseorbitplay.xyz",
    siteName: "Base Orbit",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Base Orbit",
    description:
      "Practice, compete, build your streak, and climb the daily leaderboard on Base.",
  },

  other: {
    "base:app_id": "6a7e136dc58cd20a9e42164a",

    "talentapp:project_verification":
      "8e3e7113aa8bd85bd9ca8cfe2425b309bcdfd2847bebf71c58227e00f4192443c07a67c9ce5d433356f42ee025b35b21c664e615bdb885a1bf27043038b74f5b",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}