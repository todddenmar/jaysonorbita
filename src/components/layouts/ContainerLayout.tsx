import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
type SectionLayoutProps = {
  children: ReactNode;
  className?: string;
};
function ContainerLayout({ children, className }: SectionLayoutProps) {
  return (
    <div className={cn("max-w-[1240px] mx-auto w-full", className)}>
      {children}
    </div>
  );
}

export default ContainerLayout;
