import Image from "next/image"
import { Calendar, Circle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface OpportunityCardProps {
  title: string
  organization: string
  type: "Bounty" | "Project"
  dueDate: string
  amount: number
  amountRange?: string
  currency: string
}

export default function OpportunityCard({
  title,
  organization,
  type,
  dueDate,
  amount,
  amountRange,
  currency,
}: OpportunityCardProps) {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
          <Image
            src={`/placeholder.svg?text=${organization.charAt(0)}`}
            alt={organization}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-medium text-base mb-1">{title}</h3>
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <span>{organization}</span>
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-500">
            <Badge variant={type === "Bounty" ? "secondary" : "outline"} className="rounded-full text-xs font-normal">
              {type}
            </Badge>

            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>Due in {dueDate}</span>
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
    </Card>
  )
}
