import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/page";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Study Abroad from India | USA, UK, Canada & Europe | Mastery Abroad",
  description:
    "Get expert guidance for studying abroad in USA, UK, Canada & Europe. Admission, visa, and scholarship support with high success rate. Free consultation available.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "study abroad",
    "study in USA from India",
    "study in UK",
    "study in Canada",
    "study in Europe",
    "student visa consultancy",
    "overseas education",
  ],
  openGraph: {
    title: "Study Abroad | Mastery Abroad",
    description:
      "End-to-end admission, visa & scholarship support for students.",
    url: "https://yourdomain.com",
    siteName: "Mastery Abroad",
    images: [
      {
        url: "/og-image.png", // 👈 your image
        width: 1200,
        height: 630,
        alt: "Study Abroad 2026",
      },
    ],
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
