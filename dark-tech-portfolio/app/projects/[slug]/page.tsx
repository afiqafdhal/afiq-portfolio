
import Link from "next/link";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import {
  ArrowLeft,
  ArrowUpRight,
  Images,
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

  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((file) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(file)
    )
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
      })
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

  if (!project) {
    return (
      <main className="container page-wrap">
        <h1>Project not found</h1>
        <Link href="/projects">Back to projects</Link>
      </main>
    );
  }

  const photos = getPhotos(slug);
  const isFYP = slug === "rgb-color-sorting";

  const heading = isFYP
    ? "Final Year Project"
    : "Industrial Internship";

  const description = isFYP
    ? "Explore my fruit ripeness detection project, AI model testing, Raspberry Pi integration and prototype development."
    : "Explore my hands-on experience, monitoring systems, hardware integration and technical activities in the Digital Transformation Unit.";

  const detailsUrl = `/projects/${slug}/details`;

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
        Project Gallery
      </div>

      {photos.length > 0 ? (
        <div className="showcase-gallery-grid">
          {photos.map((photo, index) => (
            <article
              key={photo}
              className="showcase-gallery-card"
            >
              <div className="showcase-gallery-image">
                <Image
                  src={photo}
                  alt={`${heading} documentation ${index + 1}`}
                  width={900}
                  height={600}
                  className="showcase-gallery-photo"
                />
              </div>

              <div className="showcase-gallery-content">
                <span className="showcase-gallery-number">
                  PROJECT DOCUMENTATION /{" "}
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                  {isFYP
                    ? "FYP Development"
                    : "Internship Work"}
                </h3>

                <Link
                  href={detailsUrl}
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
          <h2>Project photos coming soon</h2>
          <p>
            Add pictures to this project's image folder
            to display them here automatically.
          </p>
        </div>
      )}

      <div className="gallery-page-footer">
        <Link
          href={detailsUrl}
          className="primary-btn"
        >
          View Full Project Description
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </main>
  );
}
