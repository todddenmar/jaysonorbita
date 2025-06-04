import Image from "next/image";
import React from "react";

function HomeBanner() {
  return (
    <section
      id="banner"
      className="lg:h-screen w-full relative bg-neutral-300 pt-[72px]"
    >
      <div className="flex flex-col h-full items-center lg:grid lg:grid-cols-2 gap-4 mx-auto w-full max-w-[1240px] lg:p-4">
        <div className="flex flex-col items-center gap-4">
          <div className="w-[300px] lg:w-[400px] aspect-square rounded-full overflow-hidden border-[20px] border-neutral-800">
            <Image
              src={"/images/jayson-photo.png"}
              alt="jayson photo profile"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-medium text-xl lg:text-4xl uppercase">
              Jayson B. Orbita
            </h1>
            <p className="text-2xl">
              <Image
                src={"/images/logo.png"}
                alt="jayson orbita logo"
                width={200}
                height={60}
                className="object-contain"
              />
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 lg:gap-6">
          <div className="w-fit h-fit">
            <Image
              src={"/images/paint-image.png"}
              alt="paint background"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="bg-neutral-800 text-neutral-300 p-4 lg:p-6 lg:rounded-4xl">
            <p className="text-lg lg:text-2xl">
              I am Jayson Orbita, a 20-year-old freelance Social Media Manager,
              Digital Marketer, Graphic Designer and Video Editor from Pagadian
              City, Mindanao, Philippines, blending technical expertise with
              artistic flair to create visually stunning digital masterpieces
              and engaging narratives. I lend a hand to business owners to grow
              & maintain their Social Media <br></br>
              <strong>Presence through the use of unique</strong> strategies and
              content planning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
