import Link from "next/link";

export default function Page() {
  return (
    <div className="p-10">
      <div>
        <div className="text-4xl py-8">About Me</div>
        <div className="mx-4">
          I&apos;m Vijay Ravichander, a Master&apos;s student in Computer Science at the
          <span className="text-red-400">
            University of Southern California
          </span>
          , specializing in Artificial Intelligence. With a strong passion for
          language models, I enjoy training, fine-tuning, and developing
          innovative solutions. Additionally, I have a keen interest in building
          complex web applications. I&apos;m currently seeking a Co-op position for
          Fall 2024 and Spring 2025, as well as Full-Time roles starting Summer
          2025. I&apos;m excited to leverage my skills and expertise to make a
          meaningful and lasting impact in the field. 🚀
        </div>
      </div>
      <div>
        <div className="text-4xl py-8">Work Experience</div>
        <div className="mx-4">
          <div className="my-3">
            <div className="flex justify-between">
              <div className="text-lg">Software Engineering Intern</div>
              <div>July 2024 - Present</div>
            </div>
            <div className="flex justify-between">
              <div className="font-thin">
                <Link href="https://www.linkedin.com/company/program-warehouse/">
                  Program Warehouse
                </Link>
              </div>
              <div>Remote</div>
            </div>
          </div>
          <div className="my-7">
            <div className="flex justify-between">
              <div className="text-lg">Academic Intern</div>
              <div>June 2022 - July 2023</div>
            </div>
            <div className="flex justify-between">
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
        <div className="text-4xl py-8">Tech Stack</div>
        <div className="flex justify-evenly">
            <div>Pytorch</div>
            <div>Transformers</div>
            <div>Flask</div>
            <div>Next.Js</div>
            <div>Tailwind</div>
            <div>Postrgres</div>
            <div>Express</div>
            <div>Hono</div>
            <div>React</div>
            <div>Docker</div>
            <div>Redis</div>
            <div>Kafka</div>
        </div>
    </div>
    </div>
  );
}
