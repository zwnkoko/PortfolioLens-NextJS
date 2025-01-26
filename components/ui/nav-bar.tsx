import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

interface NavLink {
  href: string;
  label: string;
}

interface NavBarProps {
  title: string;
  links: NavLink[];
  showThemeToggle?: boolean;
}
export function NavBar({ title, links, showThemeToggle = true }: NavBarProps) {
  return (
    <>
      {/* Medium and above view port normal nav bar*/}
      <nav className="hidden md:grid grid-cols-12 ssize-full">
        <div className="flex flex-col justify-center col-span-7">
          <p className="text-lg font-semibold"> {title} </p>
        </div>
        <div className="flex flex-row items-center justify-end col-span-5 gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:opacity-80 transition-opacity"
            >
              {link.label}
            </Link>
          ))}

          {/* Reserve space for theme toggle - Prevent layout shift on first load*/}
          <div className="w-10 h-10 flex items-center justify-center">
            {showThemeToggle && <ThemeToggle />}
          </div>
        </div>
      </nav>
    </>
  );
}
