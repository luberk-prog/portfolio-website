import { projects } from "@/data/projects";
import { ArrowLeft, Github, ExternalLink, Code2, Layers } from "lucide-react";
import Link from "next/link";
import { ProjectDetailClient } from "./ProjectDetailClient";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link 
          href="/"
          className="px-6 py-2 bg-primary rounded-full text-white no-underline"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return <ProjectDetailClient project={project} />;
}
