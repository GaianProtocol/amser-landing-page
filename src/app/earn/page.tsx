"use client";

import { ArrowRight, Filter } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import GrantCard from "@/components/grant-card";
import HowItWorks from "@/components/how-it-works";
import OpportunityCard from "@/components/opportunity-card";
import RecentActivity from "@/components/recent-activity";
import RecentEarners from "@/components/recent-earners";
import SponsorCard from "@/components/sponsor-card";
import Image from "next/image";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Home() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="w-full flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-16 border-b border-gray-100 relative bg-white z-10">
        <div className="flex items-center gap-2 w-full md:w-auto justify-between">
          <div className="flex items-center gap-2">
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
          </div>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
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
          </button>
        </div>
        {/* Nav links */}
        <nav
          className={`flex-col md:flex-row md:flex gap-8 text-base font-medium md:items-center md:static absolute left-0 right-0 top-full md:top-auto bg-white md:bg-transparent shadow md:shadow-none transition-all duration-200 z-20 ${
            menuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          <a
            href="#about"
            className="block px-4 py-2 md:p-0 hover:text-[#97EF86] transition-colors"
          >
            About
          </a>
          <a
            href="#features"
            className="block px-4 py-2 md:p-0 hover:text-[#97EF86] transition-colors"
          >
            Features
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 md:p-0 hover:text-[#97EF86] transition-colors"
          >
            Contact
          </a>
          <div className="flex flex-col gap-3 w-full items-center md:flex-row md:gap-4 md:w-auto md:items-center">
            <Link
              href="/user/portal"
              className="w-48 block text-center px-6 py-3 bg-[#97EF86] text-black rounded-xl hover:bg-[#97EF86]/80 transition-colors font-semibold"
            >
              Portal
            </Link>
            {user ? (
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full md:w-auto">
                <span className="text-gray-600 text-center md:text-left">
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
      </header>
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex flex-col gap-4 rounded-xl bg-linear-to-r from-[#4C52E2] to-[#4338CA] px-6 py-6 text-white md:flex-row md:items-center md:justify-between md:px-8">
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-0">
                  <p className="max-w-[25rem] truncate text-lg font-semibold md:text-xl">
                    Welcome back, {user?.email}
                  </p>
                  <p className="text-sm text-[#c4c2ef]">
                    We`re so glad to have you on Earn
                  </p>
                </div>
              </div>
            </div>

            <div className="my-8">
              <Tabs defaultValue="all">
                <div className="flex items-center justify-between mb-4 border-b border-gray-200">
                  <div className="flex-1 flex  divide-gray-200  items-center">
                    <h2 className="text-xl font-semibold ">
                      Browse Opportunities
                    </h2>
                    <div className="h-8 w-[2px] mx-2 bg-gray-200"></div>
                    <TabsList className="">
                      <TabsTrigger value="all" >All</TabsTrigger>
                      <TabsTrigger value="bounties">Bounties</TabsTrigger>
                      <TabsTrigger value="projects">Projects</TabsTrigger>
                    </TabsList>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-500">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="secondary"
                    className="rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 border-0"
                  >
                    All
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-full badge-outline"
                  >
                    Content
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-full badge-outline"
                  >
                    Design
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-full badge-outline"
                  >
                    Development
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-full badge-outline"
                  >
                    Other
                  </Badge>
                </div>

                <TabsContent value="all" className="space-y-4">
                  <OpportunityCard
                    title="Develop X Bot for Trustworthiness Analysis | 300 USDC + EXCLUSIVE MERCH"
                    organization="RippleNet xyz"
                    type="Bounty"
                    dueDate="2d"
                    amount={300}
                    currency="USDC"
                  />

                  <OpportunityCard
                    title="Frontend/Fullstack Engineer - Sentient Struggle"
                    organization="BIT Labs"
                    type="Project"
                    dueDate="3d"
                    amount={4000}
                    currency="USDC"
                  />

                  <OpportunityCard
                    title="dev fun World Cup powered by Solana"
                    organization="Dev fun"
                    type="Bounty"
                    dueDate="4d"
                    amount={15000}
                    currency="USDC"
                  />

                  <OpportunityCard
                    title="Develop Telegram Bot for Superteam Earn Notifications"
                    organization="Superteam"
                    type="Bounty"
                    dueDate="4d"
                    amount={1000}
                    currency="USDC"
                  />

                  <OpportunityCard
                    title="Solana Mobile Developer Intern for HaySolana"
                    organization="Hay Solana"
                    type="Project"
                    dueDate="12d"
                    amount={200}
                    amountRange="200-500"
                    currency="USDC"
                  />

                  <div className="flex justify-center mt-6">
                    <Button variant="ghost" className="text-gray-500">
                      View All
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Grants</h2>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge
                  variant="outline"
                  className="rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  All
                </Badge>
                <Badge variant="outline" className="rounded-full">
                  Content
                </Badge>
                <Badge variant="outline" className="rounded-full">
                  Design
                </Badge>
                <Badge variant="outline" className="rounded-full">
                  Development
                </Badge>
                <Badge variant="outline" className="rounded-full">
                  Other
                </Badge>
              </div>

              <div className="space-y-4">
                <GrantCard
                  title="Jupiter DAO Grants"
                  organization="Jupiter"
                  type="Grant"
                  keyInfo="$5.8k Avg Grant"
                  amount={10000}
                  currency="USDC"
                  prefix="Up to"
                />

                <GrantCard
                  title="Solana Fndtn x Finterest Instagrants"
                  organization="Solana Foundation"
                  type="Grant"
                  keyInfo="$4.2k Avg Grant"
                  amount={10000}
                  currency="USDC"
                  prefix="Up to"
                />

                <GrantCard
                  title="Jupiter Uplink Grants"
                  organization="Jupiter"
                  type="Grant"
                  keyInfo="$3.9k Avg Grant"
                  amount={50}
                  currency="JUP"
                  prefix="250-5k"
                />

                <GrantCard
                  title="Jupiter Regional Events"
                  organization="Jupiter"
                  type="Grant"
                  keyInfo="$643.13 Avg Grant"
                  amount={750}
                  currency="USDC"
                  prefix="Up to"
                />

                <div className="flex justify-center mt-6">
                  <Button variant="ghost" className="text-gray-500">
                    View All
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <SponsorCard />

            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-gray-500 text-sm">
                    Total Value Earned
                  </div>
                  <div className="text-2xl font-bold">$6,759,890</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">
                    Opportunities Listed
                  </div>
                  <div className="text-2xl font-bold">1880</div>
                </div>
              </div>
            </div>

            <HowItWorks />

            <RecentEarners />

            <RecentActivity />
          </div>
        </div>
      </main>

      <footer className="w-full py-6 px-4 md:px-16 text-center text-gray-500 text-sm bg-white border-t border-gray-100 mt-auto">
        <div>AM SERVICES CO., LTD</div>
        <div>&copy; {new Date().getFullYear()} AMSER. All rights reserved.</div>
      </footer>
    </div>
  );
}
