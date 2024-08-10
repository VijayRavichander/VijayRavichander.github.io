import AppBar from "@/components/AppBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <AppBar />
      </div>
      <div className="flex justify-around">
          <div>
            Intro
          </div>
          <div>
            Image
          </div>
      </div>
      <div>
      </div>
    </div>
  );
}
