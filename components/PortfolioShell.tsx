"use client";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { SectionAnchor } from "@/components/SectionAnchor";
import { SiteFooter } from "@/components/SiteFooter";
import { Skills } from "@/components/Skills";
import type { Portfolio } from "@/content/portfolio";

type Props = {
  data: Portfolio;
};

function PortfolioContent({ data }: Props) {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-text"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <SectionAnchor id="hero">
          <Hero site={data.site} />
        </SectionAnchor>
        <SectionAnchor id="about" className="py-20">
          <About about={data.about} location={data.site.location} />
        </SectionAnchor>
        <SectionAnchor id="projects" className="py-20">
          <Projects projects={data.projects} />
        </SectionAnchor>
        <SectionAnchor id="experience" className="py-20">
          <Experience experience={data.experience} />
        </SectionAnchor>
        <SectionAnchor id="skills" className="py-20">
          <Skills skills={data.skills} />
        </SectionAnchor>
        <SectionAnchor id="contact" className="py-20">
          <Contact site={data.site} />
        </SectionAnchor>
      </main>
      <SiteFooter location={data.site.location} />
    </>
  );
}

export function PortfolioShell({ data }: Props) {
  return <PortfolioContent data={data} />;
}
