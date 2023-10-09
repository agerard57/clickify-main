import React, { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { TypographyVariants } from "@/theme";
import styled from "@emotion/styled";
import { Typography, useTheme } from "@mui/material";

import { AuthImage } from "../../assets";
import { AuthPages } from "../../typings";
import { SwitchPageButtons } from "./SwitchPageButtons";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const ImageContainer = styled.div`
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AuthImg = styled.img`
  width: 250px;
  height: 250px;
  padding: 30px;
  border-radius: 12px;
  margin-top: 20px;
`;

interface AuthLayoutProps {
  children: ReactNode;
  currentlySelected: AuthPages;
}

export const AuthLayout: FC<AuthLayoutProps> = ({ children, currentlySelected }) => {
  const { t } = useTranslation("AuthPage");
  const theme = useTheme();

  return (
    <div style={{ margin: "0 10%", display: "grid", gap: 100 }}>
      <SwitchPageButtons currentlySelected={currentlySelected} />
      <GridContainer>
        <div style={{ gridArea: "1 / 1 / 2 / 2", display: "flex", flexDirection: "column", gap: 20 }}>{children}</div>
        <div style={{ gridArea: "1 / 2 / 2 / 3", justifySelf: "end" }}>
          <ImageContainer style={{ background: theme.app.auth.imageContainer.background }}>
            <Typography
              variant={TypographyVariants.SUBTITLE}
              style={{ color: theme.app.auth.imageContainer.textColor }}
            >
              {t(`${currentlySelected}.imageText`)}
            </Typography>
            <AuthImg
              src={AuthImage}
              alt="authImage"
              style={{ backgroundColor: theme.app.auth.imageContainer.imagePadding }}
            />
          </ImageContainer>
        </div>
      </GridContainer>
    </div>
  );
};
