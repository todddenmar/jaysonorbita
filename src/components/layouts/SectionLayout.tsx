import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type SectionLayoutProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};
function SectionLayout({ children, className, id }: SectionLayoutProps) {
  return (
    <section id={id} className={cn("px-4 py-[82px] lg:py-[100px]", className)}>
      {children}
    </section>
  );
}

export default SectionLayout;
