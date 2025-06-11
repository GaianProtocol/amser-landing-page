import { UserCircle, Zap, Wallet } from "lucide-react"

export default function HowItWorks() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
      <h2 className="text-lg font-semibold mb-6">HOW IT WORKS</h2>

      <div className="space-y-8 relative before:absolute before:left-[22px] before:top-[40px] before:bottom-[40px] before:w-[2px] before:bg-gray-100">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 z-10">
            <UserCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-medium mb-1">Create your Profile</h3>
            <p className="text-sm text-gray-600">by telling us about yourself</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 z-10">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-medium mb-1">Participate in Bounties & Projects</h3>
            <p className="text-sm text-gray-600">to build proof of work</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 z-10">
            <Wallet className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-medium mb-1">Get Paid for Your Work</h3>
            <p className="text-sm text-gray-600">in global standards</p>
          </div>
        </div>
      </div>
    </div>
  )
}
