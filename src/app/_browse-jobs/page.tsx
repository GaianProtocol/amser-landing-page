"use client";

import { Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HowItWorks from "@/components/how-it-works";
import OpportunityCard from "@/components/opportunity-card";
import RecentActivity from "@/components/recent-activity";
import RecentEarners from "@/components/recent-earners";
import SponsorCard from "@/components/sponsor-card";
import { useEffect, useState, useMemo } from "react";
import { AppHeader } from "../components/AppHeader";
import { useAuth } from "../contexts/AuthContext";
import { IJob } from "@/types/job";

export default function Home() {
  const { user } = useAuth();
  const [jobList, setJobList] = useState<IJob[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);

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
        const response = await fetch("/data-page/job-data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch listings");
        }
        const data: IJob[] = await response.json();
        setJobList(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchListings();
  }, []);

  const handleViewMore = () => {
    setVisibleCount(jobList?.length || 10);
  };
  const handleViewLess = () => {
    setVisibleCount(10);
  };

  const bounties = useMemo(
    () => jobList?.filter((listing) => listing.type === "bounty") || [],
    [jobList]
  );
  const projects = useMemo(
    () => jobList?.filter((listing) => listing.type === "project") || [],
    [jobList]
  );

  return (
    <div className="min-h-screen bg-white font-sans text-[#334155]">
      <AppHeader />
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {user && (
              <div className="flex flex-col gap-4 mb-8 rounded-xl bg-gradient-to-r from-[#4C52E2] to-[#4338CA] px-6 py-6 text-white md:flex-row md:items-center md:justify-between md:px-8">
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
                    <h2 className="text-xl font-semibold">
                      Browse Opportunities
                    </h2>
                    <div className="h-8 w-[2px] mx-2 bg-gray-200 max-md:hidden"></div>
                    <div className="flex-1 justify-between flex divide-gray-200 items-center">
                      <TabsList>
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

                  <TabsContent value="all" className="space-y-1">
                    {jobList?.slice(0, visibleCount).map((listing) => (
                      <OpportunityCard
                        key={listing.id}
                        title={listing.title}
                        organization={listing.sponsor.name}
                        type={listing.type}
                        dueDate={getDaysLeft(listing.deadline)}
                        amount={listing.rewardAmount}
                        currency={listing.token}
                        totalSubmission={listing._count.Submission}
                        logo={listing.sponsor.logo}
                        slug={listing.slug}
                      />
                    ))}
                    {jobList && visibleCount < jobList.length && (
                      <div className="text-center mt-6">
                        <Button
                          variant="outline"
                          onClick={handleViewMore}
                          className="px-6 cursor-pointer"
                        >
                          View More
                        </Button>
                      </div>
                    )}
                    {jobList && visibleCount === jobList.length && (
                      <div className="text-center mt-6">
                        <Button
                          variant="outline"
                          onClick={handleViewLess}
                          className="px-6 cursor-pointer"
                        >
                          View Less
                        </Button>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="bounties" className="space-y-1">
                    {bounties.slice(0, visibleCount).map((listing) => (
                      <OpportunityCard
                        key={listing.id}
                        title={listing.title}
                        organization={listing.sponsor.name}
                        type={listing.type}
                        dueDate={getDaysLeft(listing.deadline)}
                        amount={listing.rewardAmount}
                        logo={listing.sponsor.logo}
                        currency={listing.token}
                        totalSubmission={listing._count.Submission}
                        slug={listing.slug}
                      />
                    ))}
                    {bounties.length > visibleCount && (
                      <div className="text-center mt-6">
                        <Button
                          variant="outline"
                          onClick={handleViewMore}
                          className="px-6 cursor-pointer"
                        >
                          View More
                        </Button>
                      </div>
                    )}
                    {bounties.length <= visibleCount && visibleCount > 10 && (
                      <div className="text-center mt-6">
                        <Button
                          variant="outline"
                          onClick={handleViewLess}
                          className="px-6 cursor-pointer"
                        >
                          View Less
                        </Button>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="projects" className="space-y-1">
                    {projects.slice(0, visibleCount).map((listing) => (
                      <OpportunityCard
                        key={listing.id}
                        title={listing.title}
                        organization={listing.sponsor.name}
                        type={listing.type}
                        dueDate={getDaysLeft(listing.deadline)}
                        amount={listing.rewardAmount}
                        logo={listing.sponsor.logo}
                        totalSubmission={listing._count.Submission}
                        currency={listing.token}
                        slug={listing.slug}
                      />
                    ))}
                    {projects.length > visibleCount && (
                      <div className="text-center mt-6">
                        <Button
                          variant="outline"
                          onClick={handleViewMore}
                          className="px-6 cursor-pointer"
                        >
                          View More
                        </Button>
                      </div>
                    )}
                    {projects.length <= visibleCount && visibleCount > 10 && (
                      <div className="text-center mt-6">
                        <Button
                          variant="outline"
                          onClick={handleViewLess}
                          className="px-6 cursor-pointer"
                        >
                          View Less
                        </Button>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              )}
            </div>
          </div>

          <div className="md_col-span-1">
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

      <footer className="w-full py-6 px-4 md:px-16 text-center text-gray-500 text-sm bg-white border-t border-gray-200 mt-auto">
        <div>AM SERVICES CO., LTD</div>
        <div>© {new Date().getFullYear()} AMSER. All rights reserved.</div>
      </footer>
    </div>
  );
}
