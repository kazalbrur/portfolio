import ClientRootLayout from "../components/ClientRootLayout";
import Favicon from "/public/images/favicon.png";

export const metadata = {
  metadataBase: new URL("https://kazalbrur.github.io/portfolio/"), // Recommend using Kazal's domain
  title: {
    default: "Kazal Chandra Barman | AI Test & QA Engineer",
    template: "%s | Kazal Chandra Barman",
  },
  description:
    "Kazal Chandra Barman is a seasoned AI Test & QA Engineer with 5+ years of experience in machine learning, NLP, and computer vision. Explore his work in test automation, quality assurance, and AI product validation.",
  keywords: [
    "AI Test Engineer",
    "Quality Assurance",
    "Software QA",
    "QA Automation",
    "Machine Learning Testing",
    "Computer Vision QA",
    "NLP QA",
    "Selenium",
    "Postman",
    "PyTest",
    "Cypress",
    "AI Testing Portfolio",
    "Kazal Chandra Barman",
    "Next Solution Lab",
    "Bangladesh AI Engineer",
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
    url: "https://kazalbrur.github.io/portfolio/", // Recommend switching from vaheedshaik.com
    title: "Kazal Chandra Barman | AI Test & QA Engineer",
    description:
      "Explore Kazal Chandra Barman’s portfolio in AI Testing and Software QA. Specializing in automated testing of machine learning, NLP, and computer vision systems.",
    siteName: "Kazal Chandra Barman Portfolio",
    images: [
      {
        url: "./images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kazal Chandra Barman Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kazal Chandra Barman | AI QA Engineer",
    description:
      "Explore Kazal's work in AI quality assurance, automation frameworks, and intelligent systems testing.",
    images: ["./images/og-image.jpg"],
    creator: "@kazalbarman", // Replace with actual handle if applicable
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
