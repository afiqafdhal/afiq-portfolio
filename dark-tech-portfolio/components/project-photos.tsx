
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

type ProjectPhotosProps = {
  slug: string;
};

const projectFolders: Record<string, string> = {
  "rgb-color-sorting": "fruit-detection",
  "manufacturing-digital-transformation": "industrial",
};

export function ProjectPhotos({ slug }: ProjectPhotosProps) {
  const folder = projectFolders[slug];

  if (!folder) return null;

  const directory = path.join(
    process.cwd(),
    "public",
    "images",
    "projects",
    folder
  );

  if (!fs.existsSync(directory)) return null;

  const photos = fs
    .readdirSync(directory)
    .filter((file) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(file)
    )
    .sort((a, b) => a.localeCompare(b, undefined, {
      numeric: true,
    }));

  if (photos.length === 0) return null;

  return (
    <section className="project-photo-section">
      <div className="section-label">
        <span>PROJECT DOCUMENTATION</span>
        <div className="line" />
      </div>

      <h2 className="project-photo-heading">
        {slug === "manufacturing-digital-transformation"
          ? "My Internship Work"
          : "Project Photos"}
      </h2>

      <p className="project-photo-intro">
        {slug === "manufacturing-digital-transformation"
          ? "A collection of my hands-on experience, technical activities and projects during my internship in the Digital Transformation Unit."
          : "A visual collection of project development, testing and implementation."}
      </p>

      <div className="project-photo-grid">
        {photos.map((file, index) => (
          <article
            className="project-photo-card"
            key={file}
          >
            <div className="project-photo-image-wrapper">
              <Image
                src={`/images/projects/${folder}/${encodeURIComponent(file)}`}
                alt={`Project documentation photo ${index + 1}`}
                width={900}
                height={600}
                className="project-photo-image"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
