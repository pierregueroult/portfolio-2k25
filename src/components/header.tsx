import Link from "next/link";
import ThemeButton from "./theme-button";
import I18nButton from "./i18n-button";
import { getLocale } from "next-intl/server";

export default async function Header() {
  const locale: string = await getLocale();
  return (
    <header className="pt-10 flex items-center justify-between">
      <h3 className="uppercase text-xl">
        <Link href="/">Pierre Guéroult</Link>
      </h3>
      <nav>
        <ThemeButton>Toggle theme</ThemeButton>
        <I18nButton currentLocale={locale} />
      </nav>
    </header>
  );
}
