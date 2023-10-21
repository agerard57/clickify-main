import React, { FC, useState } from "react";

import { AboutSubSections } from "../../../typings";
import { SubSectionContents } from "./SubSectionContents";
import { SubSectionChoices } from "./SubSectionsChoices";

export const AboutSection: FC = () => {
  const [currentSubSection, setCurrentSubSection] = useState<AboutSubSections>(AboutSubSections.STORY);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "60vh", width: "100%" }}>
      <SubSectionChoices currentSubSection={currentSubSection} setCurrentSubSection={setCurrentSubSection} />
      <SubSectionContents currentSubSection={currentSubSection} />
    </div>
  );
};
