import { ProjectListItem } from "./ProjectListItem";
import { projects } from "./projects";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold mb-2">My Projects</h1>
        <div className="lg:max-w-[720px]">
          {projects.map((project) => (
            <ProjectListItem project={project} key={project.title} />
          ))}
        </div>
      </main>
    </div>
  );
}
