import HomeBanner from "@/components/HomeBanner";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ClientsSection from "@/components/sections/ClientsSection";
import GraphicDesignWorksSection from "@/components/sections/GraphicDesignWorksSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import SMMWorksSection from "@/components/sections/SMMWorksSection";
import SkillsSection from "@/components/sections/SkillsSection";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <HomeBanner />
      <CertificationsSection />
      <SkillsSection />
      <GraphicDesignWorksSection />
      <Separator className="bg-neutral-700" />
      <SMMWorksSection />
      <ClientsSection />
      <RoadmapSection />
    </main>
  );
}
