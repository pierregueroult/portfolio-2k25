import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/styles/globals.css";

import TransitionProvider from "@/components/transition-provider";
import KeyboardSounds from "@/components/keyboard-sounds";

export const metadata: Metadata = {};

type RootLayoutProps = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps): ReactNode {
  return (
    <html lang="en" dir="ltr">
      <body className={`antialiased`} suppressHydrationWarning={true}>
        <KeyboardSounds />
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}