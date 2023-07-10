import ReactFullpage from "@fullpage/react-fullpage";
import React, { FC, useEffect, useRef } from "react";
import { useLandingPage } from "../hooks";
import { Section } from "../typings";
import { EmptySection } from "./EmptySection";

export const LandingPage: FC = () => {
  const sections = useLandingPage();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // TODO: Fix this any
  const fullpageApiRef = useRef<any>(null);

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
      !Object.values(Section).includes(window.location.hash.replace("#", "") as Section)
    ) {
      window.location.hash = "#welcome";
    }
  }, []);

  return (
    <ReactFullpage
      licenseKey="gplv3-license"
      credits={{ enabled: false }}
      anchors={Object.values(Section)}
      scrollingSpeed={1000}
      render={({ fullpageApi }) => {
        fullpageApiRef.current = fullpageApi;

        return (
          <ReactFullpage.Wrapper>
            {sections.map((section, index) => (
              <div className="section" key={index} style={{ padding: "0 3%" }}>
                <EmptySection sectionSpec={section} onClick={() => fullpageApi.moveSectionDown()} />
              </div>
            ))}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
