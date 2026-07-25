import Image from "next/image";
import { Project } from "./projects";

interface ProjectProps {
  project: Project;
}

export function ProjectListItem({ project }: ProjectProps) {
  return (
    <div className="flex items-start gap-6 py-6 border-b border-gray-800">
      <div className="grow">
        <div className="mb-2">
          <a
            className="font-extrabold hover:underline text-green-500"
            href={project.live}
            target="_blank"
          >
            {project.title} →
          </a>
        </div>
        <div className="text-xs mb-2">
          {project.technologies.map((tech, i, arr) => (
            <span key={tech} className="font-medium text-gray-500 me-1">
              {tech}{i !== arr.length - 1 && ", "}
            </span>
          ))}
        </div>
        <div className="text-sm">{project.description}</div>
      </div>
      <a
        className="flex items-center gap-2 hover:underline text-sm font-medium bg-gray-900 p-2 px-3 rounded-lg"
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/github.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Github Repo
      </a>
    </div>
  );
}
