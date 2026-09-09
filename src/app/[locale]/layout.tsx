import type { Metadata } from "next";
import "../../styles/global.css";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Unitech Distribution | Value-Added ICT Distributor in the UAE",
  description:
    "Unitech Distribution is a value-added ICT distributor delivering structured cabling, datacenter, CCTV, UPS, wireless and fiber optic solutions to systems integrators and telecom installers across the UAE and GCC.",
};

type Locale = "en" | "fr" | "id";

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  // Ensure locale is included in routing.locales
  if (!routing.locales.includes(locale as "en" | "fr" | "id")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="relative font-sans bg-background-whitebg antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
