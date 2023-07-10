import styled from "@emotion/styled";
import React, { Dispatch, FC, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { useTheme, Theme, Typography } from "@mui/material";
import { HighlightText } from "@/core";
import { TypographyVariants } from "@/theme";
import { productImages } from "../../assets";

type SubSections = 0 | 1 | 2 | 3;

const ProductSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const SubSectionChoiceWrapper = styled.div<{ theme: Theme }>`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  border-right: 1px solid ${(theme) => theme.theme.app.landingPage.sections.product.notSelected};
`;

const SubSectionChoiceSubTitle = styled(Typography)`
  padding: 20px 0 16px 0;
`;

const SubSectionContentWrapper = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  margin-left: 46px;
`;

const ParagraphWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 10px;
`;

const ParagraphText = styled(Typography)<{ isEven: boolean }>`
  order: ${({ isEven }) => (isEven ? 2 : 1)};
`;

const ParagraphImage = styled.img<{ isEven: boolean }>`
  height: 150px;
  order: ${({ isEven }) => (isEven ? 1 : 2)};
  padding-left: ${({ isEven }) => (isEven ? "0" : "50px")};
  padding-right: ${({ isEven }) => (isEven ? "50px" : "0")};
`;

const SubSectionChoiceElement: FC<{
  item: SubSections;
  isSelected: boolean;
  setCurrentSubSection: Dispatch<SetStateAction<SubSections>>;
}> = ({ item, isSelected, setCurrentSubSection }) => {
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

const UnselectedSubSectionChoice: FC = () => {
  const { t } = useTranslation("LandingPage");

  return (
    <SubSectionContentWrapper>
      {([1, 2, 3] as const).map((item) => {
        const isEven = item % 2 === 0;

        return (
          <ParagraphWrapper key={item}>
            <ParagraphText variant={TypographyVariants.PARAGRAPH} isEven={isEven}>
              {t(`product.subSections.0.content.${item}`)}
            </ParagraphText>
            <ParagraphImage src={productImages[0][item]} isEven={isEven} />
          </ParagraphWrapper>
        );
      })}
    </SubSectionContentWrapper>
  );
};

export const ProductSection: FC = () => {
  const { t } = useTranslation("LandingPage");
  const theme = useTheme();
  const [currentSubSection, setCurrentSubSection] = React.useState<SubSections>(0);

  return (
    <ProductSectionWrapper>
      <SubSectionChoiceWrapper theme={theme}>
        <Typography variant={TypographyVariants.TITLE}>{t("product.title")}</Typography>
        <SubSectionChoiceSubTitle variant={TypographyVariants.SUBTITLE}>
          {t("product.subTitle")}
        </SubSectionChoiceSubTitle>
        {[1, 2, 3].map((item: SubSections) => (
          <SubSectionChoiceElement
            key={item}
            item={item}
            isSelected={currentSubSection === item}
            setCurrentSubSection={setCurrentSubSection}
          />
        ))}
      </SubSectionChoiceWrapper>
      {currentSubSection === 0 && <UnselectedSubSectionChoice />}
    </ProductSectionWrapper>
  );
};
