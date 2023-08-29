import React, { MutableRefObject, useEffect, useRef } from "react";

import { fullpageApi as FullpageApi } from "@fullpage/react-fullpage";

import { AboutSection, ContactSection, PricingSection, ProductSection, WelcomeSection } from "../components";
import { Sections, SectionSpec } from "../typings";

interface UseLandingPage {
  sections: SectionSpec[];
  fullpageApiRef: MutableRefObject<FullpageApi>;
}

export const useLandingPage = (): UseLandingPage => {
  const fullpageApiRef = useRef<FullpageApi | null>(null);

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
      sectionContent: <PricingSection />,
      nextSectionText: true,
    },
    {
      name: Sections.ABOUT,
      sectionContent: <AboutSection />,
      nextSectionText: true,
    },
    {
      name: Sections.CONTACT,
      sectionContent: <ContactSection />,
      nextSectionText: false,
    },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      fullpageApiRef.current.moveTo(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    // Add case where if the hash is not in Section, then redirect to welcome
    // It ain't working that much tbh
    if (
      window.location.hash === "" ||
      !Object.values(Sections).includes(window.location.hash.replace("#", "") as Sections)
    ) {
      window.location.hash = `#${Sections.WELCOME}`;
    }
  }, []);

  return { sections, fullpageApiRef };
};
