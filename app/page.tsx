import ProjectCard from "@/components/ProjectCard";
import {Github, Linkedin, File} from "lucide-react"
export default function Home() {
  const projects = [
    {
      title: "LMSYS ChatBot Preference", 
      intro: "LLM response preference classification assistant built using Pytorch",
      description: "",
      techStack: "",
      link: "https://github.com/VijayRavichander/LMSys", 
      gradient: "bg-gradient-to-l from-amber-300 to-sky-400", 
      image: "/LMSYS.webp"
    },
    {
        title: "LiteCode v1.0", 
        intro: "Coding platform with problems and contest using Next.js",
        description: " LiteCode is a mini online coding platform designed for programmers and developers to practice, learn, and showcase their coding skills. Inspired by LeetCode, LiteCode offers a robust environment for coding challenges, contests, and rankings, with support for multiple programming languages.",
        techStack: "Next, Hono, Postgres, TurboRepo, Docker, Shad-CN, Tailwind, Prisma",
        link: "https://github.com/VijayRavichander/litecode", 
        gradient: "bg-gradient-to-l from-orange-200 to-violet-500", 
        image: "/code_image.webp"
    },
    {
        title: "BirdNet", 
        intro: "Audio processing model to detect bird calls in the wild using Pytorch", 
        description: "Developed a signal processing pipeline to convert audio signals into images, training CNNs with Supervised Contrastive Loss (SCL) for distinct embeddings. Optimized the encoder CNN model, achieving 96% precision. Utilized transfer learning to fine-tune the model for bird call classification, and built a Streamlit web app for users to upload and classify bird calls.",
        techStack: "Pytorch",
        link: "https://github.com/VijayRavichander/BirdCLEF23-SCL",
        gradient: "bg-gradient-to-r from-blue-500 to-pink-500",
        image: "/BirdCLEF23.webp"
    },
    {
        title: "Theory of Mind in LLMs",
        intro: "Assessing the ability of Theory of Mind in LLMs using Fine-Tuning and Prompt Engineering",  
        description: "This project assessed the Theory of Mind capabilities of cutting-edge language models, including GPT-3.5 Turbo and GPT-4 Turbo, using the OpenAI API and various in-context learning techniques. Additionally, I fine-tuned the Mistral 7B Instruct model using QLoRA, a parameter-efficient fine-tuning method, to better understand and predict beliefs, intentions, and actions that diverge from reality. Through this process, I achieved a 30% improvement in the accuracy of Mistral 7B Instruct, demonstrating significant advancements in its ability to comprehend and interpret human thought processes.",
        techStack: "Pytorch, Transformers",
        link: "https://drive.google.com/file/d/1Egl4dKP0coggUte1c5zZfx13BNB-IMUT/view?usp=sharing",
        image: "/TLM.webp",
        gradient: "bg-gradient-to-l from-cyan-400 to-blue-900"
    },
    {
        title: "Paper Trading", 
        intro: "Minimalistic stock trading website built with React and Flask",
        description: "A responsive web application for 'Paper Trading' was developed using the MERN (Mongo, Express, React, Node) stack and hosted on GCP, allowing users to simulate stock trading in a 100% risk-free environment. The app features real-time stock search functionality, providing detailed company stock information with instant updates every 15 seconds, as well as a news page that fetches and displays current market and stock news using the Finnhub API. Interactive visualizations of stock trends are also generated using React Highcharts, showcasing stock performance over a one-year period.",
        techStack: "React, Node, Mongo, Express, GCP, Tailwind",
        image: "/PaperTrading.webp",
        link: "https://stock-search-assingment3.uw.r.appspot.com/",
        gradient: "bg-gradient-to-l from-white to-red-500"
    },
    {
        title: "TaskFlow", 
        intro: "Task management board similar to Trello build with Next.js with ",
        description: "TaskFlow is a visual project management tool that helps teams stay organized and focused on what matters most. Inspired by the simplicity and flexibility of Trello, TaskFlow brings a fresh perspective to the world of task management",
        techStack: "Next, Prisma, Shad-CN", 
        image: "/TaskFlow.webp",
        link: "https://github.com/VijayRavichander",
        gradient: "bg-gradient-to-l from-white to-yellow-500"
    }, 
    {
        title: "Stock Portfolio Prediction", 
        intro: "Stock Portfolio Recommendation using Clustering and Time Series Prediction of Stocks",
        image: "/stockPortfolio.webp",
        description: "A comprehensive data-driven project was implemented to enhance customer investment experiences. K-means clustering was applied to customer demographic data to identify distinct customer segments. Additionally, collaborative efforts in modeling achieved an 80% accuracy rate in predicting stock prices for five S&P 500 companies, including Apple and Bank of America. A web application was then developed, integrating both models to provide personalized stock portfolio recommendations for customers, complete with expected returns on investment and standard deviation analysis.", 
        link: "https://github.com/VijayRavichander/Customer-Segmentation-GAIP", 
        gradient: "bg-gradient-to-l from-white to-green-500"
    }
  ]


  return (
    <div className = "m-5 md:mx-10">
        <div>
          <div className="text-2xl font-bold">
            Vijay Ravichander
          </div>
          <div>
            Grad Student @ USC
          </div>
          <div>
            Developing efficient small language models and distributed web applications
          </div>
        </div>
        <div className="flex my-4">
        <div className="hover:text-green-300 px-2">
                <a href="https://github.com/VijayRavichander">
                 <Github className="text-white h-6 w-6" />
                </a>
              </div>
              <div className="hover:text-green-300 px-2">
                <a href="https://www.linkedin.com/in/vijay-ravichander01/">
                    <Linkedin className="text-blue-600  h-6 w-6" />
                </a>
              </div>
              <div className="hover:text-green-300 px-2">
                <a href="https://drive.google.com/file/d/1UpSIqDDb9HuNG6WzsS87VW6yz2vt1-Vt/view?usp=sharing">
                    <File className="text-green-300  h-6 w-6" />
                </a>
              </div>

        </div>
        <div className="text-3xl py-8">
            Projects
        </div>

        <div className="grid grid-cols-12 justify-items-center">
                {projects.map((project, index) => (
                    <div key = {index} className="rounded-xl col-span-12 md:col-span-6 lg:col-span-3 md:p-1 md:mx-0 my-2">
                        <ProjectCard key = {index} title={project.title} description={project.description}
                        link={project.link}
                        techStack = {project.techStack} 
                        intro = {project.intro}
                        image = {project.image}
                        gradient = {project.gradient}
                        />
                    </div>
                ))}
        </div>
    </div>
  );
}
