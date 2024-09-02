import { File, Github, Mail } from "lucide-react";
import { Linkedin } from "lucide-react";
import Link from "next/link";

export const AppBar = () => {

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between bg-black text-white py-4  items-center">
        <div>
        </div>
        <div className="flex justify-evenly text-white w-1/2 text-xl">
        <div className={`hover:text-green-300 px-2`}>
            <Link href="/">[Projects]</Link>
          </div>
          <div className={`hover:text-green-300 px-2`}>
            <Link href="about">[About]</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AppBar;
