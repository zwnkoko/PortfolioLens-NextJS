"use-client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

export function MobileNav({ links }: { links: NavLink[] }) {
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
