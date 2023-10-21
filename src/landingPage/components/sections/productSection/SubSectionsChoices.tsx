import React, { Dispatch, FC, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

import { HighlightText } from "@/core";
import { TypographyVariants } from "@/theme";
import styled from "@emotion/styled";
import { Typography, useTheme } from "@mui/material";

import { ProductSubSections } from "../../../typings";

const SubSectionChoiceTextTitle = styled(HighlightText)`
  padding: 100px 0;
`;

const SubSectionChoiceHorizontalSeparator = styled.div`
  width: 10%;
  height: 1px;
  margin: 10px 0;
`;

interface SubSectionChoiceElementProps {
  item: ProductSubSections;
  isSelected: boolean;
  setCurrentSubSection: Dispatch<SetStateAction<ProductSubSections>>;
}

const SubSectionChoiceElement: FC<SubSectionChoiceElementProps> = ({ item, isSelected, setCurrentSubSection }) => {
  const { t } = useTranslation("LandingPage");
  const theme = useTheme();

  const onClick = () => setCurrentSubSection(isSelected ? 0 : item);

  return (
    <div onClick={onClick} style={{ cursor: "pointer", userSelect: "none", padding: "10px 0" }}>
      <Typography
        variant={TypographyVariants.TITLE}
        style={{
          color: theme.app.landingPage.sections.product[isSelected ? "selected" : "notSelected"],
          padding: "10px 0",
        }}
      >
        {t(`product.subSections.${item}.number`)}
      </Typography>
      <SubSectionChoiceHorizontalSeparator
        style={{ backgroundColor: theme.app.landingPage.sections.product[isSelected ? "selected" : "notSelected"] }}
      />
      <SubSectionChoiceTextTitle
        textVariant={TypographyVariants.SUBTITLE}
        text={t(`product.subSections.${item}.title`)}
        highlightAllText={isSelected}
      />
    </div>
  );
};

const SubSectionChoicesWrapper = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
`;

interface SubSectionChoicesProps {
  currentSubSection: ProductSubSections;
  setCurrentSubSection: Dispatch<SetStateAction<ProductSubSections>>;
}

export const SubSectionChoices: FC<SubSectionChoicesProps> = ({ currentSubSection, setCurrentSubSection }) => {
  const { t } = useTranslation("LandingPage");
  const theme = useTheme();

  return (
    <SubSectionChoicesWrapper
      style={{ borderRight: `1px solid ${theme.app.landingPage.sections.product.notSelected}` }}
    >
      <Typography variant={TypographyVariants.TITLE}>{t("product.title")}</Typography>
      <Typography variant={TypographyVariants.SUBTITLE} style={{ padding: "20px 0 16px 0" }}>
        {t("product.subTitle")}
      </Typography>
      {[1, 2, 3].map((item: ProductSubSections) => (
        <SubSectionChoiceElement
          key={item}
          item={item}
          isSelected={currentSubSection === item}
          setCurrentSubSection={setCurrentSubSection}
        />
      ))}
    </SubSectionChoicesWrapper>
  );
};
