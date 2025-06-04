import React, { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};
function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-4xl lg:text-6xl font-medium pb-4 lg:pb-10 uppercase">
      {children}
    </h2>
  );
}

export default SectionTitle;
