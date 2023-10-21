import React, { FC, useState } from "react";

import styled from "@emotion/styled";

import { ProductSubSections } from "../../../typings";
import { SubSectionContents } from "./SubSectionContents";
import { SubSectionChoices } from "./SubSectionsChoices";

const ProductSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 60vh;
`;

export const ProductSection: FC = () => {
  const [currentSubSection, setCurrentSubSection] = useState<ProductSubSections>(0);

  return (
    <ProductSectionWrapper>
      <SubSectionChoices currentSubSection={currentSubSection} setCurrentSubSection={setCurrentSubSection} />
      <SubSectionContents currentSubSection={currentSubSection} />
    </ProductSectionWrapper>
  );
};
