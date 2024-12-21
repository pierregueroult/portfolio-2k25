import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

type OtherLayoutProps = Readonly<{ children: ReactNode }>;

export default function OtherLayout({ children }: OtherLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
