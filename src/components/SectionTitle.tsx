import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
};
function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-4xl lg:text-6xl font-medium pb-4 lg:pb-10 uppercase",
        className
      )}
    >
      {children}
    </h2>
  );
}

export default SectionTitle;
