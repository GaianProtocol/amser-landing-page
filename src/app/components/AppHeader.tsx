"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export function AppHeader() {
  const { user, logout } = useAuth();

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Contact", href: "#contact" },
    // { label: "Browse Jobs", href: "/browse-jobs" },
    // { label: "Bounty Dashboard", href: "/bounty-dashboard" },
  ];

  return (
    <header className="w-full flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-16 border-b border-gray-100 relative bg-white z-10">
      <div className="flex items-center gap-2 w-full md:w-auto justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 relative">
            <Image
              src="/amser-logo-new.svg"
              alt="AMSER Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight">
            AMSER
          </span>
        </Link>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="md:hidden p-2 focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-full md:hidden bg-white"
            side="bottom"
            align="start"
          >
            <nav className="flex flex-col gap-4 text-base font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 hover:text-[#97EF86] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 w-full items-center">
                {/* <Link
                  href="/user/portal"
                  className="w-48 block text-center px-6 py-3 bg-[#97EF86] text-black rounded-xl hover:bg-[#97EF86]/80 transition-colors font-semibold"
                >
                  Portal
                </Link> */}
                {user ? (
                  <div className="flex flex-col items-center gap-2 w-full">
                    <span className="text-gray-600 text-center">
                      {user.email}
                    </span>
                    <button
                      onClick={logout}
                      className="text-gray-600 hover:text-[#97EF86] transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/user/auth"
                    className="w-48 block text-center px-6 py-3 bg-[#97EF86] text-black rounded-xl hover:bg-[#97EF86]/80 transition-colors font-semibold"
                  >
                    Login / Register
                  </Link>
                )}
              </div>
            </nav>
          </PopoverContent>
        </Popover>
      </div>
      <nav className="hidden md:flex gap-8 text-base font-medium items-center">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-[#97EF86] transition-colors"
          >
            {link.label}
          </a>
        ))}
        {/* <Link
          href="/user/portal"
          className="px-6 py-3 bg-[#97EF86] text-black rounded-xl hover:bg-[#97EF86]/80 transition-colors font-semibold"
        >
          Portal
        </Link> */}
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{user.email}</span>
            <button
              onClick={logout}
              className="text-gray-600 hover:text-[#97EF86] transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            href="/user/auth"
            className="px-6 py-3 bg-[#97EF86] text-black rounded-xl hover:bg-[#97EF86]/80 transition-colors font-semibold"
          >
            Login / Register
          </Link>
        )}
      </nav>
    </header>
  );
}
