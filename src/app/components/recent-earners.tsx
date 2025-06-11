import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight } from "lucide-react"

const earners = [
  {
    name: "David Balya",
    amount: "200k",
    currency: "VND",
    verified: true,
    avatar: "DB",
  },
  {
    name: "Yuki Kimura",
    amount: "200k",
    currency: "VND",
    verified: true,
    avatar: "YK",
  },
  {
    name: "Accret Wallet",
    amount: "200k",
    currency: "VND",
    verified: false,
    avatar: "AW",
  },
  {
    name: "Peridot Protocol",
    amount: "200k",
    currency: "VND",
    verified: false,
    avatar: "PP",
  },
  {
    name: "Michael Esset",
    amount: "200k",
    currency: "VND",
    verified: false,
    avatar: "ME",
  },
]

export default function RecentEarners() {
  return (
    <div className="bg-white rounded-lg pt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm text-gray-400 ">RECENT EARNERS</h2>
        <Link href="#" className="text-blue-600 text-sm flex items-center">
          Leaderboard
          <ArrowRight className="ml-1 w-3 h-3" />
        </Link>
      </div>

      <div className="space-y-4">
        {earners.map((earner, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8 bg-gray-200">
                <AvatarImage src={`/placeholder.svg?text=${earner.avatar}`} />
                <AvatarFallback className="text-xs">{earner.avatar}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium">{earner.name}</span>
                  {earner.verified && <span className="text-xs text-blue-600">✓</span>}
                </div>
                <div className="text-xs text-gray-500">{earner.verified ? "Verified by Admin" : "Accredited Work"}</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm">
                {earner.amount} <span className="text-gray-400"> {earner.currency}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
