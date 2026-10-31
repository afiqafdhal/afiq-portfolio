
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Layers3,
  Target,
  Workflow,
} from "lucide-react";

import { projects } from "@/data/site";
import { ProjectIcon } from "@/components/visuals";
import { ProjectPhotos } from "@/components/project-photos";

// Generate static pages for every project
export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

// Generate metadata for each project page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const p = projects.find((x) => x.slug === slug);

  return {
    title: p?.title ?? "Project",
    description: p?.summary,
  };
}

// Individual project details page
export default async function Detail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const p = projects.find((x) => x.slug === slug);

  if (!p) {
    notFound();
  }

  return (
    <main className="container case-wrap">

      {/* BACK BUTTON */}
      <Link href="/projects" className="back-link">
        <ArrowLeft size={17} />
        All projects
      </Link>

      {/* PROJECT CATEGORY */}
      <div className="case-eyebrow">
        {p.category} <span>/</span> {p.year}
      </div>

      {/* PROJECT TITLE */}
      <h1 className="case-title">
        {p.title}
        <span className="period">.</span>
      </h1>

      {/* PROJECT DESCRIPTION */}
      <p className="case-lead">
        {p.summary}
      </p>

      {/* PROJECT STATUS AND ROLE */}
      <div className="case-facts">
        <div>
          <span>PROJECT STATUS</span>
          <strong>{p.status}</strong>
        </div>

        <div>
          <span>MY ROLE</span>
          <strong>{p.role}</strong>
        </div>
      </div>

      {/* TECHNOLOGIES */}
      <div className="tag-row case-tags">
        {p.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      {/* ORIGINAL PROJECT ARTWORK */}
      <div className={`case-art project-${p.icon}`}>
        <div className="case-art-circle">
          <ProjectIcon type={p.icon} size={75} />
        </div>

        <span>
          ENGINEERING CASE STUDY / {p.year}
        </span>
      </div>

      {/* TECHNICAL PROJECT DETAILS */}
      <div className="case-content">

        {/* LEFT SIDE: PROJECT DETAILS */}
        <div>

          {/* PROBLEM */}
          <div className="case-section">
            <h2>
              <Target size={20} />
              The problem
            </h2>

            <p>{p.context}</p>
          </div>

          {/* MY CONTRIBUTION */}
          <div className="case-section">
            <h2>
              <Workflow size={20} />
              What I built / worked on
            </h2>

            <ul>
              {p.contribution.map((c) => (
                <li key={c}>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* PROJECT OUTCOME */}
          <div className="case-section">
            <h2>
              <Layers3 size={20} />
              Outcome and status
            </h2>

            <p>{p.outcome}</p>

            {p.note && (
              <p className="case-note">
                {p.note}
              </p>
            )}
          </div>
        </div>

        {/* RIGHT SIDE: SYSTEM ARCHITECTURE */}
        <aside className="case-side">
          <div className="side-title">
            SYSTEM ARCHITECTURE
          </div>

          {p.architecture.map((a, i) => (
            <div className="arch-step" key={`${i}-${a}`}>
              <span>
                {String(i + 1).padStart(2, "0")}
              </span>

              {a}

              {i < p.architecture.length - 1 && (
                <i>↓</i>
              )}
            </div>
          ))}
        </aside>
      </div>

      {/* NEW PROJECT PHOTO SECTION */}
      <ProjectPhotos slug={p.slug} />

      {/* RETURN TO PROJECTS */}
      <Link
        href="/projects"
        className="text-link back-projects"
      >
        Explore other projects
        <ArrowRight size={19} />
      </Link>

    </main>
  );
}
