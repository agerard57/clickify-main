import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import { TypographyVariants } from "@/theme";
import styled from "@emotion/styled";
import { Typography, useTheme } from "@mui/material";

import { AuthPages } from "../../typings";

const SwitchButtonContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s ease;
`;

interface SwitchPageButtonProps {
  page: AuthPages;
  currentlySelected: AuthPages;
}

export const SwitchPageButton: FC<SwitchPageButtonProps> = ({ page, currentlySelected }) => {
  const { t } = useTranslation("AuthPage");
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = () => {
    const queryParams = new URLSearchParams(location.search);
    const newPage = [AuthPages.LOGIN, AuthPages.SIGN_UP].includes(page) ? page : "signUp";

    queryParams.set("page", page);

    if (![AuthPages.LOGIN, AuthPages.SIGN_UP].includes(page)) {
      queryParams.set("page", "signUp");
    }

    navigate(`/auth?${queryParams.toString()}`);
  };

  return (
    <SwitchButtonContent
      onClick={handleButtonClick}
      style={{
        background:
          currentlySelected === page ? theme.app.auth.switchButton[page] : theme.app.auth.switchButton.unselected,
      }}
    >
      <Typography variant={TypographyVariants.SUBTITLE} style={{ color: theme.app.auth.switchButton.textColor }}>
        {t(`${page}.title`)}
      </Typography>
    </SwitchButtonContent>
  );
};
