import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/styles/globals.css";

import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider, type AbstractIntlMessages } from "next-intl";
import { getLangDir } from "rtl-detect";

import TransitionProvider from "@/components/transition-provider";
import KeyboardSounds from "@/components/keyboard-sounds";
import EasterEggConsole from "@/components/easter-egg-console";
import ThemeProvider from "@/components/theme-provider";
import Header from "@/components/header";

export const metadata: Metadata = {};

type RootLayoutProps = Readonly<{ children: ReactNode }>;

export default async function RootLayout({ children }: RootLayoutProps): Promise<ReactNode> {
  const locale: string = await getLocale();
  const messages: AbstractIntlMessages = await getMessages();
  const direction: "ltr" | "rtl" = getLangDir(locale);

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className="antialiased bg-background text-foregrond">
        <ThemeProvider attribute={"class"} defaultTheme="system" disableTransitionOnChange={true}>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <KeyboardSounds />
            <EasterEggConsole />
            <TransitionProvider>
              <div className="mx-auto max-w-[900px]">
                <Header />
                {children}
              </div>
            </TransitionProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
