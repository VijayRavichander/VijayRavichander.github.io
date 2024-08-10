import { File, Github, Mail } from "lucide-react"
import { Linkedin } from "lucide-react"

export const AppBar = () => {
    return <div className="flex justify-around bg-black py-10">
        <div>

        </div>
        <div className="flex justify-between">
            <div>
                Home
            </div>
            <div>
                About
            </div>
            <div>
                Tech Stack
            </div>
            <div>   
                <Github className="text-white"/>
            </div>
            <div>
                <Linkedin className="text-blue-600"/>
            </div>
            <div>
                <Mail className="text-red-300"/>
            </div>
            <div>
                <File className="text-white" />
            </div>
        </div>
    </div>
}

export default AppBar;