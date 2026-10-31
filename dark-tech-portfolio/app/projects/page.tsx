
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Wrench, Target, CheckCircle2 } from "lucide-react";
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
    <main className="container case-wrap">
      <Link
        href={`/projects/${INTERNSHIP_SLUG}`}
        className="back-link"
      >
        <ArrowLeft size={17} />
        Back to Internship Projects
      </Link>

      <div className="case-eyebrow">
        DIGITAL TRANSFORMATION UNIT / {work.category}
      </div>

      <h1 className="case-title">
        {work.title}
        <span className="period">.</span>
      </h1>

      <p className="case-lead">{work.summary}</p>

      <div className="case-content">
        <div>
          <section className="case-section">
            <h2>
              <Target size={20} />
              The Problem
            </h2>
            <p>{work.problem}</p>
          </section>

          <section className="case-section">
            <h2>Project Description</h2>
            <p>{work.solution}</p>
          </section>

          <section className="case-section">
            <h2>
              <Wrench size={20} />
              My Contributions
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
              Outcome
            </h2>
            <p>{work.outcome}</p>
          </section>
        </div>

        <aside className="case-side">
          <div className="side-title">
            TOOLS & TECHNOLOGIES
          </div>

          <div className="tag-row">
            {work.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>

          <div className="side-title" style={{ marginTop: 32 }}>
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
        </aside>
      </div>
    </main>
  );
}
