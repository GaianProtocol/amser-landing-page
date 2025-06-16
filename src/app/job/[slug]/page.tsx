
import { AppFooter } from "@/app/components/AppFooter";
import { AppHeader } from "@/app/components/AppHeader";
import { BountyPage } from "../BountyPage";

type PageProps = { params: Promise<{ slug: string }> };

export default async function Page(props: PageProps) {
  const params = await props.params;

  return (
    <div className="min-h-screen bg-white font-sans text-[#334155]">
      <AppHeader />
      <BountyPage slug={params.slug} />
      <AppFooter />
    </div>
  );
}
