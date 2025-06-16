"use client";
import { Card } from "@/components/ui/card";
import { Calendar, Circle } from "lucide-react";
import Image from "next/image";
import { formatLargeNumber } from "../lib/utils";
import { redirect } from "next/navigation";

interface RelatedCardCardProps {
  title: string;
  organization: string;
  type: "bounty" | "project";
  dueDate: string;
  amount: number;
  amountRange?: string;
  currency: string;
  logo: string;
  totalSubmission: number;
  slug: string
}

export default function RelatedCard({
  title,
  organization,
  dueDate,
  amount,
  amountRange,
  currency,
  logo,
  totalSubmission,
  slug
}: RelatedCardCardProps) {
  return (
    <Card onClick={() => redirect(`/job/${slug}`)} className=" transition-shadow shadow-none border-none cursor-pointer gap-0 py-0">
      <div className="flex gap-4">
        <div className="w-8 h-8 rounded overflow-hidden flex-shrink-0 ">
          {logo && (
            <Image
              src={logo}
              alt={organization}
              width={64}
              height={64}
              className="object-cover"
            />
          )}
        </div>

        <div className="flex-1">
          <h3 className="font-medium text-sm w-[200px] truncate ">{title}</h3>
          <div className="flex items-center text-xs text-gray-600 mb-1">
            <span>{organization}</span>
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-500">
            <div className="flex items-center gap-1 text-sm whitespace-nowrap">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              {amountRange ? (
                <span>
                  {amountRange} {currency}
                </span>
              ) : (
                <span>
                  {formatLargeNumber(amount)} {currency}
                </span>
              )}
            </div>
           

            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span className="whitespace-nowrap">Due in {dueDate}</span>
            </div>

            <div className="flex items-center gap-1">
              <Circle className="w-2 h-2 fill-green-500 text-green-500" />
              <span>{totalSubmission}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
