import Image from "next/image";
import React from "react";

function ResultsAndAnalytics() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:gap-10">
      <div className="grid lg:flex items-center gap-4 h-fit max-w-5xl mx-auto">
        <p className="text-2xl font-medium max-w-sm">
          The given analysis shows my ability to use my knowledge and skils
          about facebook content creations, reels and trends which aims to
          engage and reach a larger audience.
        </p>
        <Image
          src={"/images/work-samples/divers-post-reach.png"}
          alt={"divers post reach"}
          width={1000}
          height={1000}
          className="object-contain rounded-lg"
        />
      </div>
      <div className="space-y-4 lg:space-y-10">
        <p className="text-2xl text-center font-medium">
          Grow your business through social media presence.
        </p>
        <div className="flex flex-col items-center sm:grid sm:grid-cols-3 lg:max-w-5xl lg:mx-auto justify-center gap-4">
          <Image
            src={"/images/work-samples/audience.png"}
            alt={"estimated audience"}
            width={600}
            height={600}
            className="object-contain"
          />
          <Image
            src={"/images/work-samples/insights-overview.png"}
            alt={"Insights Overview Tab"}
            width={600}
            height={600}
            className="object-contain"
          />
          <Image
            src={"/images/work-samples/messaging-insights.png"}
            alt={"messaging insights"}
            width={600}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 items-center mx-auto max-w-5xl">
        <p className="text-2xl text-center font-medium">
          I can help you Reach more Audience with Organic and paid Contents.
        </p>

        <div className="grid grid-cols-1 gap-4">
          <Image
            src={"/images/work-samples/facebook-reach.png"}
            alt={"facebook-reach"}
            width={1000}
            height={1000}
            className="object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default ResultsAndAnalytics;
