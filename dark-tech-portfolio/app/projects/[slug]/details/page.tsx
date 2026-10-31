
import Link from "next/link";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  ArrowLeft,
  ArrowUpRight,
  Target,
  Workflow,
  Layers3,
  Wrench,
} from "lucide-react";

import { projects } from "@/data/site";

const folders: Record<string, string> = {
  "rgb-color-sorting": "fruit-detection",
  "manufacturing-digital-transformation": "industrial",
};

function getPhotos(slug: string): string[] {
  const folder = folders[slug];
  if (!folder) return [];

  const directory = path.join(
    process.cwd(),
    "public",
    "images",
    "projects",
    folder
  );

  if (!fs.existsSync(directory)) return [];

  return fs
    .readdirSync(directory)
    .filter((file) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(file)
    )
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true })
    )
    .map(
      (file) =>
        `/images/projects/${folder}/${encodeURIComponent(file)}`
    );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  return {
    title: project?.title ?? "Project Details",
    description: project?.summary,
  };
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const photos = getPhotos(slug);
  const cover = photos[0];

  return (
    <main className="container case-wrap">
      <Link
        href={`/projects/${slug}`}
        className="back-link"
      >
        <ArrowLeft size={17} />
        Back to Project Gallery
      </Link>

      <div className="case-eyebrow">
        {project.category} / {project.year}
      </div>

      <h1 className="case-title">
        {project.title}
        <span className="period">.</span>
      </h1>

      <p className="case-lead">
        {project.summary}
      </p>

      <div className="case-facts">
        <div>
          <span>PROJECT STATUS</span>
          <strong>{project.status}</strong>
        </div>

        <div>
          <span>MY ROLE</span>
          <strong>{project.role}</strong>
        </div>
      </div>

      <div className="tag-row case-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      {cover && (
        <div className="internship-cover">
          <Image
            src={cover}
            alt={`${project.title} cover`}
            width={1400}
            height={750}
            className="internship-cover-image"
            priority
          />
        </div>
      )}

      <div className="case-content">
        <div>
          <section className="case-section">
            <h2>
              <Target size={20} />
              The Problem
            </h2>
            <p>{project.context}</p>
          </section>

          <section className="case-section">
            <h2>
              <Workflow size={20} />
              What I Built / Worked On
            </h2>
            <ul>
              {project.contribution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="case-section">
            <h2>
              <Layers3 size={20} />
              Outcome and Status
            </h2>
            <p>{project.outcome}</p>
            {project.note && (
              <p className="case-note">
                {project.note}
              </p>
            )}
          </section>
        </div>

        <aside className="case-side">
          <div className="side-title">
            <Wrench size={16} />
            SYSTEM ARCHITECTURE
          </div>

          {project.architecture.map((step, index) => (
            <div
              className="arch-step"
              key={`${index}-${step}`}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>
              {step}
              {index < project.architecture.length - 1 && (
                <i>↓</i>
              )}
            </div>
          ))}
        </aside>
      </div>

      <Link
        href={`/projects/${slug}`}
        className="text-link back-projects"
      >
        Back to Project Gallery
        <ArrowUpRight size={18} />
      </Link>
    </main>
  );
}
