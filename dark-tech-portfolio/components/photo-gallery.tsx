
import Image from "next/image";

const photos = [
  {
    src: "/images/gallery/photo1.jpg",
    title: "Engineering Project",
  },
  {
    src: "/images/gallery/photo2.jpg",
    title: "Automation System",
  },
  {
    src: "/images/gallery/photo3.jpg",
    title: "Project Development",
  },
];

export function PhotoGallery() {
  return (
    <section className="section container" id="gallery">
      <div className="section-label">
        <span>ENGINEERING GALLERY</span>
        <div className="line" />
      </div>

      <div className="section-top">
        <div>
          <h2>
            Behind the <span className="muted">projects.</span>
          </h2>
          <p className="section-description">
            A visual collection of my engineering projects.
          </p>
        </div>
      </div>

      <div className="engineering-gallery-grid">
        {photos.map((photo) => (
          <div className="engineering-gallery-card" key={photo.src}>
            <Image
              src={photo.src}
              alt={photo.title}
              width={800}
              height={600}
              className="engineering-gallery-image"
            />
            <div className="engineering-gallery-info">
              <h3>{photo.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
