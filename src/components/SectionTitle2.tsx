import { cn } from "@/lib/utils";
import React from "react";

type SectionTitle2Props = {
  firstText: string;
  secondText: string;
  className?: string;
};
function SectionTitle2({
  firstText,
  secondText,
  className,
}: SectionTitle2Props) {
  return (
    <div className={cn("", className)}>
      <h3 className="font-heading text-2xl sm:text-5xl">
        {firstText}
        <br /> <span className="text-5xl sm:text-8xl">{secondText}</span>
      </h3>
    </div>
  );
}

export default SectionTitle2;
