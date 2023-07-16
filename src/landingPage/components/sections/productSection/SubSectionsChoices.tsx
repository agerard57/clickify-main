import styled from "@emotion/styled";
import React, { Dispatch, FC, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { useTheme, Typography } from "@mui/material";
import { HighlightText } from "@/core";
import { TypographyVariants } from "@/theme";
import { ProductSubSections } from "../../../typings";

interface SubSectionChoiceElementProps {
  item: ProductSubSections;
  isSelected: boolean;
  setCurrentSubSection: Dispatch<SetStateAction<ProductSubSections>>;
}

const SubSectionChoiceElement: FC<SubSectionChoiceElementProps> = ({ item, isSelected, setCurrentSubSection }) => {
  const { t } = useTranslation("LandingPage");
  const theme = useTheme();

  const onClick = () => setCurrentSubSection(isSelected ? 0 : item);

  const SubSectionChoice = styled.div`
    cursor: pointer;
    user-select: none;
    padding: 10px 0;
  `;

  const SubSectionChoiceTextNumber = styled(Typography)`
    color: ${theme.app.landingPage.sections.product[isSelected ? "selected" : "notSelected"]};
    padding: 10px 0;
  `;

  const SubSectionChoiceTextTitle = styled(HighlightText)`
    padding: 100px 0;
  `;

  const SubSectionChoiceHorizontalSeparator = styled.div`
    width: 10%;
    height: 1px;
    margin: 10px 0;
    background-color: ${theme.app.landingPage.sections.product[isSelected ? "selected" : "notSelected"]};
  `;

  return (
    <SubSectionChoice onClick={onClick}>
      <SubSectionChoiceTextNumber variant={TypographyVariants.TITLE}>
        {t(`product.subSections.${item}.number`)}
      </SubSectionChoiceTextNumber>
      <SubSectionChoiceHorizontalSeparator />
      <SubSectionChoiceTextTitle
        textVariant={TypographyVariants.SUBTITLE}
        text={t(`product.subSections.${item}.title`)}
        highlightAllText={isSelected}
      />
    </SubSectionChoice>
  );
};

interface SubSectionChoicesProps {
  currentSubSection: ProductSubSections;
  setCurrentSubSection: Dispatch<SetStateAction<ProductSubSections>>;
}

export const SubSectionChoices: FC<SubSectionChoicesProps> = ({ currentSubSection, setCurrentSubSection }) => {
  const { t } = useTranslation("LandingPage");
  const theme = useTheme();

  const SubSectionChoicesWrapper = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    border-right: 1px solid ${theme.app.landingPage.sections.product.notSelected};
  `;

  const SubSectionChoiceSubTitle = styled(Typography)`
    padding: 20px 0 16px 0;
  `;

  return (
    <SubSectionChoicesWrapper>
      <Typography variant={TypographyVariants.TITLE}>{t("product.title")}</Typography>
      <SubSectionChoiceSubTitle variant={TypographyVariants.SUBTITLE}>{t("product.subTitle")}</SubSectionChoiceSubTitle>
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
