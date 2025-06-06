import React from "react";
import SectionLayout from "../layouts/SectionLayout";
import ContainerLayout from "../layouts/ContainerLayout";
import Image from "next/image";
import SectionTitle2 from "../SectionTitle2";

function RoadmapSection() {
  return (
    <SectionLayout id="contact" className="bg-neutral-800 text-neutral-300">
      <ContainerLayout>
        <div className="space-y-4 sm:space-y-8">
          <SectionTitle2
            className="text-center"
            firstText="OUR"
            secondText="ROADMAP"
          />
          <div className="w-fit mx-auto rounded-4xl overflow-hidden">
            <Image
              src={"/images/roadmap.png"}
              alt={"roadmap"}
              width={800}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}

export default RoadmapSection;
