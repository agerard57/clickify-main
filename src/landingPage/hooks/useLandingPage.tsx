import React from "react";
import { ProductSection, WelcomeSection } from "../components";
import { Sections, SectionSpec } from "../typings";

export const useLandingPage = (): { sections: SectionSpec[] } => {
  const sections: SectionSpec[] = [
    {
      name: Sections.WELCOME,
      sectionContent: <WelcomeSection />,
      nextSectionText: true,
    },
    {
      name: Sections.PRODUCT,
      sectionContent: <ProductSection />,
      nextSectionText: true,
    },
    {
      name: Sections.PRICING,
      sectionContent: <ProductSection />,
      nextSectionText: true,
    },
    {
      name: Sections.ABOUT,
      sectionContent: <ProductSection />,
      nextSectionText: true,
    },
    {
      name: Sections.CONTACT,
      sectionContent: <ProductSection />,
      nextSectionText: false,
    },
  ];

  return { sections };
};
