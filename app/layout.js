import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "XFlows",
  description: "XFlows is a decentralized protocol for cross-chain swap.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Providers>
          <GoogleAnalytics />
          <Header />
          {children}
          <Footer />
          <MobileFooter></MobileFooter>
        </Providers>
      </body>
    </html>
  );
}