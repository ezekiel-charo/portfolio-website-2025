import { Lobster_Two } from "next/font/google";
import { ProjectListItem } from "./ProjectListItem";
import { projects } from "./projects";

const lobsterTwo = Lobster_Two({
  weight: "700",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex flex-col items-center pb-20">
      <div className="flex flex-col gap-8 lg:pt-20 p-4">
        <h1 className={`${lobsterTwo.className} text-4xl font-bold mb-2`}>
          My Projects
        </h1>
        <div className="lg:max-w-240">
          {projects.map((project) => (
            <ProjectListItem project={project} key={project.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
