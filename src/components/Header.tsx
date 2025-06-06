"use client";
import Link from "next/link";
import React from "react";
import MobileMenuButton from "./buttons/MobileMenuButton";
import { navLinkItems } from "@/lib/config";
import { saveAs } from "file-saver";
import { Button } from "./ui/button";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";

function Header() {
  const saveFile = () => {
    saveAs("/resume.pdf", "jayson-orbita-resume");
  };
  return (
    <section className="w-full fixed top-0 h-[72px] z-20 bg-neutral-300">
      <nav className="w-full max-w-[1240px] mx-auto">
        <div className="flex items-center gap-2 justify-between p-4">
          <Link
            href={"/"}
            className="font-medium text-sm lg:text-lg flex items-center gap-2"
          >
            <div className="relative h-full rounded-full overflow-hidden">
              <Image
                src={"/images/logo.png"}
                alt="jayson orbita logo"
                width={100}
                height={50}
                className="object-contain"
              />
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <ul className="hidden lg:flex items-center gap-2">
              {navLinkItems.map((item) => {
                return (
                  <Link
                    href={item.path}
                    key={`nav-link-item-${item.id}`}
                    className="text-base p-2 font-medium"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </ul>
            <Button onClick={saveFile}>
              <DownloadIcon /> Download Resume
            </Button>
            <MobileMenuButton />
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
