"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { useTheme } from "next-themes";
import type { ReactNode } from "react";

type ThemeButtonProps = ButtonProps;

export default function ThemeButton(props: ThemeButtonProps): ReactNode {
  const { setTheme } = useTheme();
  return (
    <Button
      {...props}
      onClick={() => setTheme((oldTheme) => (oldTheme === "dark" ? "light" : "dark"))}
    />
  );
}
