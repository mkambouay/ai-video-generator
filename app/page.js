import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>AI video generator</h2>
      <Button>Generate</Button>

      <UserButton />
    </div>
  );
}
