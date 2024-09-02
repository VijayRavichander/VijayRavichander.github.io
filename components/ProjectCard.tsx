import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export const ProjectCard = ({
  title,
  description,
  techStack,
  gradient,
  intro,
  link,
  image,
}: {
  title: string;
  gradient: string;
  image: string;
  description: string;
  intro: string;
  link: string;
  techStack?: string;
}) => {
  return (
    <div className="text-white px-2">
      <div
        className={`hidden md:flex ${gradient} px-5 md:h-[21.25rem] md:w-[18-rem] items-center`}
      >
        <Image
          src={image}
          alt="alt"
          width={300}
          height={300}
          className={`hidden md:block`}
        />
      </div>
      <div className="flex items-center">
        <div className="text-xl py-2">
          {title}
          <div className="inline underline italic hover:text-green-300">
            <a href={link} target="_blank">
              <Button className="bg-black rounded-2xl p-0 m-0 mx-2 hover:bg-green-100 hover:text-white">
                <MoveUpRight width={20} color="lightgreen" />
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="font-thin text-sm py-1">{intro}</div>
    </div>
  );
};

export default ProjectCard;
