import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IJob } from "@/types/job";
import { Calendar } from "lucide-react";
import RelatedCard from "../components/related-card";
import { getDaysLeft, getTimeRemaining } from "../lib/utils";

export function LeftSidebar({ job, jobList }: { job: IJob; jobList: IJob[] }) {
  return (
    <div className="md:w-80 w-full bg-white md:border-r max-md:border-t border-gray-200 p-6 space-y-6">
      {/* <div>
        <h3 className="font-semibold text-gray-900 mb-4">Prize Pool</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/icons/cash-icon.svg"
                alt="logo"
                width={20}
                height={20}
              />
              <span className="text-sm font-medium">
                2M <span className="text-gray-400">VND</span>
              </span>
              <span className="text-xs text-gray-500">Total Prizes</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            <span className="text-sm">
              800K <span className="text-gray-400">VND</span>
            </span>
            <span className="text-xs text-gray-500">1st</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            <span className="text-sm">
              650K <span className="text-gray-400">VND</span>
            </span>
            <span className="text-xs text-gray-500">2nd</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            <span className="text-sm">
              550K <span className="text-gray-400">VND</span>
            </span>
            <span className="text-xs text-gray-500">3rd</span>
          </div>
        </div>
      </div> */}
      <div className="flex items-center space-x-2 mb-2 justify-between">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span className="text-2xl font-bold">{job._count.Submission}</span>
        </div>
        <span className="text-sm text-gray-500">{getTimeRemaining(job.deadline)}</span>
      </div>
      <div className="flex justify-between">
        <p className="text-xs text-gray-500">SUBMISSIONS</p>
        <p className="text-xs text-gray-500">REMAINING</p>
      </div>
      <Button className="w-full bg-[#97EF86] text-black rounded-xl hover:bg-[#97EF86]/80 cursor-pointer">
        Submit Now
      </Button>
      <div>
        <h4 className="text-sm mb-3">SKILLS NEEDED</h4>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-gray-300">
            Other
          </Badge>
          <Badge variant="secondary" className="bg-gray-300">
            Community
          </Badge>
        </div>
      </div>
      <div>
        <h4 className="text-sm mb-2">CONTACT</h4>
        <p className="text-xs text-gray-600">
          Reach out to if you have any questions about this bounty.
        </p>
      </div>
      <div>
        <h4 className="text-sm mb-3">RELATED LIVE LISTINGS</h4>
        <div className="space-y-3">
          {jobList &&
            jobList
              .slice(0, 6)
              .map((job) => (
                <RelatedCard
                  key={job.id}
                  title={job.title}
                  organization={job.sponsor.name}
                  type={job.type}
                  dueDate={getDaysLeft(job.deadline)}
                  amount={job.rewardAmount}
                  logo={job.sponsor.logo}
                  totalSubmission={job._count.Submission}
                  currency={job.token}
                  slug={job.slug}
                />
              ))}
        </div>
      </div>
    </div>
  );
}
