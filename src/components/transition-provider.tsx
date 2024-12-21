"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";

type TransitionProviderProps = Readonly<{ children: ReactNode }>;

export default function TransitionProvider({
  children,
}: TransitionProviderProps) {
  const pathname: string = usePathname();

  useEffect((): void => {
    // #TODO: Implement page transition logic
  }, [pathname]);

  return children;
}
