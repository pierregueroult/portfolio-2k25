"use client";

import update from "@/actions/lang";
import { Button, type ButtonProps } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useMemo, useTransition, type MouseEvent } from "react";

type I18nButtonProps = ButtonProps & { currentLocale: string };

export default function I18nButton({ currentLocale, ...props }: I18nButtonProps) {
  const locales = useMemo(
    () => [
      {
        locale: "en",
        label: "English",
      },
      {
        locale: "es",
        label: "Español",
      },
      {
        locale: "fr",
        label: "Français",
      },
      {
        locale: "ar",
        label: "العربية",
      },
    ],
    [],
  );
  const pathname = usePathname();

  const [isChanging, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      const currentLocaleIndex = locales.findIndex((l) => l.locale === currentLocale);
      const nextLocaleIndex = (currentLocaleIndex + 1) % locales.length;
      const nextLocale = locales[nextLocaleIndex].locale;

      update(nextLocale, pathname);
    });
  };

  return (
    <Button {...props} disabled={isChanging} onClick={handleClick}>
      {currentLocale.slice(0, 3).toUpperCase()}
    </Button>
  );
}
