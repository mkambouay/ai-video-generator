import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="p-3 px-5 flex items-center justify-between shadow-md">
      <div className="flex gap-3 items-center">
        <Image alt="logo" src={"/logo.png"} width={40} height={40} />
        <h2 className="font-bold text-xl">AI video generator</h2>
      </div>
      <div className="flex gap-3 items-center">
        <Button>Dashboard</Button>
        <UserButton />
      </div>
    </div>
  );
}
