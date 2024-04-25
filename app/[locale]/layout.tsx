import React from "react";
import ThemeRegistry from "@/theme/theme-registry";
import "./globals.css";
import { Montserrat } from "next/font/google";
import ProvidersContext from "@/context/providers-context";
import { i18nConfig } from "@/i18nConfig";
import { dir } from "i18next";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Hưng Thịnh - Mekong Delta",
  description: "Hưng Thịnh - Mekong Delta",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  params: { locale },
}) => {
  return (
    <html lang={locale} dir={dir(locale)}>
      <ThemeRegistry>
        <body className={montserrat.className}>
          <ProvidersContext>{children}</ProvidersContext>
        </body>
      </ThemeRegistry>
    </html>
  );
};

export default RootLayout;
