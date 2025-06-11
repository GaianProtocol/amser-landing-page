import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight } from "lucide-react"

const earners = [
  {
    name: "David Balya",
    amount: "5k",
    currency: "USDC",
    verified: true,
    avatar: "DB",
  },
  {
    name: "Yuki Kimura",
    amount: "2k",
    currency: "USDC",
    verified: true,
    avatar: "YK",
  },
  {
    name: "Accret Wallet",
    amount: "2.5k",
    currency: "USDC",
    verified: false,
    avatar: "AW",
  },
  {
    name: "Peridot Protocol",
    amount: "2.3k",
    currency: "USDC",
    verified: false,
    avatar: "PP",
  },
  {
    name: "Michael Esset",
    amount: "1.5k",
    currency: "USDC",
    verified: false,
    avatar: "ME",
  },
]

export default function RecentEarners() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">RECENT EARNERS</h2>
        <Link href="#" className="text-blue-600 text-sm flex items-center">
          Leaderboard
          <ArrowRight className="ml-1 w-3 h-3" />
        </Link>
      </div>

      <div className="space-y-4">
        {earners.map((earner, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src={`/placeholder.svg?text=${earner.avatar}`} />
                <AvatarFallback>{earner.avatar}</AvatarFallback>
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
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-sm">
                {earner.amount} {earner.currency}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
