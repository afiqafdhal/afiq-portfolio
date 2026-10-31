
import Link from "next/link";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  Images,
} from "lucide-react";

import { projects } from "@/data/site";
import { internshipWorks } from "@/data/internship-work";

// Project image folder configuration
const folders: Record<string, string> = {
  "rgb-color-sorting": "fruit-detection",
  "manufacturing-digital-transformation": "industrial",
};

// Automatically load project images
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

// Static routes for Cloudflare Pages
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Page metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  return {
    title: project
      ? `${project.title} | Project Gallery`
      : "Project Gallery",
    description: project?.summary,
  };
}

// Main project gallery
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
    notFound();
  }

  const photos = getPhotos(slug);
  const isFYP = slug === "rgb-color-sorting";

  const heading = isFYP
    ? "Final Year Project"
    : "Industrial Internship";

  const description = isFYP
    ? "Explore the development and testing of my AI-based fruit ripeness detection and automated sorting system."
    : "Explore the projects and technical activities I worked on during my internship in the Digital Transformation Unit.";

  const detailsUrl = `/projects/${slug}/details`;

  return (
    <main className="container gallery-page">
      {/* BACK BUTTON */}
      <Link href="/projects" className="back-link">
        <ArrowLeft size={17} />
        All Projects
      </Link>

      {/* PAGE HEADER */}
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

      {/* GALLERY HEADING */}
      <div className="gallery-page-label">
        <Images size={20} />
        {isFYP
          ? "FYP Project Gallery"
          : "Internship Projects"}
      </div>

      {/* FINAL YEAR PROJECT GALLERY */}
      {isFYP ? (
        <>
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
                      alt={`Fruit ripeness detection photo ${index + 1}`}
                      width={900}
                      height={600}
                      className="showcase-gallery-photo"
                    />
                  </div>

                  <div className="showcase-gallery-content">
                    <h3>
                      AI Fruit Ripeness Detection
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
              <h2>FYP photos coming soon</h2>
              <p>
                Add your pictures to the
                fruit-detection folder.
              </p>
            </div>
          )}
        </>
      ) : (
        /* INDUSTRIAL INTERNSHIP GALLERY */
        <div className="showcase-gallery-grid">
          {internshipWorks.map((work) => {
            const photo = photos[work.photoIndex];

            return (
              <article
                key={work.slug}
                className="showcase-gallery-card"
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
                      <Images size={34} />
                      <p>Photo coming soon</p>
                    </div>
                  )}
                </div>

                <div className="showcase-gallery-content">
                  <h3>{work.title}</h3>

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
      )}
    </main>
  );
}
