"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";

type TransitionProviderProps = Readonly<{ children: ReactNode }>;

export default function TransitionProvider({
  children,
}: TransitionProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    console.log("Pathname changed to", pathname);
  }, [pathname]);

  return children;
}
