
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { projects } from "@/data/site";
import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <main>
      <section
        className="section container"
        style={{
          paddingTop: "80px",
          paddingBottom: "100px",
        }}
      >
        {/* BACK TO HOME */}
        <Link href="/" className="back-link">
          <ArrowLeft size={17} />
          Back to Home
        </Link>

        {/* SECTION HEADING */}
        <div
          className="section-label"
          style={{ marginTop: "40px" }}
        >
          <span>ENGINEERING PORTFOLIO / PROJECTS</span>
          <div className="line" />
        </div>

        <div
          className="section-top"
          style={{ marginBottom: "40px" }}
        >
          <div>
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 68px)",
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
                marginBottom: "20px",
              }}
            >
              Selected{" "}
              <span className="gradient-text">
                Projects.
              </span>
            </h1>

            <p
              className="section-description"
              style={{ maxWidth: "650px" }}
            >
              A collection of engineering projects covering
              mechatronics, industrial automation, IoT,
              programming, and manufacturing digitalisation.

              Explore the engineering challenges, technologies,
              implementation methods, and practical outcomes
              behind each project.
            </p>
          </div>
        </div>

        {/* PROJECT CARDS */}
        {projects.length > 0 ? (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div
            style={{
              padding: "40px 20px",
              border: "1px solid rgba(120,160,200,0.2)",
              borderRadius: "16px",
              textAlign: "center",
            }}
          >
            <h2>Projects coming soon.</h2>
            <p className="section-description">
              Engineering project documentation will be
              available here.
            </p>
          </div>
        )}

        {/* FOOTER NAVIGATION */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "60px",
          }}
        >
          <Link href="/#contact" className="primary-btn">
            Let's Connect
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
