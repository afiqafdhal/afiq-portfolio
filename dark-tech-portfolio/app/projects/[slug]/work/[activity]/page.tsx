
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Wrench,
  Target,
  CheckCircle2,
  Workflow,
  Layers3,
  BriefcaseBusiness,
  MapPin,
} from "lucide-react";

import { internshipWorks } from "@/data/internship-work";

const INTERNSHIP_SLUG = "manufacturing-digital-transformation";

export function generateStaticParams() {
  return internshipWorks.map((work) => ({
    slug: INTERNSHIP_SLUG,
    activity: work.slug,
  }));
}

export const dynamicParams = false;

export default async function InternshipDetail({
  params,
}: {
  params: Promise<{
    slug: string;
    activity: string;
  }>;
}) {
  const { slug, activity } = await params;

  if (slug !== INTERNSHIP_SLUG) {
    notFound();
  }

  const work = internshipWorks.find(
    (item) => item.slug === activity
  );

  if (!work) {
    notFound();
  }

  return (
    <main className="container internship-page">

      {/* BACK NAVIGATION */}
      <Link
        href={`/projects/${INTERNSHIP_SLUG}`}
        className="internship-back"
      >
        <ArrowLeft size={17} />
        Back to Internship Projects
      </Link>

      {/* PROJECT HEADER */}
      <header className="internship-header">
        <div className="internship-eyebrow">
          <BriefcaseBusiness size={16} />
          DIGITAL TRANSFORMATION UNIT
        </div>

        <div className="internship-category">
          {work.category}
        </div>

        <h1 className="internship-title">
          {work.title}
          <span className="period">.</span>
        </h1>

        <p className="internship-lead">
          {work.summary}
        </p>

        <div className="internship-meta">
          <span>
            <MapPin size={15} />
            Port Klang, Malaysia
          </span>
          <span>
            <Layers3 size={15} />
            Industrial Training Project
          </span>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="internship-layout">

        <div className="internship-main">

          {/* PROBLEM */}
          <section className="internship-card">
            <div className="internship-card-heading">
              <div className="internship-icon">
                <Target size={21} />
              </div>

              <div>
                <span className="internship-number">
                  01 / CHALLENGE
                </span>
                <h2>The Problem</h2>
              </div>
            </div>

            <p>{work.problem}</p>
          </section>

          {/* SOLUTION */}
          <section className="internship-card">
            <div className="internship-card-heading">
              <div className="internship-icon">
                <Workflow size={21} />
              </div>

              <div>
                <span className="internship-number">
                  02 / APPROACH
                </span>
                <h2>Project Description</h2>
              </div>
            </div>

            <p>{work.solution}</p>
          </section>

          {/* CONTRIBUTIONS */}
          <section className="internship-card">
            <div className="internship-card-heading">
              <div className="internship-icon">
                <Wrench size={21} />
              </div>

              <div>
                <span className="internship-number">
                  03 / RESPONSIBILITIES
                </span>
                <h2>My Contributions</h2>
              </div>
            </div>

            <ul className="internship-contributions">
              {work.contribution.map((item, index) => (
                <li key={index}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* OUTCOME */}
          <section className="internship-card">
            <div className="internship-card-heading">
              <div className="internship-icon">
                <CheckCircle2 size={21} />
              </div>

              <div>
                <span className="internship-number">
                  04 / RESULTS
                </span>
                <h2>Outcome & Learning</h2>
              </div>
            </div>

            <p>{work.outcome}</p>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="internship-sidebar">

          {/* TECHNOLOGIES */}
          <div className="internship-side-card">
            <div className="internship-side-title">
              TOOLS & TECHNOLOGIES
            </div>

            <div className="internship-tags">
              {work.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>

          {/* ARCHITECTURE */}
          <div className="internship-side-card">
            <div className="internship-side-title">
              SYSTEM ARCHITECTURE
            </div>

            <div className="internship-architecture">
              {work.architecture.map((step, index) => (
                <div
                  className="internship-arch-step"
                  key={index}
                >
                  <div className="internship-arch-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="internship-arch-text">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* BOTTOM NAVIGATION */}
      <div className="internship-footer">
        <div>
          <span className="internship-number">
            ENGINEERING PORTFOLIO
          </span>
          <h2>Explore more of my work.</h2>
        </div>

        <Link href="/projects" className="primary-btn">
          All Projects
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </main>
  );
}
