import { ArrowRight } from "lucide-react"

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
      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-600"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M7 7h.01" />
          <path d="M17 7h.01" />
          <path d="M7 17h.01" />
          <path d="M17 17h.01" />
        </svg>
      </div>
    </div>
  )
}
