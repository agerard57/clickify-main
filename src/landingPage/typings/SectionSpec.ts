import { Section } from "./Section";

export interface SectionSpec {
  name: Section;
  sectionContent: JSX.Element;
  nextSectionText: boolean;
}
