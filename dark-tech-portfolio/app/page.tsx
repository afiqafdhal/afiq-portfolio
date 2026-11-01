
import Link from "next/link";
import Image from "next/image";
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

const technicalExperience = [
  "Industrial IoT monitoring and manufacturing digitalisation.",
  "Exposure to Python and Node-RED applications.",
  "Sensor systems, basic electronics and device connectivity.",
  "Production monitoring and engineering troubleshooting.",
];

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse" />
            MECHATRONICS • AUTOMATION • INDUSTRY 4.0
          </div>

          <p className="hero-pre">
            HELLO, I’M {profile.name.toUpperCase()}
          </p>

          <div className="profile-photo-wrapper">
            <Image
              src="/images/profile/me.jpg"
              alt={`${profile.name} profile photo`}
              width={160}
              height={160}
              className="profile-photo"
              priority
            />
          </div>

          <h1>
            I connect{" "}
            <span className="gradient-text">
              engineering, sensors
            </span>{" "}
            and automation
            <span className="period">.</span>
          </h1>

          <p className="hero-positioning">
            {profile.positioning}
          </p>

          <p className="hero-description">
            {profile.description}
          </p>

          <div className="hero-actions">
            <Link href="/projects" className="primary-btn">
              Explore case studies
              <ArrowUpRight size={18} />
            </Link>

            {profile.resumeAvailable ? (
              <a
                href={profile.resume}
                download
                className="secondary-btn"
              >
                Download résumé
                <Download size={18} />
              </a>
            ) : (
              <Link
                href="/#experience"
                className="secondary-btn"
              >
                View experience
                <ArrowRight size={18} />
              </Link>
            )}

            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                title="Visit my LinkedIn profile"
                className="secondary-btn"
                style={{
                  width: "46px",
                  height: "46px",
                  padding: 0,
                  justifyContent: "center",
                }}
              >
                <Linkedin size={22} />
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
              Explore my approach
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />

          <div className="dashboard-float">
            <span className="float-icon">
              <Cpu size={18} />
            </span>{" "}
            Industrial monitoring{" "}
            <span className="float-indicator">
              CONCEPT
            </span>
          </div>

          <MonitorVisual />

          <div className="hero-grid-notes">
            <span>
              ILLUSTRATIVE DASHBOARD · NOT LIVE DATA
            </span>
            <span>EDGE → DATA → INSIGHT</span>
          </div>
        </div>
      </section>

      {/* RECRUITER OVERVIEW */}
      <section
        className="container recruiter-overview"
        aria-label="Engineering profile overview"
      >
        <div className="recruiter-intro">
          <div className="recruiter-intro-top">
            <span className="recruiter-kicker">
              <span className="recruiter-status-dot" />
              ENGINEERING PROFILE
            </span>

            <span className="recruiter-year">
              MECHATRONICS / INDUSTRY 4.0
            </span>
          </div>

          <h2>
            Engineering ideas into{" "}
            <span className="gradient-text">
              practical systems.
            </span>
          </h2>

          <p className="recruiter-intro-text">
            I am a Mechatronics Engineering student at
            Universiti Teknologi MARA (UiTM), developing
            practical skills in industrial automation,
            embedded systems, IoT monitoring and
            programming.
          </p>

          <p className="recruiter-intro-text">
            Through industrial training in the Digital
            Transformation Unit and academic engineering
            projects, I have gained exposure to
            manufacturing systems, data monitoring,
            technical troubleshooting and AI applications.
          </p>

          <div className="recruiter-focus">
            <span>MECHATRONICS</span>
            <span>INDUSTRIAL IoT</span>
            <span>PYTHON</span>
            <span>AUTOMATION</span>
          </div>

          <div className="recruiter-links">
            <Link
              href="/projects"
              className="primary-btn"
            >
              Explore My Projects
              <ArrowUpRight size={17} />
            </Link>

            <Link
              href="/#experience"
              className="secondary-btn"
            >
              View Experience
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        <div className="recruiter-strengths">
          <article className="recruiter-strength-card">
            <div className="recruiter-strength-top">
              <div className="recruiter-strength-icon">
                <CircuitBoard size={23} />
              </div>
              <span>01 /</span>
            </div>

            <h3>Hardware & Automation</h3>

            <p>
              Understanding sensor integration,
              electronics, Raspberry Pi and
              mechatronic system prototyping.
            </p>

            <div className="recruiter-strength-tags">
              <span>Sensors</span>
              <span>Raspberry Pi</span>
              <span>Electronics</span>
            </div>
          </article>

          <article className="recruiter-strength-card">
            <div className="recruiter-strength-top">
              <div className="recruiter-strength-icon">
                <Code2 size={23} />
              </div>
              <span>02 /</span>
            </div>

            <h3>Programming & Applied AI</h3>

            <p>
              Applying programming and computer vision
              concepts to engineering projects and
              experimental systems.
            </p>

            <div className="recruiter-strength-tags">
              <span>Python</span>
              <span>OpenCV</span>
              <span>YOLOv8</span>
            </div>
          </article>

          <article className="recruiter-strength-card">
            <div className="recruiter-strength-top">
              <div className="recruiter-strength-icon">
                <Network size={23} />
              </div>
              <span>03 /</span>
            </div>

            <h3>Industrial IoT & Data</h3>

            <p>
              Exposure to manufacturing monitoring,
              device communication and data
              visualisation systems.
            </p>

            <div className="recruiter-strength-tags">
              <span>Node-RED</span>
              <span>MQTT</span>
              <span>Grafana</span>
            </div>
          </article>
        </div>

        <div className="recruiter-bottom-note">
          <span>
            <MapPin size={15} />
            Based in {profile.location}
          </span>

          <Link href="/#contact">
            Connect with me
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="strip">
        <div className="container strip-content">
          <span>FOCUS AREAS</span>

          <div>
            <span>
              <CircuitBoard size={18} />
              MECHATRONICS
            </span>
            <span>
              <Code2 size={18} />
              PROGRAMMING
            </span>
            <span>
              <Cpu size={18} />
              AUTOMATION
            </span>
          </div>
        </div>
      </section>

      {/* =================================
          ABOUT ME - REDESIGNED
          ================================= */}
      <section className="section container" id="about">
        <div className="section-label">
          <span>01 / ABOUT ME</span>
          <div className="line" />
        </div>

        <div className="about-grid about-redesign">
          {/* LEFT - INTRODUCTION */}
          <div className="about-introduction">
            <div className="about-kicker">
              <span className="pulse" />
              MECHATRONICS ENGINEERING
            </div>

            <h2>
              Turning engineering ideas into{" "}
              <span className="gradient-text">
                real-world solutions.
              </span>
            </h2>

            <p className="section-description">
              I am a Mechatronics Engineering student at
              Universiti Teknologi MARA (UiTM), passionate
              about connecting hardware, software, and
              industrial automation to develop practical
              engineering solutions.
            </p>

            <p className="section-description">
              Through industrial training at Sugihara
              Grand Industries Sdn Bhd, I have gained
              exposure to manufacturing digitalisation,
              industrial monitoring, programming,
              and real-world engineering workflows.
            </p>

            <p className="section-description">
              My academic projects also explore AI-based
              fruit ripeness detection, computer vision,
              and automated sorting, allowing me to apply
              engineering concepts through prototyping,
              testing, and continuous improvement.
            </p>

            <div className="about-actions">
              <Link
                href="/#experience"
                className="secondary-btn"
              >
                <BriefcaseBusiness size={18} />
                Explore My Experience
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          {/* RIGHT - ENGINEERING PROFILE CARDS */}
          <div className="about-feature-grid">
            {/* INDUSTRIAL EXPERIENCE */}
            <div className="about-feature-card about-feature-main">
              <div className="about-feature-icon">
                <BriefcaseBusiness size={24} />
              </div>

              <span className="about-feature-label">
                INDUSTRIAL EXPERIENCE
              </span>

              <h3>Manufacturing Digitalisation</h3>

              <p>
                Exposure to industrial IoT, production
                monitoring, Python, Node-RED, and
                manufacturing workflows through
                industrial training.
              </p>

              <Link
                href="/projects/manufacturing-digital-transformation"
                className="about-feature-link"
              >
                View Internship Projects
                <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* HARDWARE AND SOFTWARE */}
            <div className="about-feature-card">
              <div className="about-feature-icon">
                <CircuitBoard size={23} />
              </div>

              <h3>Hardware + Software</h3>

              <p>
                Connecting sensors, Raspberry Pi,
                programming, and electronics to
                develop and test engineering systems.
              </p>
            </div>

            {/* AI AND INNOVATION */}
            <div className="about-feature-card">
              <div className="about-feature-icon">
                <Cpu size={23} />
              </div>

              <h3>AI & Innovation</h3>

              <p>
                Exploring computer vision, intelligent
                detection, prototyping, and experimental
                testing through academic projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section
        className="section section-projects"
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
                Explore the challenge, my contribution,
                technical architecture, and verified
                project status.
              </p>
            </div>

            <Link
              className="text-link"
              href="/projects"
            >
              All projects
              <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className="projects-grid">
            {projects.map((p, i) => (
              <ProjectCard
                key={p.slug}
                project={p}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL EXPERTISE */}
      <section
        className="section container"
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
              Technical capabilities developed through
              academic projects, industrial training,
              and hands-on engineering system development.
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
              <div
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
              </div>
            );
          })}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        className="section container"
        id="experience"
      >
        <div className="section-label">
          <span>04 / EXPERIENCE</span>
          <div className="line" />
        </div>

        <div
          style={{
            background:
              "linear-gradient(145deg, #152a44 0%, #0e1c30 100%)",
            border: "1px solid #31506e",
            borderRadius: "18px",
            padding: "clamp(24px, 4vw, 45px)",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "2px",
                fontWeight: 700,
                color: "#6cd8ee",
              }}
            >
              INDUSTRIAL TRAINING
            </span>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                background: "#1e4163",
                borderRadius: "12px",
                color: "#8acaff",
                flexShrink: 0,
              }}
            >
              <BriefcaseBusiness size={23} />
            </div>
          </div>

          <h2
            style={{
              fontSize: "clamp(27px, 4vw, 39px)",
              marginTop: "15px",
              marginBottom: "12px",
              lineHeight: 1.2,
            }}
          >
            Digital Transformation{" "}
            <span className="gradient-text">
              Unit.
            </span>
          </h2>

          <h3
            style={{
              color: "#dceafa",
              fontSize: "16px",
              fontWeight: 600,
              marginBottom: "12px",
            }}
          >
            Sugihara Grand Industries Sdn Bhd
          </h3>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              color: "#a5c2de",
              fontSize: "13px",
            }}
          >
            <MapPin size={15} />
            Port Klang, Malaysia
          </div>

          <div
            style={{
              height: "1px",
              background:
                "rgba(140,180,220,0.18)",
              margin: "28px 0",
            }}
          />

          <h3
            style={{
              fontSize: "17px",
              fontWeight: 700,
              marginBottom: "18px",
              color: "#f1f7ff",
            }}
          >
            Technical Exposure & Experience
          </h3>

          <div
            style={{
              display: "grid",
              gap: "15px",
            }}
          >
            {technicalExperience.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  color: "#c7d9ed",
                  fontSize: "14px",
                  lineHeight: 1.8,
                }}
              >
                <CheckCircle2
                  size={18}
                  color="#64bbf6"
                  style={{
                    flexShrink: 0,
                    marginTop: "4px",
                  }}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div
            className="tag-row"
            style={{
              marginTop: "28px",
              marginBottom: "28px",
            }}
          >
            <span>Python</span>
            <span>Node-RED</span>
            <span>Industrial IoT</span>
            <span>Automation</span>
            <span>Manufacturing</span>
          </div>

          <Link
            href="/projects/manufacturing-digital-transformation"
            className="secondary-btn"
            style={{
              display: "inline-flex",
              justifyContent: "center",
              gap: "10px",
              maxWidth: "100%",
              textAlign: "center",
            }}
          >
            <Workflow size={18} />
            Explore Internship Projects
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section
        className="section container"
        id="contact"
      >
        <div className="contact-block">
          <span className="eyebrow">
            <span className="pulse" />
            OPEN TO ENGINEERING OPPORTUNITIES
          </span>

          <h2>
            Let's build the future of{" "}
            <span className="gradient-text">
              engineering.
            </span>
          </h2>

          <p>
            I'm seeking full-time opportunities in
            Mechatronics, Industrial Automation, IoT and
            Manufacturing Technology. With hands-on
            exposure to engineering projects, programming
            and manufacturing digitalisation, I'm eager
            to contribute to innovative engineering teams
            and develop practical technical solutions.
          </p>

          <div
            className="contact-actions"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              marginTop: "28px",
            }}
          >
            {profile.email ? (
              <a
                href={`mailto:${profile.email}`}
                className="primary-btn"
              >
                <Mail size={18} />
                Email Me
              </a>
            ) : (
              <span className="contact-note">
                Add your email in{" "}
                <code>data/site.ts</code>{" "}
                to enable contact.
              </span>
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
                Download Resume
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

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              marginTop: "30px",
              paddingTop: "20px",
              borderTop:
                "1px solid rgba(120,160,200,0.18)",
              color: "#9bb5d0",
              fontSize: "13px",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <MapPin size={15} />
              Based in {profile.location}
            </span>

            <span aria-hidden="true">•</span>
            <span>Mechatronics & Automation</span>
          </div>

          {!profile.resumeAvailable && (
            <p
              className="resume-note"
              style={{ marginTop: "18px" }}
            >
              <Download size={15} />
              Résumé will be available after
              uploading the PDF and enabling it in{" "}
              <code>data/site.ts</code>.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
