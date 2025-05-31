import ClientRootLayout from "../components/ClientRootLayout";
import Favicon from "/public/images/favicon.png";

export const metadata = {
  metadataBase: new URL("https://vaheedshaik.com"),
  title: {
    default: "Kazal Chandra Barman | Software Quality Assurance Engineer",
    template: "%s | Kazal Chandra Barman",
  },
  description:
    "Welcome to Kazal's Software Engineering Portfolio. Explore a diverse range of projects and see how I can bring your ideas to life. Let's connect and discuss your next venture!",
  keywords: [
    "portfolio",
    "app",
    "next.js 13",
    "sass",
    "scss",
    "react",
    "chakra",
    "hashnode",
    "best portfolio",
    "best portfolio website",
    "software engineer",
    "web development",
    "frontend developer",
    "full stack developer",
    "javascript",
    "typescript",
    "react developer",
    "nextjs developer",
    "portfolio website",
    "developer portfolio",
  ],
  authors: [{ name: "Kazal Chandra Barman" }],
  creator: "Kazal Chandra Barman",
  publisher: "Kazal Chandra Barman",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vaheedshaik.com",
    title: "Kazal Chandra Barman | Software Engineer",
    description:
      "Welcome to Kazal's Software Engineering Portfolio. Explore a diverse range of projects and see how I can bring your ideas to life. Let's connect and discuss your next venture!",
    siteName: "Kazal Chandra Barman Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kazal Chandra Barman Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kazal Chandra Barman | Software Engineer",
    description:
      "Welcome to Kazal's Software Engineering Portfolio. Explore a diverse range of projects and see how I can bring your ideas to life.",
    images: ["/images/og-image.jpg"],
    creator: "@vaheedshaik",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    {
      rel: "icon",
      url: Favicon.src,
    },
  ],
  verification: {
    google: "Dz2xp2RtP9GiXlS5Wj_tzIm0QeRcbzKILqVNJAUAd5w",
    yandex: "827e25c6099be3b0",
    yahoo: "EAF9D5ED84139FFD4C2CE4429F37BC3B",
  },
};

export default function RootLayout({ children }) {
  return <ClientRootLayout>{children}</ClientRootLayout>;
}
