
import Link from "next/link";
import {
  GraduationCap,
  Factory,
  ArrowUpRight,
} from "lucide-react";
import type { Project } from "@/data/site";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({
  project,
}: ProjectCardProps) {
  const isFYP = project.slug === "rgb-color-sorting";

  return (
    <article className="category-project-card">
      <div className="category-project-icon">
        {isFYP ? (
          <GraduationCap size={42} strokeWidth={1.6} />
        ) : (
          <Factory size={42} strokeWidth={1.6} />
        )}
      </div>

      <span className="category-project-label">
        {isFYP
          ? "ACADEMIC PROJECT"
          : "PROFESSIONAL EXPERIENCE"}
      </span>

      <h3>
        {isFYP
          ? "Final Year Project"
          : "Industrial Internship"}
      </h3>

      <p>
        {isFYP
          ? "Explore my AI-based fruit ripeness detection, computer vision experiments and prototype development."
          : "Explore my practical work in the Digital Transformation Unit, including Industrial IoT, Grafana, InfluxDB, Node-RED and Raspberry Pi."}
      </p>

      <Link
        href={`/projects/${project.slug}`}
        className="category-project-link"
      >
        View Projects
        <ArrowUpRight size={18} />
      </Link>
    </article>
  );
}
