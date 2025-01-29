import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";

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
      <nav className="hidden md:grid grid-cols-12 size-full">
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

      {/* Mobile Drawer nav */}
      <nav className="grid md:hidden size-full grid-cols-12">
        <div className="col-span-3 flex items-center">
          <div className="w-9 h-9">{showThemeToggle && <ThemeToggle />}</div>
        </div>
        <p className="font-semibold col-span-6 flex justify-center items-center">
          {title}
        </p>
        <div className="col-span-3 flex justify-end items-center">
          <MobileNav links={links} />
        </div>
      </nav>
    </>
  );
}

function MobileNav({ links }: { links: NavLink[] }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Menu />
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col space-y-3 p-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center rounded-md px-4 py-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}