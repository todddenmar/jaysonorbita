import React from "react";
import SectionLayout from "../layouts/SectionLayout";
import SectionTitle from "../SectionTitle";
import ContainerLayout from "../layouts/ContainerLayout";
import { skillsItems } from "@/lib/config";
import Image from "next/image";
import { TSkillItem } from "@/types";

function SkillsSection() {
  return (
    <SectionLayout id="skills" className=" bg-neutral-300">
      <ContainerLayout>
        <SectionTitle>Skills</SectionTitle>
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {skillsItems.map((item) => {
              return (
                <li key={`skill-item-${item.id}`}>
                  <SkillItem skill={item} />
                </li>
              );
            })}
          </ul>
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}

function SkillItem({ skill }: { skill: TSkillItem }) {
  return (
    <div className="space-y-2 flex flex-col items-center lg:items-start">
      <div className="w-[100px] h-fit">
        <Image
          src={skill.imageURL}
          alt={skill.name}
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <div className="text-neutral-800 text-2xl font-medium">{skill.name}</div>
      <p className="text-neutral-700">{skill.description}</p>
    </div>
  );
}
export default SkillsSection;
