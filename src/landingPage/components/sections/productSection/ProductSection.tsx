import React, { FC } from "react";

import styled from "@emotion/styled";

import { ProductSubSections } from "../../../typings";
import { SubSectionContents } from "./SubSectionContents";
import { SubSectionChoices } from "./SubSectionsChoices";

export const ProductSection: FC = () => {
  const [currentSubSection, setCurrentSubSection] = React.useState<ProductSubSections>(0);

  const ProductSectionWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 60vh;
  `;

  return (
    <ProductSectionWrapper>
      <SubSectionChoices currentSubSection={currentSubSection} setCurrentSubSection={setCurrentSubSection} />
      <SubSectionContents currentSubSection={currentSubSection} />
    </ProductSectionWrapper>
  );
};
