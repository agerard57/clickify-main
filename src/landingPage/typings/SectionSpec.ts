import { Sections } from "./Sections";

export interface SectionSpec {
  name: Sections;
  sectionContent: JSX.Element;
  nextSectionText: boolean;
}
