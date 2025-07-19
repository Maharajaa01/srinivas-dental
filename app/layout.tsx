import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Srinivas Dental...",
//   description: "Comprehensive dental care by Dr. Kamalavizhi Srinivas. Trusted by families in Chennai.",

// };

export const metadata: Metadata = {
  title: "Srinivas Dental",
  description: "Comprehensive dental care by Dr. Kamalavizhi Srinivas. Trusted by families in Chennai.",
  openGraph: {
    title: "Srinivas Dental",
    description: "Comprehensive dental care by Dr. Kamalavizhi Srinivas. Trusted by families in Chennai.",
    url: "https://srinivas-dental.vercel.app", // Replace with your actual domain
    siteName: "Srinivas Dental",
    images: [
      {
        url: "/og.png", // Provide an image in public folder (ideal: 1200x630)
        width: 1200,
        height: 630,
        alt: "Srinivas Dental Clinic - Quality Smile Care",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srinivas Dental",
    description: "Comprehensive dental care by Dr. Kamalavizhi Srinivas. Trusted by families in Chennai.",
    images: ["/og.png"], // Same image as above
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      {/* <Head> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      {/* </Head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
             <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="afterInteractive"
          async
        />
        {children}
      </body>
    </html>
  );
}
      