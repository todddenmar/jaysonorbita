import React from "react";
import SectionLayout from "../layouts/SectionLayout";
import ContainerLayout from "../layouts/ContainerLayout";
import SectionTitle from "../SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { sampleWorks } from "@/lib/config";
import Image from "next/image";
function GraphicDesignWorksSection() {
  return (
    <SectionLayout
      id="work-samples"
      className=" bg-neutral-900 text-neutral-300"
    >
      <ContainerLayout>
        <SectionTitle>Graphic Design</SectionTitle>
        <Carousel>
          <CarouselContent>
            {sampleWorks.map((item) => {
              return (
                <CarouselItem key={`carousel-sample-work-item-${item.id}`}>
                  <div className="w-full aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src={item.imageURL}
                      alt={item.name}
                      width={1420}
                      height={800}
                      className="object-cover aspect-video"
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious variant={"default"} className="left-5" />
          <CarouselNext variant={"default"} className="right-5" />
        </Carousel>
      </ContainerLayout>
    </SectionLayout>
  );
}

export default GraphicDesignWorksSection;
