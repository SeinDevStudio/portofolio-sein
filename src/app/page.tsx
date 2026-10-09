"use client";

import { useEffect } from "react";
import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "SeinDevTools Platform",
    tag: "WEB APP / DEV TOOLS",
    description:
      "Local developer utilities for JSON, UUIDs, encoders, and everyday browser work. The project keeps its processing close to the machine.",
    image: "/seindevtools.png",
    href: "https://github.com/SeinDevStudio/SeinDevTools",
  },
  {
    number: "02",
    title: "SeinDevStudio Platform",
    tag: "FULL-STACK / SERVICE PLATFORM",
    description:
      "A custom software engineering studio portal with a project estimation flow and a clear route into the studio's work.",
    image: "/seindevstudio.png",
    href: "https://github.com/SeinDevStudio/seindevstudio",
  },
  {
    number: "03",
    title: "Interactive Game Engine Logic",
    tag: "C++ / C# / LUA",
    description:
      "Core interaction rules, gameplay behaviours, and runtime scripting for interactive projects.",
  },
  {
    number: "04",
    title: "System Automation & Utilities",
    tag: "PYTHON / LUA",
    description:
      "Task-focused scripts and utilities for repeatable operations and local development work.",
  },
];

const tickerItems = [
  "SYSTEM LOGIC ///",
  "INTERACTIVE RUNTIME ///",
  "FULL-STACK ARCHITECTURE ///",
  "SECURE AUTOMATION ///",
];

const skills = [
  "C++",
  "C#",
  "LUA",
  "PYTHON",
  "JAVA",
  "PHP",
  "TYPESCRIPT",
  "HTML / CSS",
];

const process = [
  [
    "01",
    "Read the constraint",
    "Map the system boundary and the useful outcome.",
  ],
  [
    "02",
    "Shape the logic",
    "Make the data path and interaction rules explicit.",
  ],
  [
    "03",
    "Build the runtime",
    "Implement the interface and the underlying behaviour.",
  ],
  [
    "04",
    "Test the edges",
    "Check the handoff, the interaction, and the failure path.",
  ],
];

function ContactIcon({ type }: { type: "email" | "github" | "instagram" }) {
  if (type === "email") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        style={{ width: 14, height: 14, display: "block" }}
      >
        <rect x="3" y="5" width="18" height="14" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="currentColor"
        style={{ width: 14, height: 14, display: "block" }}
      >
        <path d="M12 2.4a9.6 9.6 0 0 0-3.04 18.71c.48.09.66-.21.66-.47v-1.86c-2.69.59-3.25-1.14-3.25-1.14-.44-1.12-1.08-1.42-1.08-1.42-.88-.6.07-.59.07-.59.98.07 1.49 1 1.49 1 .86 1.49 2.27 1.06 2.82.81.09-.63.34-1.06.62-1.3-2.15-.24-4.42-1.08-4.42-4.79 0-1.06.38-1.92 1-2.6-.1-.24-.43-1.23.1-2.57 0 0 .81-.26 2.65 1a9.15 9.15 0 0 1 4.82 0c1.84-1.26 2.65-1 2.65-1 .53 1.34.2 2.33.1 2.57.62.68 1 1.54 1 2.6 0 3.72-2.27 4.54-4.43 4.78.35.3.65.87.65 1.76v2.61c0 .26.17.56.66.47A9.6 9.6 0 0 0 12 2.4Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      style={{ width: 14, height: 14, display: "block" }}
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Home() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".motion-reveal"),
    );

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    sections.forEach((section) => {
      section.classList.add("is-motion-ready");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="portfolio relative overflow-x-clip bg-[#060606] text-[#f3f3f3]">
      <div className="portfolio-grain" aria-hidden="true" />

      <section
        id="top"
        className="relative mx-auto min-h-[760px] max-w-[1720px] px-5 pb-14 pt-5 sm:px-8 md:px-12 lg:min-h-[840px] lg:px-16 xl:px-20"
      >
        <nav className="motion-intro motion-delay-1 relative z-20 flex items-start justify-between border-b border-white/[0.13] pb-5 font-mono text-[10px] uppercase tracking-[0.12em] sm:text-xs">
          <a href="#top" className="flex items-center gap-3 text-[#f3f3f3]">
            <span className="relative block h-7 w-7 overflow-hidden border border-white/25">
              <Image
                src="/logo.png"
                alt=""
                fill
                sizes="28px"
                className="object-cover opacity-90"
              />
            </span>
            <span className="leading-[1.25]">
              <span className="block text-[#e60026]">SEINDEVSTUDIO</span>
              <span className="block text-white/50">SYSTEMS ENGINEERING</span>
            </span>
          </a>
          <a
            href="#contact"
            className="flex min-h-11 items-center gap-3 text-right text-white transition-colors hover:text-[#e60026]"
          >
            <span>AVAILABLE FOR PROJECTS</span>
            <span
              className="text-xl leading-none text-[#e60026]"
              aria-hidden="true"
            >
              +
            </span>
          </a>
        </nav>

        <p
          className="hero-word pointer-events-none absolute left-1/2 top-[42%] whitespace-nowrap"
          aria-hidden="true"
        >
          SEINDEV
        </p>

        <div className="relative z-10 grid min-h-[650px] items-end gap-9 py-12 lg:grid-cols-12 lg:py-16">
          <div className="motion-intro motion-delay-2 relative z-10 order-2 lg:order-1 lg:col-span-4 lg:pb-9">
            <p className="signature mb-1 ml-1 text-4xl leading-none text-[#e60026] sm:text-5xl">
              Hello, I&apos;m
            </p>
            <h1 className="portfolio-display text-[clamp(3.1rem,5.4vw,6.7rem)] uppercase leading-[0.9] tracking-[-0.055em]">
              Muhammad
              <br />
              Husein
              <br />
              <span className="text-[#e60026]">Al Hafidz</span>
            </h1>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.13em] text-white/85 sm:text-xs">
              Software &amp; Interactive Systems Engineer
            </p>
            <p className="mt-6 max-w-sm text-sm leading-6 text-[#a1a1aa]">
              Saya mengerjakan core systems, web engineering, game logic, dan
              runtime scripting dengan fokus pada struktur yang bisa dipakai.
            </p>
            <p className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.11em] text-white/65">
              <span className="h-1.5 w-1.5 bg-[#e60026]" aria-hidden="true" />
              Bukittinggi, Indonesia
            </p>
            <a
              href="/cv-sein.pdf"
              download="cv-sein.pdf"
              className="mt-5 inline-flex min-h-11 items-center rounded-md border border-[#e60026] bg-[#e60026] px-4 font-mono text-[10px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#bd001f]"
            >
              Download CV
            </a>
          </div>

          <div className="relative z-0 order-1 mx-auto w-full max-w-[490px] self-end lg:order-2 lg:col-span-5 lg:max-w-none">
            <div className="motion-intro motion-delay-3 profile-stage relative mx-auto aspect-[3/4] max-w-[420px]">
              <Image
                src="/foto.png"
                alt="Muhammad Husein Al Hafidz"
                fill
                priority
                sizes="(max-width: 1024px) 88vw, 32vw"
                className="object-contain object-bottom grayscale contrast-125"
              />
            </div>
          </div>

          <aside className="motion-intro motion-delay-4 relative z-10 order-3 border-t border-white/[0.13] pt-5 lg:col-span-3 lg:ml-auto lg:mb-14 lg:max-w-xs lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-white/45">
              PRACTICE AREAS
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-5 text-[#d1d1d1]">
              {[
                "Core systems",
                "Web engineering",
                "Game logic and runtime scripting",
                "Local automation and developer utilities",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="text-lg leading-4 text-[#e60026]"
                    aria-hidden="true"
                  >
                    +
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section
        className="ticker-strip border-y border-[#e60026] bg-[#e60026] py-2.5 text-[#060606]"
        aria-label="Technical focus"
      >
        <div className="ticker-track flex w-max whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[0.16em] sm:text-xs">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map(
            (item, index) => (
              <span className="mr-8" key={item + index}>
                {item}
              </span>
            ),
          )}
        </div>
      </section>

      <section
        id="work"
        className="motion-reveal mx-auto max-w-[1720px] px-5 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28 xl:px-20"
      >
        <div className="flex items-end justify-between gap-6 border-b border-white/[0.13] pb-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#e60026]">
              SELECTED SYSTEMS / 01-04
            </p>
            <h2 className="portfolio-display mt-4 text-4xl uppercase leading-[0.92] tracking-[-0.055em] sm:text-6xl">
              Recent work
            </h2>
          </div>
          <p className="hidden max-w-40 text-right font-mono text-[10px] uppercase leading-4 tracking-[0.11em] text-white/40 sm:block">
            Live project previews and in-progress system categories.
          </p>
        </div>

        <div className="mt-8 grid gap-px bg-white/[0.13] md:grid-cols-2">
          {projects.map((project) => {
            const content = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-3xl leading-none tracking-[-0.1em] text-[#e60026]">
                    {project.number}
                  </span>
                  <span className="max-w-32 text-right font-mono text-[9px] uppercase leading-4 tracking-[0.1em] text-white/45">
                    {project.tag}
                  </span>
                </div>
                {project.image ? (
                  <div className="project-preview relative mt-8 aspect-[16/10] overflow-hidden border border-white/[0.12] bg-[#0b0b0b]">
                    <Image
                      src={project.image}
                      alt={project.title + " preview"}
                      fill
                      sizes="(max-width: 767px) 90vw, 46vw"
                      className="object-cover object-top transition duration-300 group-hover:scale-[1.025] group-hover:grayscale-0"
                    />
                  </div>
                ) : (
                  <div className="project-number relative mt-8 flex aspect-[16/10] items-center justify-center overflow-hidden border border-[#e60026]/40">
                    <span className="font-mono text-[clamp(6rem,13vw,11rem)] font-bold leading-none tracking-[-0.14em] text-[#e60026]/30">
                      {project.number}
                    </span>
                    <span className="absolute bottom-3 left-3 font-mono text-[9px] uppercase tracking-[0.13em] text-white/45">
                      IN DEVELOPMENT
                    </span>
                  </div>
                )}
                <div className="mt-5 border-t border-white/[0.13] pt-4">
                  <h3 className="portfolio-display text-2xl uppercase leading-[1] tracking-[-0.04em] text-white sm:text-[1.7rem]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-xs leading-5 text-[#a1a1aa]">
                    {project.description}
                  </p>
                  {project.href ? (
                    <span className="mt-5 inline-block font-mono text-[10px] uppercase tracking-[0.11em] text-[#e60026]">
                      Open GitHub repository
                    </span>
                  ) : null}
                </div>
              </>
            );

            return project.href ? (
              <a
                key={project.number}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="project-card group block bg-[#090909] p-5 transition-colors hover:bg-[#0d0d0d] sm:p-7"
                aria-label={"Open " + project.title + " on GitHub"}
              >
                {content}
              </a>
            ) : (
              <article
                key={project.number}
                className="project-card bg-[#090909] p-5 sm:p-7"
              >
                {content}
              </article>
            );
          })}
        </div>
      </section>

      <section className="motion-reveal border-y border-white/[0.13] bg-[#0a0a0a]">
        <div className="mx-auto grid max-w-[1720px] gap-px bg-white/[0.13] md:grid-cols-2">
          <section
            className="bg-[#0a0a0a] p-5 sm:p-8 lg:p-12 xl:p-16"
            aria-labelledby="matrix-heading"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#e60026]">
              TECHNICAL MATRIX
            </p>
            <h2
              id="matrix-heading"
              className="portfolio-display mt-5 text-4xl uppercase leading-[0.94] tracking-[-0.05em]"
            >
              Languages
              <br />
              in use
            </h2>
            <div className="mt-9 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-white/[0.16] px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-white/75"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="mt-8 max-w-sm text-sm leading-6 text-[#a1a1aa]">
              Systems, interactive runtime, web work, and object-oriented
              application development.
            </p>
          </section>

          <section
            className="bg-[#0a0a0a] p-5 sm:p-8 lg:p-12 xl:p-16"
            aria-labelledby="process-heading"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#e60026]">
              WORKING METHOD
            </p>
            <h2
              id="process-heading"
              className="portfolio-display mt-5 text-4xl uppercase leading-[0.94] tracking-[-0.05em]"
            >
              Build
              <br />
              with intent
            </h2>
            <ol className="mt-8 border-l border-[#e60026]/55">
              {process.map(([number, title, description]) => (
                <li key={number} className="relative pb-6 pl-6 last:pb-0">
                  <span
                    className="absolute -left-1 top-1 h-2 w-2 bg-[#e60026]"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[10px] text-[#e60026]">
                    {number}
                  </span>
                  <h3 className="mt-1 text-sm font-semibold uppercase tracking-wide text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#a1a1aa]">
                    {description}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <blockquote className="relative flex min-h-[390px] flex-col justify-between overflow-hidden bg-[#e60026] p-5 text-[#060606] sm:p-8 md:col-span-2 lg:p-12 xl:p-16">
            <span
              className="portfolio-display text-8xl leading-none"
              aria-hidden="true"
            >
              “
            </span>
            <p className="portfolio-display max-w-sm text-3xl uppercase leading-[0.92] tracking-[-0.045em] sm:text-4xl">
              Sistem yang baik bekerja sampai ke detail yang tidak terlihat.
            </p>
            <footer className="border-t border-[#060606]/30 pt-4">
              <p className="signature text-5xl leading-none">Sein</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em]">
                SOFTWARE &amp; INTERACTIVE SYSTEMS
              </p>
            </footer>
            <span
              className="quote-mark pointer-events-none absolute -bottom-10 -right-1 font-mono text-[15rem] font-bold leading-none text-[#060606]/10"
              aria-hidden="true"
            >
              01
            </span>
          </blockquote>
        </div>
      </section>

      <footer
        id="contact"
        className="mx-auto max-w-[1720px] px-5 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28 xl:px-20"
      >
        <div className="footer-grid motion-reveal border-t border-white/[0.13] pt-8">
          <div className="footer-copy">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#e60026]">
              COMM-LINK / OPEN FOR WORK
            </p>
            <h2 className="portfolio-display mt-5 text-[clamp(3.2rem,4.5vw,5.8rem)] uppercase leading-[0.9] tracking-[-0.06em]">
              Let&apos;s work
              <br />
              together
            </h2>
            <p className="mt-7 max-w-sm text-sm leading-6 text-[#a1a1aa]">
              Email is the direct route for software work, system questions, and
              studio enquiries.
            </p>
          </div>

          <div className="device-preview relative mx-auto w-full max-w-[480px]">
            <div className="device-screen relative aspect-[16/10] overflow-hidden border border-[#e60026] bg-[#0f0f0f] p-1">
              <div className="relative h-full overflow-hidden border border-white/[0.12]">
                <Image
                  src="/logoland.png"
                  alt="SeinDevStudio shown in a device preview"
                  fill
                  sizes="(max-width: 1024px) 90vw, 28vw"
                  className="object-cover object-top"
                />
                <span className="absolute left-3 top-3 bg-[#060606]/90 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-white/75">
                  SEINDEVSTUDIO / PREVIEW
                </span>
              </div>
            </div>
            <div className="device-base mx-auto h-3 w-[94%] border-x border-b border-white/[0.22] bg-[#161616]" />
            <p className="mt-4 flex justify-between font-mono text-[9px] uppercase tracking-[0.12em] text-white/40">
              <span>STUDIO DISPLAY</span>
              <span className="text-[#e60026]">01</span>
            </p>
          </div>
        </div>

        <nav
          className="portfolio-contact-icons"
          aria-label="Quick contact links"
        >
          <a
            href="mailto:seindevstudio@gmail.com"
            className="portfolio-contact-icon"
            aria-label="Email SeinDevStudio"
            style={{ width: 24, height: 24 }}
          >
            <ContactIcon type="email" />
          </a>
          <a
            href="https://github.com/SeinDevStudio"
            target="_blank"
            rel="noreferrer"
            className="portfolio-contact-icon"
            aria-label="GitHub SeinDevStudio"
            style={{ width: 24, height: 24 }}
          >
            <ContactIcon type="github" />
          </a>
          <a
            href="https://instagram.com/sein69___"
            target="_blank"
            rel="noreferrer"
            className="portfolio-contact-icon"
            aria-label="Instagram SeinDevStudio"
            style={{ width: 24, height: 24 }}
          >
            <ContactIcon type="instagram" />
          </a>
        </nav>

        <div className="mt-20 flex flex-wrap justify-between gap-4 border-t border-white/[0.13] pt-4 font-mono text-[9px] uppercase tracking-[0.12em] text-white/35">
          <span>© 2026 SEINDEVSTUDIO</span>
          <span>BUKITTINGGI, INDONESIA</span>
        </div>
      </footer>
    </main>
  );
}
