"use client";

import { AppFooter } from "../components/AppFooter";
import { AppHeader } from "../components/AppHeader";
import { BountyPage } from "./BountyPage";

export default function Page() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#334155]">
      <AppHeader />
      <BountyPage />
      <AppFooter />
    </div>
  );
}