import { Dot } from "lucide-react";
import Link from "next/link";
export default function Page() {

    const techStack = [
      {
        "category": "Machine Learning",
        "tools": ["Pytorch", "Transformers", "Scikit-Learn", "Pandas"]
      },
      {
        "category": "Web Development",
        "tools": ["Next.Js", "React", "Tailwind"]
      },
      {
        "category": "Server & Data",
        "tools": ["Flask", "Express", "Hono", "Postgres", "Redis", "Kafka", "Docker"]
      }
    ]
  
  return (
    <div className="p-10 md:mx-24">
      <div>
        <div className="text-4xl py-6">About Me</div>
        <div className="mx-4">
          I&apos;m Vijay Ravichander, a Master&apos; s student in Computer Science at the 
          <span className="text-red-400 pl-1">
           University of Southern California
          </span>
          , specializing in Artificial Intelligence. With a strong passion for
          language models, I enjoy training, fine-tuning, and developing
          innovative A.I solutions. Additionally, I have a keen interest in building
          complex web applications. I&apos;m currently seeking a Co-op position for
          Fall 2024 and Spring 2025, as well as Full-Time roles starting Summer
          2025. I&apos;m excited to leverage my skills and expertise to make a
          meaningful and lasting impact in the field. 🚀
        </div>
      </div>
      <div>
        <div className="text-4xl py-8">Work Experience</div>
        <div className="mx-4">
          <div className="my-2">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="text-lg">Software Engineering Intern</div>
              <div>July 2024 - Present</div>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="font-thin">
                <Link href="https://www.linkedin.com/company/program-warehouse/">
                  Program Warehouse
                </Link>
              </div>
              <div>Remote</div>
            </div>
          </div>
          <div className="my-7">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="text-lg">Academic Intern</div>
              <div>June 2022 - July 2023</div>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="font-thin">
                <Link href="https://www.linkedin.com/company/program-warehouse/">
                  National University of Singapore
                </Link>
              </div>
              <div>Singapore</div>
            </div>
          </div>
        </div>
      </div>
      <div>
    <div className="text-4xl py-6">Education</div>
        <div className="mx-4">
          <div className="my-3">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="text-lg">Master&apos;s in Computer Science (Artificial Intelligence)</div>
              <div>July 2023 - May 2025</div>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="font-thin">
                <Link href="https://www.linkedin.com/company/program-warehouse/">
                  University of Southern California
                </Link>
                <div>
                  Coursework: Machine Learning, Deep Learning, Applications of NLP, Analysis of Algorithms, Web Technologies, Foundations of A.I, 
                </div>
              </div>
              <div>GPA: 3.65 / 4</div>
            </div>
          </div>
          </div>
        </div>
      <div>
        <div className="text-4xl py-6">Tech Stack</div>
        <div className="min-w-screen">
          <div className="grid grid-cols-12">
            {techStack.map((item, index)=>(
              <div key = {index} className="col-span-12 lg:col-span-6 my-4">
                <div className="text-lg text-violet-300 font-bold">{item.category}</div>
                <div className="flex flex-col md:flex-row justify-start">
                  {item.tools.map((tool, index) => (
                    <div key = {index} className="mr-3 font-semibold">
                      <Dot className="inline md:hidden" /> {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
    </div>
  );
}
