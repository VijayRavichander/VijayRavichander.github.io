import { File, Github, Mail } from "lucide-react";
import { Linkedin } from "lucide-react";
import Link from "next/link";
export const AppBar = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around bg-black text-white py-8 border-b border-white items-center">
        <div className="hover:text-green-300 py-10 md:py-0">
        <Link href="/">  
               Home
        </Link>
        </div>
        <div className="flex justify-between text-white w-1/2">
          <div className="hover:text-green-300 px-2">
            <Link href="about">  
                About
            </Link>
         </div>
          <div className="hover:text-green-300 px-2">
            <Link href="projects">
            Projects
            </Link>
            </div>
          <div className="hover:text-green-300 px-2">
                <a href="https://github.com/VijayRavichander">
                 <Github className="text-white h-8 w-8" />
                </a>
              </div>
              <div className="hover:text-green-300 px-2">
                <a href="https://www.linkedin.com/in/vijay-ravichander01/">
                    <Linkedin className="text-blue-600  h-8 w-8" />
                </a>
              </div>
              <div className="hover:text-green-300 px-2">
                <a href="https://drive.google.com/file/d/1UpSIqDDb9HuNG6WzsS87VW6yz2vt1-Vt/view?usp=sharing">
                    <File className="text-green-300  h-8 w-8" />
                </a>
              </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
