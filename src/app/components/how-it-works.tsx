import { UserCircle, Zap, Wallet } from "lucide-react"

export default function HowItWorks() {
  return (
    <div className="bg-white rounded-lg ">
      <h2 className="text-sm text-gray-400 mb-6">HOW IT WORKS</h2>

      <div className="space-y-8 text-sm relative before:absolute before:left-[22px] before:top-[40px] before:bottom-[40px] before:w-[2px] before:bg-gray-100">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 z-10">
            <UserCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className=" mb-1 text-[#6366F1]">Create your Profile</h3>
            <p className="text-xs text-gray-600">by telling us about yourself</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 z-10">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-medium mb-1 text-[#6366F1]">Participate in Bounties & Projects</h3>
            <p className="text-xs text-gray-600">to build proof of work</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 z-10">
            <Wallet className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-medium mb-1 text-[#6366F1]">Get Paid for Your Work</h3>
            <p className="text-xs text-gray-600">in global standards</p>
          </div>
        </div>
      </div>
    </div>
  )
}
