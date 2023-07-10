import React from "react";
import { useTranslation } from "react-i18next";
import { ProductSection, WelcomeSection } from "../components";
import { Section, SectionSpec } from "../typings";

export const useLandingPage = (): SectionSpec[] => {
  const { t } = useTranslation("LandingPage");

  const sections: SectionSpec[] = [
    {
      name: Section.WELCOME,
      sectionContent: <WelcomeSection />,
      nextSectionText: true,
    },
    {
      name: Section.PRODUCT,
      sectionContent: <ProductSection />,
      nextSectionText: true,
    },
    {
      name: Section.PRICING,
      sectionContent: <ProductSection />,
      nextSectionText: true,
    },
    {
      name: Section.ABOUT,
      sectionContent: <ProductSection />,
      nextSectionText: true,
    },
    {
      name: Section.CONTACT,
      sectionContent: <ProductSection />,
      nextSectionText: false,
    },
  ];
  return sections;
};
