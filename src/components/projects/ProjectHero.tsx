import Link from "next/link";
import { ProjectData } from "@/lib/projects";

interface ProjectHeroProps {
  project: ProjectData;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-black">
      {/* Back Link */}
      <Link
        href="/"
        className="fixed left-8 top-8 z-50 font-inter text-sm text-white/70 transition-colors hover:text-white"
        data-cursor="hover"
      >
        ← Back
      </Link>

      {/* Title */}
      <h1 className="font-cormorant text-[96px] italic leading-none text-white text-center">
        {project.title}
      </h1>

      {/* Subtitle */}
      <p className="mt-6 font-inter text-[12px] uppercase tracking-[0.4em] text-silver/50">
        {project.subtitle}
      </p>

      {/* Separator */}
      <div className="my-8 h-[1px] w-24 bg-white/20" />

      {/* Year and Tags */}
      <div className="flex gap-4 font-inter text-sm text-white/70">
        <span>{project.year}</span>
        <span>•</span>
        {project.tags.map((tag, index) => (
          <div key={tag} className="flex gap-4">
            <span>{tag}</span>
            {index < project.tags.length - 1 && <span>•</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
