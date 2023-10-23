import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import { AuthPages } from "@/authPage";
import { useConstants } from "@/constants";
import { Sections } from "@/landingPage";
import { useLanguage } from "@/language";
import { Pages } from "@/router";
import { routes } from "@/router/Routes";
import { ButtonVariants } from "@/theme";
import { Languages } from "@clickify/clickify-common";
import styled from "@emotion/styled";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Toolbar, Tooltip, Typography, useTheme } from "@mui/material";

import { FullLogo } from "../assets";

const HeaderWrapper = styled(Toolbar)`
  position: fixed;
  width: -webkit-fill-available;
  z-index: 1;
  a {
    text-decoration: none;
  }
`;

const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 480px;
  margin: 0 auto;
`;

export const Navbar: FC = () => {
  const { t } = useTranslation("Core");
  const theme = useTheme();
  const location = useLocation();
  const language = useLanguage();

  const appConstants = useConstants();
  const route = routes[Pages.LANDING_PAGE];

  const [currentSection, setCurrentSection] = useState<Sections | null>(null);

  const onLanguageClick = () => language.change(language.language === Languages.EN ? Languages.FR : Languages.EN);

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      const { pathname } = location;

      setCurrentSection(pathname !== "/" ? null : (hash.replace("#", "") as Sections));
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <HeaderWrapper style={{ backgroundColor: theme.app.core.navbar.background }}>
        <Link to="/">
          <img src={FullLogo} alt="logo" style={{ marginLeft: 20, width: 112, height: 24 }} />
        </Link>
        <NavBarWrapper>
          {route.sections.map((section: Sections) => (
            <Link reloadDocument key={section} to={`/#${section}`}>
              <Typography fontWeight={currentSection === section ? 700 : 500}>{t(`sections.${section}`)}</Typography>
            </Link>
          ))}
        </NavBarWrapper>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginRight: 20 }}>
          <Link to={{ pathname: Pages.AUTH, search: `page=${AuthPages.SIGN_UP}` }}>
            <Button variant={ButtonVariants.TEXT}>{t("loginButtons.signUp")}</Button>
          </Link>
          <Link to={{ pathname: Pages.AUTH, search: `page=${AuthPages.LOGIN} ` }}>
            <Button variant={ButtonVariants.PRIMARY}>{t("loginButtons.login")}</Button>
          </Link>
          <Button variant={ButtonVariants.TEXT}>
            <FontAwesomeIcon icon={faBook} />
          </Button>
          <Tooltip title={t("languages.switch")} arrow placement="bottom-start">
            <Button variant={ButtonVariants.TEXT} onClick={onLanguageClick}>
              {t("languages.current")}
            </Button>
          </Tooltip>
        </div>
      </HeaderWrapper>
    </>
  );
};
