"use client";
import { Button } from "@/components/ui/button";
import { Share2, Star } from "lucide-react";
import { LeftSidebar } from "./LeftSidebar";
import { MainContent } from "./MainContent";
import { useEffect, useMemo, useState } from "react";
import { IJob } from "@/types/job";

export function BountyPage({ slug }: { slug: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [jobList, setJobList] = useState<IJob[] | null>(null);
  const job = useMemo(() => {
    return jobList?.find((job) => job.slug === slug);
  }, [jobList]);

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
        console.log((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchListings();
  }, []);
  return (
    <main className="container mx-auto px-4 py-6 ">
      <div className="min-h-screen">
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-gray-600">
                Submit a dashboard and become a Glint Ambassador!
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                SHARE
              </Button>
            </div>
          </div>
        </div>
        {isLoading ? (
          <div className="text-center mt-4 mx-auto">Loading...</div>
        ) : (
          <div className="flex flex-col-reverse md:flex-row">
            {job && jobList && <LeftSidebar job={job} jobList={jobList} />}
            <MainContent mainContent={job?.detail.main_content || ""} />
          </div>
        )}
      </div>
    </main>
  );
}
