import HomeBanner from "@/components/HomeBanner";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ClientsSection from "@/components/sections/ClientsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import WorkSamplesSection from "@/components/sections/WorkSamplesSection";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <HomeBanner />
      <CertificationsSection />
      <SkillsSection />
      <WorkSamplesSection />
      <ClientsSection />
    </main>
  );
}
