import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight } from "lucide-react"

const activities = [
  {
    name: "Faith John",
    action: "just submitted a bounty",
    time: "1h",
    avatar: "FJ",
  },
  {
    name: "Aryan Dagar",
    action: "just applied to a project",
    time: "2h",
    avatar: "AD",
  },
  {
    name: "Kabba Yusuf Co.",
    action: "just submitted a bounty",
    time: "4h",
    avatar: "KY",
  },
  {
    name: "Ajay Kumara",
    action: "just submitted a bounty",
    time: "2d",
    avatar: "AK",
  },
]

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-lg pt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm text-gray-400 ">RECENT ACTIVITY</h2>
        <Link href="#" className="text-blue-600 text-sm flex items-center">
          View All
          <ArrowRight className="ml-1 w-3 h-3" />
        </Link>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-2">
            <Avatar className="w-8 h-8 bg-gray-200">
              <AvatarImage src={`/placeholder.svg?text=${activity.avatar}`} />
              <AvatarFallback className="text-xs">{activity.avatar}</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm">
                <span className="font-medium">{activity.name}</span>
                <span className="text-gray-600"> {activity.action}</span>
              </div>
              <div className="text-xs text-gray-500">{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
