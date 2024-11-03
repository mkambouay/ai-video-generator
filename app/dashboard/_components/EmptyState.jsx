"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function EmptyState() {
  return (
    <div className="p-5 py-24 flex items-center flex-col mt-10 border-2 border-dashed">
      <h2>You don't have any video created</h2>
      <Link href={"/dashboard/create-new"}>
        <Button>Create new video</Button>
      </Link>
    </div>
  );
}
