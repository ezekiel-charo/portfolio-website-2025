import Image from "next/image";
import { Project } from "./projects";

interface ProjectProps {
  project: Project;
}

export function ProjectListItem({ project }: ProjectProps) {
  return (
    <div className="flex items-start gap-6 mb-6 p-6 border-b border-gray-400">
      <Image
        src="/clipboard.svg"
        alt={project.title + " image"}
        width={32}
        height={32}
      />
      <div className="grow">
        <div className="mb-2">
          <a
            className="font-bold hover:underline text-green-500"
            href={project.live}
            target="_blank"
          >
            {project.title} →
          </a>
        </div>
        <div className="text-xs mb-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-1 border border-slate-800 me-3 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <div>{project.description}</div>
        {/* <div>{project.github}</div>
        <div>{project.live}</div> */}
        {/* <ul>
          {project.bulletPoints?.map((point) => (
            <li key={point}>- {point}</li>
          ))}
        </ul> */}
      </div>
      <a
        className="flex items-center gap-3 hover:underline hover:underline-offset-4"
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/github.svg"
          alt="Globe icon"
          width={24}
          height={24}
        />
      </a>
    </div>
  );
}
