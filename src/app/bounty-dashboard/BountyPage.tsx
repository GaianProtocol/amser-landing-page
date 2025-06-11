import { Button } from "@/components/ui/button";
import { Star, Share2 } from "lucide-react";
import { LeftSidebar } from "./LeftSidebar";
import { MainContent } from "./MainContent";

export function BountyPage() {
  return (
    <main className="container mx-auto px-4 py-6 ">
      <div className="min-h-screen">
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-gray-600">
                Submit a dashboard and become a Glint Ambassador!
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                SHARE
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row">
          <LeftSidebar />
          <MainContent />
        </div>
      </div>
    </main>
  );
}