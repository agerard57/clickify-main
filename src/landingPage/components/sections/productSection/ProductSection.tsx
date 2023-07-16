import styled from "@emotion/styled";
import React, { FC } from "react";
import { ProductSubSections } from "../../../typings";
import { SubSectionContent } from "./SubSectionContent";
import { SubSectionChoices } from "./SubSectionsChoices";

export const ProductSection: FC = () => {
  const [currentSubSection, setCurrentSubSection] = React.useState<ProductSubSections>(0);

  const ProductSectionWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  `;

  return (
    <ProductSectionWrapper>
      <SubSectionChoices currentSubSection={currentSubSection} setCurrentSubSection={setCurrentSubSection} />
      <SubSectionContent currentSubSection={currentSubSection} />
    </ProductSectionWrapper>
  );
};
