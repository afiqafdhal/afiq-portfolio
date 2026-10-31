
import Image from "next/image";

const projectPhotos: Record<
  string,
  { src: string; title: string; description: string }[]
> = {
  "rgb-color-sorting": [
    {
      src: "/images/projects/fruit-detection/detection.jpg",
      title: "YOLOv8n Fruit Detection",
      description:
        "Computer vision detection and fruit ripeness classification.",
    },
    {
      src: "/images/projects/fruit-detection/raspberry-pi.jpg",
      title: "Raspberry Pi Integration",
      description:
        "Edge computing platform for camera-based AI inference.",
    },
    {
      src: "/images/projects/fruit-detection/prototype.jpg",
      title: "System Prototype",
      description:
        "Hardware development, integration and prototype testing.",
    },
  ],

  "manufacturing-digital-transformation": [
    {
      src: "/images/projects/industrial/automation.jpg",
      title: "Industrial Automation",
      description:
        "Automation devices and manufacturing technology.",
    },
    {
      src: "/images/projects/industrial/dashboard.jpg",
      title: "Digital Monitoring",
      description:
        "Industrial monitoring dashboard and data visualization.",
    },
    {
      src: "/images/projects/industrial/hardware.jpg",
      title: "Hardware Integration",
      description:
        "IoT devices, sensors and edge computing systems.",
    },
  ],
};

type ProjectPhotosProps = {
  slug: string;
};

export function ProjectPhotos({ slug }: ProjectPhotosProps) {
  const photos = projectPhotos[slug] ?? [];

  if (photos.length === 0) {
    return null;
  }

  return (
    <section className="project-photo-section">
      <div className="section-label">
        <span>PROJECT DOCUMENTATION</span>
        <div className="line" />
      </div>

      <h2 className="project-photo-heading">
        Project <span className="muted">photos.</span>
      </h2>

      <p className="project-photo-intro">
        A visual look at the hardware, development
        process and technical implementation.
      </p>

      <div className="project-photo-grid">
        {photos.map((photo) => (
          <article className="project-photo-card" key={photo.src}>
            <div className="project-photo-image-wrapper">
              <Image
                src={photo.src}
                alt={photo.title}
                width={900}
                height={600}
                className="project-photo-image"
              />
            </div>

            <div className="project-photo-details">
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
