import React from "react";
import ContainerLayout from "../layouts/ContainerLayout";
import SectionLayout from "../layouts/SectionLayout";
import SectionTitle from "../SectionTitle";
import { clientsItems } from "@/lib/config";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
function ClientsSection() {
  const groupedClients = [
    clientsItems.slice(0, 10),
    clientsItems.slice(10, 20),
  ];
  return (
    <SectionLayout id="clients">
      <ContainerLayout>
        <SectionTitle className="text-center lg:pb-4">
          Local Clients Who Trust
        </SectionTitle>
        <p className="text-lg text-center pb-4 lg:pb-0">
          Here&apos;s the list of my clients throughout my freelancing career.
        </p>
        <div>
          <div className="grid lg:hidden grid-cols-3 gap-2">
            {clientsItems.map((item) => {
              return (
                <div
                  key={`mobile-client-logo-item-${item.id}`}
                  className="rounded-full w-[100px] sm:w-[191px] mx-auto aspect-square overflow-hidden select-none"
                  style={{
                    boxShadow:
                      "0 4px 20px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <Image
                    src={item.imageURL}
                    alt={item.name}
                    width={191}
                    height={191}
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>
          <Carousel className="hidden lg:block">
            <CarouselContent>
              {groupedClients.map((item, idx) => {
                return (
                  <CarouselItem
                    key={`carousel-clients-group-${idx}`}
                    className="p-10 grid grid-cols-5 gap-4"
                  >
                    {item.map((item) => {
                      return (
                        <div
                          key={`client-logo-item-${item.id}`}
                          className="rounded-full w-[191px] aspect-square overflow-hidden select-none"
                          style={{
                            boxShadow:
                              "0 4px 20px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)",
                          }}
                        >
                          <Image
                            src={item.imageURL}
                            alt={item.name}
                            width={191}
                            height={191}
                            className="object-cover"
                          />
                        </div>
                      );
                    })}
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious
              variant={"default"}
              className="left-5 xl:-left-10"
            />
            <CarouselNext
              variant={"default"}
              className="right-5 xl:-right-10"
            />
          </Carousel>
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}

export default ClientsSection;
