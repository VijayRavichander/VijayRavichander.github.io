import { Projector } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
export const ProjectCard = ({title, description, techStack,  link}: {title: string, description: string, link: string, techStack?: string}) => {
    return (<div className="text-white p-4">
        <div className="text-2xl py-5">
            {title}
        </div>
        <div className="italic">
            {techStack && <div>Tech Stack: {techStack}</div>}
        </div>
        <div className="font-thin text-lg py-5 text-justify">
            {description}
        </div>
        <div className="underline italic hover:text-green-300">
            <a href = {link} target="_blank">
               <Button className="border hover:bg-white hover:text-black">
                Link
               </Button>
            </a>
        </div>
    </div>)
}

export default ProjectCard;