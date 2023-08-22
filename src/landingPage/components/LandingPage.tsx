import React, { FC } from "react";

import ReactFullpage from "@fullpage/react-fullpage";

import { useLandingPage } from "../hooks";
import { Sections } from "../typings";
import { EmptySection } from "./EmptySection";

export const LandingPage: FC = () => {
  const { sections, fullpageApiRef } = useLandingPage();

  return (
    <ReactFullpage
      licenseKey="gplv3-license"
      credits={{ enabled: false }}
      anchors={Object.values(Sections)}
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
