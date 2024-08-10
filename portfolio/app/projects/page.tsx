import ProjectCard from "@/components/ProjectCard";


export default function Page() {
  const projects = [
    {
        title: "LiteCode", 
        description: " LiteCode is a mini online coding platform designed for programmers and developers to practice, learn, and showcase their coding skills. Inspired by LeetCode, LiteCode offers a robust environment for coding challenges, contests, and rankings, with support for multiple programming languages.",
        techStack: "Next, Hono, Postgres, TurboRepo, Docker, Shad-CN, Tailwind, Prisma",
        link: "https://github.com/VijayRavichander/litecode"
    },
    {
        title: "BirdNet", 
        description: "Developed a signal processing pipeline to convert audio signals into images, training CNNs with Supervised Contrastive Loss (SCL) for distinct embeddings. Optimized the encoder CNN model, achieving 96% precision. Utilized transfer learning to fine-tune the model for bird call classification, and built a Streamlit web app for users to upload and classify bird calls.",
        techStack: "Pytorch",
        link: "https://github.com/VijayRavichander/BirdCLEF23-SCL"
    },
    {
        title: "Theory of Mind in LLMs", 
        description: "This project assessed the Theory of Mind capabilities of cutting-edge language models, including GPT-3.5 Turbo and GPT-4 Turbo, using the OpenAI API and various in-context learning techniques. Additionally, I fine-tuned the Mistral 7B Instruct model using QLoRA, a parameter-efficient fine-tuning method, to better understand and predict beliefs, intentions, and actions that diverge from reality. Through this process, I achieved a 30% improvement in the accuracy of Mistral 7B Instruct, demonstrating significant advancements in its ability to comprehend and interpret human thought processes.",
        techStack: "Pytorch, Transformers",
        link: "https://github.com/VijayRavichander"
    },
    {
        title: "Paper Trading", 
        description: "A responsive web application for 'Paper Trading' was developed using the MERN (Mongo, Express, React, Node) stack and hosted on GCP, allowing users to simulate stock trading in a 100% risk-free environment. The app features real-time stock search functionality, providing detailed company stock information with instant updates every 15 seconds, as well as a news page that fetches and displays current market and stock news using the Finnhub API. Interactive visualizations of stock trends are also generated using React Highcharts, showcasing stock performance over a one-year period.",
        techStack: "React, Node, Mongo, Express, GCP, Tailwind",
        link: "https://stock-search-assingment3.uw.r.appspot.com/"
    },
    {
        title: "TaskFlow - Task Management", 
        description: "TaskFlow is a visual project management tool that helps teams stay organized and focused on what matters most. Inspired by the simplicity and flexibility of Trello, TaskFlow brings a fresh perspective to the world of task management",
        techStack: "Next, Prisma, Shad-CN", 
        link: "https://github.com/VijayRavichander"
    }, 
    {
        title: "Stock Portfolio Prediction", 
        description: "A comprehensive data-driven project was implemented to enhance customer investment experiences. K-means clustering was applied to customer demographic data to identify distinct customer segments. Additionally, collaborative efforts in modeling achieved an 80% accuracy rate in predicting stock prices for five S&P 500 companies, including Apple and Bank of America. A web application was then developed, integrating both models to provide personalized stock portfolio recommendations for customers, complete with expected returns on investment and standard deviation analysis.", 
        link: "https://github.com/VijayRavichander/Customer-Segmentation-GAIP"
    }
  ]


  return (
    <div className = "m-5">
        <div className="text-4xl py-8">
            Projects
        </div>
        <div className="grid grid-cols-12 justify-items-center">
                {projects.map((project, index) => (
                    <div key = {index} className="borderx rounded-xl col-span-6 p-5 mx-9 my-5">
                        <ProjectCard key = {index} title={project.title} description={project.description}
                        link={project.link}
                        techStack = {project.techStack} />
                    </div>
                ))}
        </div>
    </div>
  );
}
