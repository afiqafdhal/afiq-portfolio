
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CircuitBoard,
  Code2,
  Cpu,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  CheckCircle2,
  Workflow,
  Wrench,
  Network,
} from "lucide-react";

import { profile, projects, skills } from "@/data/site";
import { MonitorVisual } from "@/components/visuals";
import { ProjectCard } from "@/components/project-card";

// =====================================
// PORTFOLIO V2 DATA
// =====================================

const technologies = [
  "Python",
  "Raspberry Pi",
  "Node-RED",
  "MQTT",
  "InfluxDB",
  "Grafana",
];

const strengths = [
  {
    number: "01",
    icon: CircuitBoard,
    title: "Hardware & Automation",
    description:
      "Sensor integration, electronics, embedded devices and practical mechatronic system prototyping.",
    tags: ["Sensors", "Raspberry Pi", "Electronics"],
  },
  {
    number: "02",
    icon: Code2,
    title: "Programming & Applied AI",
    description:
      "Python programming, computer vision experiments, model testing and software integration.",
    tags: ["Python", "OpenCV", "YOLOv8"],
  },
  {
    number: "03",
    icon: Network,
    title: "Industrial IoT & Data",
    description:
      "Connected monitoring systems, device communication, industrial data and visualisation.",
    tags: ["Node-RED", "MQTT", "Grafana"],
  },
];

const experience = [
  "Industrial IoT monitoring and manufacturing digitalisation.",
  "Python and Node-RED applications for connected systems.",
  "Sensor systems, electronics and device connectivity.",
  "Production monitoring and technical troubleshooting.",
];

// =====================================
// HOMEPAGE
// =====================================

export default function Home() {
  return (
    <main className="portfolio-v2">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="hero container v2-hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse" />
            MECHATRONICS · AUTOMATION · INDUSTRIAL IoT
          </div>

          <p className="hero-pre">
            HELLO, I&apos;M {profile.name.toUpperCase()}
          </p>

          <div className="profile-photo-wrapper">
            <div
              className="hero-aa-avatar"
              role="img"
              aria-label="AA engineering portfolio logo"
            >
              <span>AA</span>
            </div>
          </div>

          <h1>
            Building connected{" "}
            <span className="gradient-text">
              engineering solutions
            </span>
            <span className="period">.</span>
          </h1>

          <p className="hero-positioning">
            Mechatronics Engineering · Automation · IoT
          </p>

          <p className="hero-description">
            Mechatronics Engineering student with practical
            industrial training experience in manufacturing
            digitalisation, connected monitoring systems,
            programming and applied computer vision.
          </p>

          <div className="hero-actions">
            <Link href="/projects" className="primary-btn">
              Explore Projects
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/#experience"
              className="secondary-btn"
            >
              View Experience
              <ArrowRight size={18} />
            </Link>

            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn hero-linkedin"
                aria-label="LinkedIn profile"
                title="LinkedIn profile"
              >
                <Linkedin size={20} />
              </a>
            )}
          </div>

          <div className="hero-bottom">
            <span>
              <MapPin size={15} />
              Based in {profile.location}
            </span>

            <a href="#about">
              <ArrowDown size={15} />
              Learn about my work
            </a>
          </div>
        </div>

        {/* INDUSTRIAL IoT DEMO */}

        <div className="hero-visual">
          <div className="visual-glow" />

          <div className="dashboard-float">
            <span className="float-icon">
              <Cpu size={18} />
            </span>

            <span>Industrial IoT Showcase</span>

            <span className="float-indicator">
              PROJECT DEMO
            </span>
          </div>

          <MonitorVisual />

          <div className="hero-grid-notes">
            <span>
              ILLUSTRATIVE DATA · NOT LIVE PRODUCTION
            </span>
            <span>EDGE → DATA → INSIGHT</span>
          </div>

          <div className="hero-showcase-tech">
            {technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>

          <Link
            href="/projects/manufacturing-digital-transformation/work/production-monitoring-dashboard"
            className="hero-showcase-link"
          >
            <span>
              <strong>
                Production Monitoring Dashboard
              </strong>

              <small>
                Explore the system architecture and
                my technical contributions
              </small>
            </span>

            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>

      {/* =====================================
          ENGINEERING PROFILE
      ===================================== */}

      <section
        className="container v2-profile"
        aria-label="Engineering profile"
      >
        <div className="v2-profile-top">
          <div>
            <p className="v2-kicker">
              ENGINEERING PROFILE
            </p>

            <h2>
              Engineering ideas into{" "}
              <span className="gradient-text">
                practical systems.
              </span>
            </h2>

            <p>
              Through academic projects and industrial
              training, I apply hardware, software and
              problem-solving skills to real engineering
              challenges.
            </p>
          </div>

          <Link
            href="/projects"
            className="text-link"
          >
            Explore my work
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="v2-strength-grid">
          {strengths.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="v2-strength-card"
              >
                <div className="v2-strength-top">
                  <span className="v2-icon-box">
                    <Icon size={23} />
                  </span>

                  <span className="v2-number">
                    {item.number} /
                  </span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="v2-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =====================================
          FOCUS AREAS - NO RECTANGULAR BOX
      ===================================== */}

      <div
        className="v2-focus"
        aria-label="Engineering focus areas"
      >
        <div className="container v2-focus-inner">
          <span className="v2-focus-label">
            FOCUS AREAS
          </span>

          <div className="v2-focus-items">
            <span>
              <CircuitBoard size={19} />
              MECHATRONICS
            </span>

            <span>
              <Code2 size={19} />
              PROGRAMMING
            </span>

            <span>
              <Cpu size={19} />
              AUTOMATION
            </span>
          </div>
        </div>
      </div>

      {/* =====================================
          ABOUT ME
      ===================================== */}

      <section
        className="section container v2-section"
        id="about"
      >
        <div className="section-label">
          <span>01 / ABOUT ME</span>
          <div className="line" />
        </div>

        <div className="v2-about">
          <div className="v2-about-copy">
            <p className="v2-kicker">
              MECHATRONICS ENGINEERING
            </p>

            <h2>
              Connecting hardware,
              software and{" "}
              <span className="gradient-text">
                innovation.
              </span>
            </h2>

            <p>
              I am a Mechatronics Engineering student at
              Universiti Teknologi MARA (UiTM), interested
              in automation, industrial technology,
              embedded systems and practical engineering
              problem-solving.
            </p>

            <p>
              My industrial training at Sugihara Grand
              Industries Sdn Bhd provided exposure to
              manufacturing digitalisation, production
              monitoring, device communication and
              engineering workflows.
            </p>

            <p>
              My academic projects include AI-based fruit
              ripeness detection and automated sorting,
              combining computer vision with physical
              system development.
            </p>

            <Link
              href="/#experience"
              className="secondary-btn"
            >
              <BriefcaseBusiness size={18} />
              Explore My Experience
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="v2-about-highlight">
            <div className="v2-highlight-icon">
              <BriefcaseBusiness size={26} />
            </div>

            <p className="v2-kicker">
              INDUSTRIAL EXPERIENCE
            </p>

            <h3>
              Manufacturing Digitalisation
            </h3>

            <p>
              Practical exposure to industrial IoT,
              Python, Node-RED, monitoring dashboards and
              manufacturing systems.
            </p>

            <div className="v2-highlight-divider" />

            <div className="v2-highlight-row">
              <CircuitBoard size={19} />
              <span>
                Hardware and software integration
              </span>
            </div>

            <div className="v2-highlight-row">
              <Cpu size={19} />
              <span>
                Computer vision and AI experiments
              </span>
            </div>

            <div className="v2-highlight-row">
              <Network size={19} />
              <span>
                Connected industrial monitoring
              </span>
            </div>

            <Link
              href="/projects/manufacturing-digital-transformation"
              className="text-link"
            >
              View Internship Projects
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================
          SELECTED PROJECTS
      ===================================== */}

      <section
        className="section section-projects v2-section v2-projects"
        id="projects"
      >
        <div className="container">
          <div className="section-label">
            <span>02 / SELECTED WORK</span>
            <div className="line" />
          </div>

          <div className="section-top">
            <div>
              <h2>
                Selected{" "}
                <span className="muted">
                  projects.
                </span>
              </h2>

              <p className="section-description">
                Practical engineering work involving
                industrial IoT, programming, automation
                and applied computer vision.
              </p>
            </div>

            <Link
              href="/projects"
              className="text-link"
            >
              All projects
              <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          TECHNICAL EXPERTISE
      ===================================== */}

      <section
        className="section container v2-section"
        id="expertise"
      >
        <div className="section-label">
          <span>03 / TECHNICAL EXPERTISE</span>
          <div className="line" />
        </div>

        <div className="section-top">
          <div>
            <h2>
              Tools of{" "}
              <span className="muted">
                the trade.
              </span>
            </h2>

            <p className="section-description">
              Technical skills developed through
              academic projects, hands-on prototyping
              and industrial training.
            </p>
          </div>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const SkillIcon = [
              CircuitBoard,
              Code2,
              Cpu,
              Wrench,
            ][index] ?? Cpu;

            return (
              <article
                className="skill-card"
                key={skill.title}
              >
                <div className="skill-top">
                  <div className="skill-icon-box">
                    <SkillIcon size={25} />
                  </div>

                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")} /
                  </span>
                </div>

                <h3 className="skill-title">
                  {skill.title}
                </h3>

                <div className="skill-list">
                  {skill.items.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =====================================
          INDUSTRIAL EXPERIENCE
      ===================================== */}

      <section
        className="section container v2-section"
        id="experience"
      >
        <div className="section-label">
          <span>04 / EXPERIENCE</span>
          <div className="line" />
        </div>

        <div className="v2-experience">
          <div className="v2-experience-header">
            <div>
              <p className="v2-kicker">
                INDUSTRIAL TRAINING
              </p>

              <h2>
                Digital Transformation{" "}
                <span className="gradient-text">
                  Unit.
                </span>
              </h2>

              <h3>
                Sugihara Grand Industries Sdn Bhd
              </h3>

              <p className="v2-location">
                <MapPin size={16} />
                Port Klang, Malaysia
              </p>
            </div>

            <div className="v2-icon-box">
              <BriefcaseBusiness size={25} />
            </div>
          </div>

          <div className="v2-experience-divider" />

          <h3 className="v2-experience-subtitle">
            Technical Exposure & Experience
          </h3>

          <div className="v2-experience-list">
            {experience.map((item) => (
              <div key={item}>
                <CheckCircle2 size={19} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="v2-tags v2-experience-tags">
            {[
              "Python",
              "Node-RED",
              "Industrial IoT",
              "Automation",
              "Manufacturing",
            ].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <Link
            href="/projects/manufacturing-digital-transformation"
            className="secondary-btn"
          >
            <Workflow size={18} />
            Explore Internship Projects
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* =====================================
          CONTACT
      ===================================== */}

      <section
        className="section container v2-section"
        id="contact"
      >
        <div className="contact-block v2-contact">
          <span className="eyebrow">
            <span className="pulse" />
            OPEN TO ENGINEERING OPPORTUNITIES
          </span>

          <h2>
            Let&apos;s build the future of{" "}
            <span className="gradient-text">
              engineering.
            </span>
          </h2>

          <p>
            I&apos;m interested in full-time opportunities
            in Mechatronics, Industrial Automation,
            Industrial IoT and Manufacturing Technology.
            I welcome conversations about engineering
            roles and collaborative projects.
          </p>

          <div className="contact-actions v2-contact-actions">
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="primary-btn"
              >
                <Mail size={18} />
                Email Me
              </a>
            )}

            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            )}

            {profile.resumeAvailable && (
              <a
                href={profile.resume}
                download
                className="secondary-btn"
              >
                <Download size={18} />
                Download Résumé
              </a>
            )}

            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                <Github size={18} />
                GitHub
              </a>
            )}
          </div>

          <div className="v2-contact-footer">
            <span>
              <MapPin size={15} />
              {profile.location}
            </span>
            <span>Mechatronics & Automation</span>
          </div>
        </div>
      </section>
    </main>
  );
}
