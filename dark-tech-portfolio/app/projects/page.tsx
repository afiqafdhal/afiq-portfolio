
import Link from "next/link";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Images,
} from "lucide-react";

import { projects } from "@/data/site";
import { internshipWorks } from "@/data/internship-work";

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

export default async function ProjectGallery({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) notFound();

  const isFYP = slug === "rgb-color-sorting";
  const photos = getPhotos(slug);

  const heading = isFYP
    ? "Final Year Project"
    : "Industrial Internship";

  const description = isFYP
    ? "Explore my AI fruit ripeness detection project, model testing and Raspberry Pi development."
    : "Explore the industrial monitoring and digital transformation activities I worked with during my internship.";

  return (
    <main className="container gallery-page">
      <Link href="/projects" className="back-link">
        <ArrowLeft size={17} />
        All Projects
      </Link>

      <div className="case-eyebrow">
        PROJECT SHOWCASE / {project.year}
      </div>

      <h1 className="gallery-page-title">
        {heading}
        <span className="period">.</span>
      </h1>

      <p className="gallery-page-intro">
        {description}
      </p>

      <div className="gallery-page-label">
        <Images size={20} />
        {isFYP ? "FYP Gallery" : "Internship Projects"}
      </div>

      {isFYP ? (
        <>
          {photos.length > 0 ? (
            <div className="showcase-gallery-grid">
              {photos.map((photo, index) => (
                <article
                  className="showcase-gallery-card"
                  key={photo}
                >
                  <div className="showcase-gallery-image">
                    <Image
                      src={photo}
                      alt={`FYP documentation ${index + 1}`}
                      width={900}
                      height={600}
                      className="showcase-gallery-photo"
                    />
                  </div>

                  <div className="showcase-gallery-content">
                    <span className="showcase-gallery-number">
                      FYP DOCUMENTATION /{" "}
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>Fruit Ripeness Detection</h3>

                    <Link
                      href={`/projects/${slug}/details`}
                      className="showcase-gallery-details"
                    >
                      View Details
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="showcase-empty">
              <Images size={38} />
              <h2>No FYP pictures yet</h2>
              <p>
                Add your pictures to
                public/images/projects/fruit-detection.
              </p>
            </div>
          )}

          <div className="gallery-page-footer">
            <Link
              href={`/projects/${slug}/details`}
              className="primary-btn"
            >
              View Full FYP Case Study
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="showcase-gallery-grid">
            {internshipWorks.map((work, index) => {
              const photo = photos[work.photoIndex];

              return (
                <article
                  className="showcase-gallery-card"
                  key={work.slug}
                >
                  <div className="showcase-gallery-image">
                    {photo ? (
                      <Image
                        src={photo}
                        alt={work.title}
                        width={900}
                        height={600}
                        className="showcase-gallery-photo"
                      />
                    ) : (
                      <div className="showcase-empty">
                        <Images size={32} />
                        <p>Photo coming soon</p>
                      </div>
                    )}
                  </div>

                  <div className="showcase-gallery-content">
                    <span className="showcase-gallery-number">
                      PROJECT{" "}
                      {String(index + 1).padStart(2, "0")}
                      {" / "}
                      {work.category.toUpperCase()}
                    </span>

                    <h3>{work.title}</h3>

                    <p className="work-card-summary">
                      {work.summary}
                    </p>

                    <div className="work-card-tags">
                      {work.tools.slice(0, 3).map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${slug}/work/${work.slug}`}
                      className="showcase-gallery-details"
                    >
                      View Details
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="gallery-page-footer">
            <Link
              href={`/projects/${slug}/details`}
              className="text-link"
            >
              Internship Overview
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
