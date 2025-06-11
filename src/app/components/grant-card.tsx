import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface GrantCardProps {
  title: string
  organization: string
  type: string
  keyInfo: string
  amount: number
  currency: string
  prefix: string
}

export default function GrantCard({ title, organization, type, keyInfo, amount, currency, prefix }: GrantCardProps) {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
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
            {organization === "Jupiter" ||
              (organization === "Solana Foundation" && (
                <Badge variant="secondary" className="ml-2 h-4 w-4 p-0 flex items-center justify-center rounded-full">
                  ✓
                </Badge>
              ))}
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-500">
            <Badge variant="outline" className="rounded-full text-xs font-normal">
              {type}
            </Badge>

            <div className="flex items-center gap-1">
              <span>{keyInfo}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span>
            {prefix} {amount.toLocaleString()} {currency}
          </span>
        </div>
      </div>
    </Card>
  )
}
