import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Earth Intelligence Engineered End to End`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/brand/apple-touch-icon.svg",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: `${site.name} | Earth Intelligence Engineered End to End`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/brand/og-image.svg", width: 1200, height: 630, alt: `${site.name} orbital intelligence graphic` }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Earth Intelligence Engineered End to End`,
    description: site.description,
    images: ["/brand/og-image.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/brand/logo-horizontal.svg`,
    email: site.email,
    telephone: site.phone,
    description: site.description,
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <link rel="preconnect" href="https://db.onlinewebfonts.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          precedence="default"
          href="https://db.onlinewebfonts.com/c/e66905e07608167a84e6ad52f638c3c6?family=Helvetica+Now+Var"
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  );
}
