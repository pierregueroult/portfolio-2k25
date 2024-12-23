import Link from "next/link";

export default function Header() {
  return (
    <header className="px-8">
      <h3 className="uppercase text-xl">
        <Link href="/">Pierre Guéroult</Link>
      </h3>
      <nav></nav>
    </header>
  );
}
