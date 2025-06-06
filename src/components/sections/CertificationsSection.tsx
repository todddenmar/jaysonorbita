import React from "react";
import SectionTitle from "../SectionTitle";
import SectionLayout from "../layouts/SectionLayout";
import Image from "next/image";
import ContainerLayout from "../layouts/ContainerLayout";

function CertificationsSection() {
  return (
    <SectionLayout
      id="certifications"
      className=" text-neutral-300 bg-neutral-900"
    >
      <ContainerLayout>
        <SectionTitle>Certifications</SectionTitle>
        <div className="space-y-10">
          <div className="grid lg:grid-cols-2 gap-4 items-center">
            <div className="w-full flex justify-center">
              <Image
                src={"/images/certificate-smm.jpg"}
                alt="certification social media marketing"
                width={700}
                height={700}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="space-y-4">
                <div className="font-medium text-xl lg:text-2xl">
                  Certified Social Media Marketer
                </div>
                <ul className="list-disc list-inside text-base lg:text-xl">
                  <li>Algorithm</li>
                  <li>Content Creation</li>
                  <li>Basic Video Editing</li>
                  <li>Lead Generation</li>
                  <li>Wordpress</li>
                  <li>Facebook Ads</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4 items-center">
            <div className="w-full flex justify-center lg:order-2">
              <Image
                src={"/images/certificate-real-estate.jpg"}
                alt="certification real estate"
                width={700}
                height={700}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="space-y-4">
                <div className="font-medium text-xl lg:text-2xl">
                  Certified Real Estate Virtual Assistant
                </div>
                <ul className="list-disc list-inside text-base lg:text-xl">
                  <li>Administrative Task</li>
                  <li>Transaction Coordination</li>
                  <li>Social Media Marketing</li>
                  <li>Listings Management</li>
                  <li>Real Estate Process</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}

export default CertificationsSection;
