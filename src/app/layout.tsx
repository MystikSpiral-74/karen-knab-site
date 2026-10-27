import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource-variable/inter";
import "./globals.css";
import { site } from "@/content/copy";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Karen Knab, LMFT | Therapy for Leaders and High-Achieving Professionals",
  description: site.metaDescription,
  openGraph: {
    title: "Karen Knab, LMFT",
    description: site.metaDescription,
    type: "website",
    url: site.url,
  },
  robots: site.allowIndexing
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
