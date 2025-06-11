"use client";

import { Filter } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import HowItWorks from "@/components/how-it-works";
import OpportunityCard from "@/components/opportunity-card";
import RecentActivity from "@/components/recent-activity";
import RecentEarners from "@/components/recent-earners";
import SponsorCard from "@/components/sponsor-card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

interface Listing {
  id: string;
  title: string;
  rewardAmount: number;
  deadline: string;
  type: "bounty" | "project";
  token: string;
  sponsor: {
    name: string;
    logo: string;
  };
}
export default function Home() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [listings, setListings] = useState<Listing[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const getDaysLeft = (deadline: string) => {
    const deadlineDate = new Date(deadline);
    const now = new Date();
    const diffTime = deadlineDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `${diffDays}d` : "Expired";
  };

  useEffect(() => {
    const fetchListings = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/data-page/listings.json");
        if (!response.ok) {
          throw new Error("Failed to fetch listings");
        }
        const data: Listing[] = await response.json();
        setListings(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchListings();
  }, []);

  console.log({ error, isLoading, listings });

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
            {user && (
              <div className="flex flex-col gap-4 mb-8 rounded-xl bg-linear-to-r from-[#4C52E2] to-[#4338CA] px-6 py-6 text-white md:flex-row md:items-center md:justify-between md:px-8">
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
            )}

            <div className="mb-8">
              {isLoading ? (
                <div className="text-center text-gray-500">Loading...</div>
              ) : error ? (
                <div className="text-center text-red-500">Error: {error}</div>
              ) : (
                <Tabs defaultValue="all">
                  <div className="flex items-center justify-between mb-4 border-b border-gray-200 flex-wrap pb-2">
                    <h2 className="text-xl font-semibold ">
                      Browse Opportunities
                    </h2>
                    <div className="h-8 w-[2px] mx-2 bg-gray-200 max-md:hidden"></div>
                    <div className="flex-1 justify-between flex divide-gray-200 items-center">
                      <TabsList className="">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="bounties">Bounties</TabsTrigger>
                        <TabsTrigger value="projects">Projects</TabsTrigger>
                      </TabsList>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-500"
                      >
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                    </div>
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
                    {listings?.map((listing) => (
                      <OpportunityCard
                        key={listing.id}
                        title={listing.title}
                        organization={listing.sponsor.name}
                        type={listing.type}
                        dueDate={getDaysLeft(listing.deadline)}
                        amount={listing.rewardAmount}
                        currency={listing.token}
                        logo={listing.sponsor.logo}
                      />
                    ))}
                  </TabsContent>

                  <TabsContent value="bounties" className="space-y-4">
                    {listings
                      ?.filter((listing) => listing.type === "bounty")
                      .map((listing) => (
                        <OpportunityCard
                          key={listing.id}
                          title={listing.title}
                          organization={listing.sponsor.name}
                          type={listing.type}
                          dueDate={getDaysLeft(listing.deadline)}
                          amount={listing.rewardAmount}
                          logo={listing.sponsor.logo}
                          currency={listing.token}
                        />
                      ))}
                  </TabsContent>

                  <TabsContent value="projects" className="space-y-4">
                    {listings
                      ?.filter((listing) => listing.type === "project")
                      .map((listing) => (
                        <OpportunityCard
                          key={listing.id}
                          title={listing.title}
                          organization={listing.sponsor.name}
                          type={listing.type}
                          dueDate={getDaysLeft(listing.deadline)}
                          amount={listing.rewardAmount}
                          logo={listing.sponsor.logo}
                          currency={listing.token}
                        />
                      ))}
                  </TabsContent>
                </Tabs>
              )}
            </div>
          </div>

          <div className="md:col-span-1">
            {!user && <SponsorCard />}

            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
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
