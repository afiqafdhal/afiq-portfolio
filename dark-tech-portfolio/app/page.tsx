
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
  MoveUpRight,
} from "lucide-react";

import { profile, projects, skills } from "@/data/site";
import { MonitorVisual } from "@/components/visuals";
import { ProjectCard } from "@/components/project-card";
import { PhotoGallery } from "@/components/photo-gallery";

export default function Home() {
  return (
    <main>
      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse" /> MECHATRONICS • AUTOMATION • INDUSTRY 4.0
          </div>

          <p className="hero-pre">
            HELLO, I’M {profile.name.toUpperCase()}
          </p>

          {/* PROFILE PICTURE */}
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
            and automation<span className="period">.</span>
          </h1>

          <p className="hero-positioning">{profile.positioning}</p>
          <p className="hero-description">{profile.description}</p>

          <div className="hero-actions">
            <Link href="/projects" className="primary-btn">
              Explore case studies <ArrowUpRight size={18} />
            </Link>

            {profile.resumeAvailable ? (
              <a
                href={profile.resume}
                download
                className="secondary-btn"
              >
                Download résumé <Download size={18} />
              </a>
            ) : (
              <Link href="/#experience" className="secondary-btn">
                View experience <ArrowRight size={18} />
              </Link>
            )}
          </div>

          <div className="hero-bottom">
            <span>
              <MapPin size={15} /> Based in {profile.location}
            </span>
            <a href="#about">
              <ArrowDown size={15} /> Explore my approach
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
            <span className="float-indicator">CONCEPT</span>
          </div>

          <MonitorVisual />

          <div className="hero-grid-notes">
            <span>ILLUSTRATIVE DASHBOARD · NOT LIVE DATA</span>
            <span>EDGE → DATA → INSIGHT</span>
          </div>
        </div>
      </section>

      {/* RECRUITER OVERVIEW */}
      <section
        className="container recruiter-bento"
        aria-label="Recruiter overview"
      >
        <div className="recruiter-tile recruiter-feature">
          <span className="mini-label">ENGINEERING PROFILE</span>
          <h2>
            From engineering ideas to{" "}
            <span className="gradient-text">working systems.</span>
          </h2>
          <p>
            Exploring real-world engineering through an RGB
            sensor-based sorting FYP and manufacturing
            digitalisation internship.
          </p>
          <Link href="/projects" className="text-link">
            See engineering evidence <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="recruiter-tile">
          <CircuitBoard size={24} />
          <span className="mini-label">INDUSTRIAL SYSTEMS</span>
          <h3>Edge & connectivity</h3>
          <p>RGB sensing, basic electronics and automation principles.</p>
        </div>

        <div className="recruiter-tile">
          <Code2 size={24} />
          <span className="mini-label">SOFTWARE & DATA</span>
          <h3>Build and integrate</h3>
          <p>Python, JavaScript, Node-RED and practical applications.</p>
        </div>

        <div className="recruiter-tile">
          <Cpu size={24} />
          <span className="mini-label">APPLIED AI</span>
          <h3>Test on real hardware</h3>
          <p>Sensor-based classification and practical system prototyping.</p>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="strip">
        <div className="container strip-content">
          <span>FOCUS AREAS</span>
          <div>
            <span>
              <CircuitBoard size={18} /> MECHATRONICS
            </span>
            <span>
              <Code2 size={18} /> PROGRAMMING
            </span>
            <span>
              <Cpu size={18} /> AUTOMATION
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="section container" id="about">
        <div className="section-label">
          <span>01 / ABOUT ME</span>
          <div className="line" />
        </div>

        <div className="about-grid">
          <div>
            <h2>
              Technology that works{" "}
              <span className="muted">beyond the screen.</span>
            </h2>

            <p className="section-description">
              I am a Mechatronics Engineering student at
              Universiti Teknologi MARA (UiTM), interested in
              automation, sensor systems, IoT and Industry 4.0.
              My final-year project explores color sorting
              using RGB sensor detection.
            </p>

            <p className="section-description">
              Through my internship at Sugihara Grand Industries,
              I am gaining exposure to industrial digitalisation,
              programming, electronics, and real-world
              manufacturing workflows.
            </p>
          </div>

          <div className="bento-about">
            <div className="bento-tile big-tile">
              <div className="tile-icon">
                <BriefcaseBusiness size={23} />
              </div>
              <span>MY CURRENT FOCUS</span>
              <h3>Mechatronics & automation</h3>
              <p>
                Learning to translate engineering ideas into
                practical systems.
              </p>
            </div>

            <div className="bento-tile">
              <div className="tile-icon">
                <CircuitBoard size={22} />
              </div>
              <h3>Hardware × Software</h3>
              <p>Connecting edge devices and applications.</p>
            </div>

            <div className="bento-tile">
              <div className="tile-icon">
                <MoveUpRight size={22} />
              </div>
              <h3>Problem solver</h3>
              <p>Build, test, improve, repeat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="section section-projects" id="projects">
        <div className="container">
          <div className="section-label">
            <span>02 / SELECTED WORK</span>
            <div className="line" />
          </div>

          <div className="section-top">
            <div>
              <h2>
                Selected <span className="muted">projects.</span>
              </h2>
              <p className="section-description">
                Explore the challenge, my contribution,
                technical architecture, and verified project status.
              </p>
            </div>

            <Link className="text-link" href="/projects">
              All projects <ArrowUpRight size={19} />
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

      {/* NEW PHOTO GALLERY */}
      <PhotoGallery />

      {/* TECHNICAL EXPERTISE */}
      <section className="section container" id="expertise">
        <div className="section-label">
          <span>03 / TECHNICAL EXPERTISE</span>
          <div className="line" />
        </div>

        <div className="section-top">
          <div>
            <h2>
              Tools of <span className="muted">the trade.</span>
            </h2>
            <p className="section-description">
              Technical areas developed through academic study,
              FYP work and industrial training.
            </p>
          </div>
        </div>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <div className="skill-card" key={s.title}>
              <div className="skill-header">
                <span>0{i + 1} /</span>
                <h3>{s.title}</h3>
              </div>
              <div className="skill-list">
                {s.items.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section container" id="experience">
        <div className="section-label">
          <span>04 / EXPERIENCE</span>
          <div className="line" />
        </div>

        <div className="experience-box">
          <div className="experience-date">
            PROFESSIONAL EXPERIENCE
          </div>

          <div>
            <span className="eyebrow small">
              DIGITAL TRANSFORMATION UNIT
            </span>

            <h2>{profile.role}</h2>

            <p className="positioning-line">
              Mechatronics Engineering Student · Universiti
              Teknologi MARA (UiTM)
            </p>

            <h3>Sugihara Grand Industries Sdn Bhd</h3>

            <p>
              Attached to the Digital Transformation Unit at
              Sugihara Grand Industries Sdn. Bhd. in Port Klang.
              Learning about manufacturing digitalisation,
              automation, IoT, networking, Python, Node-RED,
              JavaScript and basic electronics.
            </p>

            <div className="tag-row">
              <span>Industrial IoT</span>
              <span>Python & Node-RED</span>
              <span>Automation</span>
              <span>Manufacturing</span>
            </div>
          </div>

          <div className="experience-icon">
            <BriefcaseBusiness size={27} />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section container" id="contact">
        <div className="contact-block">
          <span className="eyebrow">
            <span className="pulse" /> LET’S CONNECT
          </span>

          <h2>
            Let's build something{" "}
            <span className="gradient-text">meaningful.</span>
          </h2>

          <p>
            Interested in graduate engineering opportunities
            in mechatronics, automation, IoT and manufacturing
            technology. I welcome opportunities to learn,
            contribute and collaborate.
          </p>

          <div className="contact-actions">
            {profile.resumeAvailable && (
              <a
                href={profile.resume}
                download
                className="secondary-btn"
              >
                Download résumé <Download size={18} />
              </a>
            )}

            {profile.email ? (
              <a
                href={`mailto:${profile.email}`}
                className="primary-btn"
              >
                Email me <Mail size={18} />
              </a>
            ) : (
              <span className="contact-note">
                Add your email in <code>data/site.ts</code>{" "}
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
                LinkedIn <Linkedin size={18} />
              </a>
            )}

            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                GitHub <Github size={18} />
              </a>
            )}
          </div>

          {!profile.resumeAvailable && (
            <p className="resume-note">
              <Download size={15} /> Résumé link will appear
              here after adding your approved PDF and enabling
              it in <code>data/site.ts</code>.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
