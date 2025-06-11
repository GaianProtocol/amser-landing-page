"use client";
import Image from "next/image";
import { Calendar, Circle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface OpportunityCardProps {
  title: string;
  organization: string;
  type: "bounty" | "project";
  dueDate: string;
  amount: number;
  amountRange?: string;
  currency: string;
  logo: string;
}

export default function OpportunityCard({
  title,
  organization,
  type,
  dueDate,
  amount,
  amountRange,
  currency,
  logo,
}: OpportunityCardProps) {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer gap-0">
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
          {logo && (
            <Image
              src={logo}
              alt={organization}
              width={48}
              height={48}
              className="object-cover"
            />
          )}
        </div>

        <div className="flex-1">
          <h3 className="font-medium text-base mb-1">{title}</h3>
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <span>{organization}</span>
          </div>

          <div className="max-md:hidden flex items-center gap-3 text-xs text-gray-500">
            <Badge
              variant={"outline"}
              className="rounded-full capitalize text-xs font-normal"
            >
              {type}
            </Badge>

            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span className="whitespace-nowrap">Due in {dueDate}</span>
            </div>

            <div className="flex items-center gap-1">
              <Circle className="w-2 h-2 fill-green-500 text-green-500" />
              <span>1</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          {amountRange ? (
            <span>
              {amountRange} {currency}
            </span>
          ) : (
            <span>
              {amount.toLocaleString()} {currency}
            </span>
          )}
        </div>
      </div>
      <div className="md:hidden flex items-center gap-3 text-xs text-gray-500 pl-16">
        <Badge
          variant={"outline"}
          className="rounded-full capitalize text-xs font-normal"
        >
          {type}
        </Badge>

        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          <span className="whitespace-nowrap">Due in {dueDate}</span>
        </div>

        <div className="flex items-center gap-1">
          <Circle className="w-2 h-2 fill-green-500 text-green-500" />
          <span>1</span>
        </div>
      </div>
    </Card>
  );
}
