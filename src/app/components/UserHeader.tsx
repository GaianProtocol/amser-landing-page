"use client";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";

export default function UserHeader() {
  const { user, logout } = useAuth();
  return (
    <header className="w-full flex justify-between items-center py-4 px-4 md:px-8 border-b border-gray-100 bg-white">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 relative">
          <Image
            src="/amser-logo-new.svg"
            alt="AMSER Logo"
            fill
            priority
            className="object-contain"
          />
        </div>
        <span className="text-xl font-bold tracking-tight group-hover:text-[#97EF86] transition-colors  text-black">AMSER</span>
      </Link>
      <nav className="flex items-center gap-4 text-base font-medium">
        {user ? (
          <>
            <span className="text-gray-600 text-sm hidden sm:inline">{user.email}</span>
            <Link
              href="/user/portal"
              className="bg-[#97EF86] text-black px-3 py-1.5 rounded-full hover:bg-[#97EF86]/80 transition-colors"
            >
              Portal
            </Link>
            <button
              onClick={logout}
              className="text-gray-600 hover:text-[#97EF86] transition-colors"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/user/auth"
            className="bg-[#97EF86] text-black px-3 py-1.5 rounded-full hover:bg-[#97EF86]/80 transition-colors"
          >
            Login / Register
          </Link>
        )}
      </nav>
    </header>
  );
} 