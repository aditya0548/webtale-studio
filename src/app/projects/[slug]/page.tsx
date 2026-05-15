import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import ProjectHero from "@/components/projects/ProjectHero";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-col bg-black w-full min-h-screen">
      <ProjectHero project={project} />
      <div id="project-content" className="w-full min-h-[200vh] bg-black"></div>
    </main>
  );
}
