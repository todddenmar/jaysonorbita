import React from "react";
import SectionLayout from "./layouts/SectionLayout";
import ContainerLayout from "./layouts/ContainerLayout";
import SectionTitle2 from "./SectionTitle2";
import { Separator } from "./ui/separator";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <SectionLayout
      id="roadmap"
      className="bg-neutral-900 text-neutral-300 relative overflow-hidden"
    >
      <ContainerLayout>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="grid-cols-3 items-center absolute top-0 bottom-0 -left-[100px] rotate-[20deg] h-[1000px] -mt-[200px] hidden lg:grid">
            <div className="bg-neutral-300 h-full w-[200px]"></div>
            <div className="w-[200px]">
              <Image
                src={"/images/logo.png"}
                alt="jayson orbita logo"
                width={300}
                height={100}
                className="object-contain invert -rotate-90"
              />
            </div>
            <div className="bg-neutral-300 h-full w-[200px]"></div>
          </div>
          <div className="flex items-center absolute top-[5px] -right-[35px] -rotate-[45deg] h-[500px] -mt-[200px] lg:hidden">
            <div className="bg-neutral-300 h-full w-[40px]"></div>
            <div className="w-[80px]">
              <Image
                src={"/images/logo.png"}
                alt="jayson orbita logo"
                width={300}
                height={100}
                className="object-contain invert rotate-90"
              />
            </div>
            <div className="bg-neutral-300 h-full w-[40px]"></div>
          </div>
          <div></div>
          <div className="grid gap-4 sm:gap-8">
            <div className="flex lg:justify-center">
              <SectionTitle2 firstText="Let's work" secondText="Together" />
            </div>
            <div>
              <Separator />
            </div>
            <div className="space-y-4">
              <div className="space-y-2 lg:space-y-4">
                <div className="text-3xl lg:text-5xl font-heading">
                  Jayson B. Orbita
                </div>
                <div className="uppercase sm:text-lg lg:text-xl">
                  Freelancer | Social Media Manager
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={"/images/icons/email.png"}
                    alt={"email address"}
                    width={40}
                    height={40}
                    className="object-contain invert"
                  />
                  <Link href={"mailTo:jayson.orbita2003@gmail.com"}>
                    jayson.orbita2003@gmail.com
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src={"/images/icons/smartphone.png"}
                    alt={"smartphone"}
                    width={40}
                    height={40}
                    className="object-contain invert"
                  />
                  <Link href={"tel:09166204921"}>0916-620-4921</Link>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src={"/images/icons/facebook.png"}
                    alt={"facebook"}
                    width={40}
                    height={40}
                    className="object-contain invert"
                  />
                  <Link
                    target="_blank"
                    href={"https://www.facebook.com/jayson.orbita.37"}
                  >
                    Jay Son
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}

export default Footer;
