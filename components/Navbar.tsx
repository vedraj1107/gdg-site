import { ChevronDown } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["Home", "#home", "bg-blue-400"],
  ["Team", "#team", "bg-red-400"],
  ["Events", "#events", "bg-yellow-400"],
  ["Gallery", "#gallery", "bg-green-500"],
  ["Portfolio", "#portfolio", "bg-indigo-400"],
  ["More", "#faq", "bg-sky-400"],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-[var(--ink)] bg-[var(--bg)]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2">
        <Logo />
        <ul className="flex flex-wrap justify-center gap-2">
          {links.map(([name, href, color]) => (
            <li key={name}>
              <a href={href} className={`neo ${color} rounded px-2 py-0.5 text-[11px] font-bold text-black transition hover:-translate-y-0.5 sm:px-3 sm:text-xs`}>
                {name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 text-xs font-bold lg:flex">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gray-300 text-black">V</span>
            Vedraj Doifode
            <ChevronDown size={14} />
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}