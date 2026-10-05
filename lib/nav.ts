import type { SectionId } from "@/lib/sections";

export type NavSectionId = Exclude<SectionId, "hero">;

export type NavItem =
  | { kind: "link"; label: string; href: string; navId: "home" | "blog" }
  | {
      kind: "section";
      label: string;
      sectionId: NavSectionId;
      navId: NavSectionId;
    };

export const NAV_ITEMS: NavItem[] = [
  { kind: "link", label: "Home", href: "/", navId: "home" },
  { kind: "section", label: "About", sectionId: "about", navId: "about" },
  {
    kind: "section",
    label: "Projects",
    sectionId: "projects",
    navId: "projects",
  },
  {
    kind: "section",
    label: "Experience",
    sectionId: "experience",
    navId: "experience",
  },
  { kind: "section", label: "Skills", sectionId: "skills", navId: "skills" },
  { kind: "link", label: "Blog", href: "/blog", navId: "blog" },
  { kind: "section", label: "Contact", sectionId: "contact", navId: "contact" },
];

export function sectionHref(sectionId: NavSectionId) {
  return `/#${sectionId}`;
}
