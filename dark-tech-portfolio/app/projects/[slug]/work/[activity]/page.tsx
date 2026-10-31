
import Link from "next/link";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Layers3,
  Wrench,
  Target,
  ArrowUpRight,
} from "lucide-react";

import { internshipWorks } from "@/data/internship-work";

const internshipSlug =
  "manufacturing-digital-transformation";

function getInternshipPhotos(): string[] {
  const directory = path.join(
    process.cwd(),
    "public",
    "images",
    "projects",
    "industrial"
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
        `/images/projects/industrial/${encodeURIComponent(file)}`
    );
}

export function generateStaticParams() {
  return internshipWorks.map((work) => ({
    slug: internshipSlug,
    activity: work.slug,
  }));
}

export default async function InternshipCaseStudy({
  params,
}: {
  params: Promise<{
    slug: string;
    activity: string;
  }>;
}) {
  const { slug, activity } = await params;

  if (slug !== internshipSlug) notFound();

  const work = internshipWorks.find(
    (item) => item.slug === activity
  );

  if (!work) notFound();

  const photos = getInternshipPhotos();
  const cover = photos[work.photoIndex];

  return (
    <main className="container work-detail-page">
      <Link
        href={`/projects/${internshipSlug}`}
        className="back-link"
      >
        <ArrowLeft size={17} />
        Back to Internship Projects
      </Link>

      <div className="case-eyebrow">
        DIGITAL TRANSFORMATION UNIT / {work.category}
      </div>

      <h1 className="work-detail-title">
        {work.title}
        <span className="period">.</span>
      </h1>

      <p className="work-detail-lead">
        {work.summary}
      </p>

      {cover && (
        <div className="internship-cover">
          <Image
            src={cover}
            alt={work.title}
            width={1400}
            height={750}
            className="internship-cover-image"
            priority
          />
          <div className="internship-cover-overlay">
            <span>INTERNSHIP PROJECT / 2026</span>
          </div>
        </div>
      )}

      <div className="work-detail-grid">
        <div>
          <section className="case-section">
            <h2>
              <Target size={20} />
              The Problem
            </h2>
            <p>{work.problem}</p>
          </section>

          <section className="case-section">
            <h2>
              <Layers3 size={20} />
              Project Overview
            </h2>
            <p>{work.solution}</p>
          </section>

          <section className="case-section">
            <h2>
              <Wrench size={20} />
              My Involvement
            </h2>

            <ul>
              {work.contribution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="case-section">
            <h2>
              <CheckCircle2 size={20} />
              Outcome and Learning
            </h2>
            <p>{work.outcome}</p>
          </section>
        </div>

        <aside className="work-detail-side">
          <div className="work-tools">
            <h3>TOOLS & TECHNOLOGIES</h3>

            <div className="work-tool-tags">
              {work.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>

          <div className="case-side">
            <div className="side-title">
              SYSTEM ARCHITECTURE
            </div>

            {work.architecture.map((step, index) => (
              <div className="arch-step" key={step}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step}

                {index < work.architecture.length - 1 && (
                  <i>↓</i>
                )}
              </div>
            ))}
          </div>
        </aside>
      </div>

      <Link
        href={`/projects/${internshipSlug}`}
        className="text-link"
      >
        Explore More Internship Projects
        <ArrowUpRight size={18} />
      </Link>
    </main>
  );
}
