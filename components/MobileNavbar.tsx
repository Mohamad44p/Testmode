/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "./ui/button";
import {
  FolderIcon,
  HomeIcon,
  LineChartIcon,
  Package2Icon,
  PackageIcon,
  PanelLeftIcon,
  SearchIcon,
  UsersIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const links = [
  { href: "#", icon: HomeIcon, label: "Dashboard" },
  {
    href: "#",
    icon: FolderIcon,
    label: "Recent Orders",
    sublinks: [
      { href: "#", icon: FolderIcon, label: "Recent Orders" },
      { href: "#", icon: FolderIcon, label: "Pending Orders" },
    ],
  },
  { href: "#", icon: PackageIcon, label: "Products" },
  {
    href: "#",
    icon: FolderIcon,
    label: "Active Products",
    sublinks: [
      { href: "#", icon: FolderIcon, label: "Active Products" },
      { href: "#", icon: FolderIcon, label: "Drafts" },
    ],
  },
  { href: "#", icon: UsersIcon, label: "Customers" },
  { href: "#", icon: LineChartIcon, label: "Analytics" },
];

export default function MobileNavbar() {
  return (
    <header className="sticky backdrop-blur-md bg-white/30 border-b border-white/30 shadow-md border-black top-0 z-30 flex h-14 items-center justify-between px-4 sm:static sm:h-auto sm:border-0 sm:px-6 text-white">
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <PanelLeftIcon className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs bg-black text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold">BefoundOnline</span>
              </div>
            </div>
            <nav className="grid gap-6 text-lg font-medium">
              {links.map((link, index) => (
                <div key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-4 px-2.5"
                    prefetch={false}
                  >
                    <link.icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                  {link.sublinks && (
                    <div className="grid gap-2 pl-8">
                      {link.sublinks.map((sublink, subindex) => (
                        <Link
                          key={subindex}
                          href={sublink.href}
                          className="flex items-center gap-4 text-muted-foreground hover:text-foreground"
                          prefetch={false}
                        >
                          <sublink.icon className="h-4 w-4" />
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <span className="font-semibold">BefoundOnline</span>
      </div>
      <div>
        <Button size="sm" variant="outline">
          Let's Start
        </Button>
      </div>
    </header>
  );
}
