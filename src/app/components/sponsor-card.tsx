import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function SponsorCard() {
  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-6 flex items-center gap-4">
      <div className="flex-1">
        <h3 className="font-medium mb-1 flex items-center">
          Become a Sponsor
          <ArrowRight className="ml-1 w-3 h-3" />
        </h3>
        <p className="text-sm text-gray-600">Reach 0+ crypto talent from one single dashboard</p>
      </div>
        <Image src={"/work.webp"} alt="Work" width={48} height={48} />
    </div>
  )
}
