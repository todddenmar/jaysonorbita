"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { navLinkItems } from "@/lib/config";

function MobileMenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <Button onClick={() => setIsOpen(true)} size={"icon"} variant={"ghost"}>
        <MenuIcon />
      </Button>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full flex flex-col">
          <SheetHeader className="hidden">
            <SheetTitle>Orbita Jayson</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="flex-1 flex flex-col items-center justify-center">
            <ul className="flex flex-col items-center gap-4 text-2xl">
              {navLinkItems.map((item) => {
                return (
                  <li key={`mobile-link-item-${item.id}`}>
                    <Link onClick={() => setIsOpen(false)} href={item.path}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileMenuButton;
