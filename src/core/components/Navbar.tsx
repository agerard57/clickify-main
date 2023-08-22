import React, { FC, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import { ConstantsContext } from "@/constants";
import { Sections } from "@/landingPage";
import { LanguageCode, useLanguage } from "@/language";
import { Page } from "@/router";
import { ButtonVariants } from "@/theme";
import styled from "@emotion/styled";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Toolbar, Tooltip, Typography, useTheme } from "@mui/material";

import { FullLogo } from "../assets";

export const Navbar: FC = () => {
  const { t } = useTranslation("Core");
  const theme = useTheme();
  const location = useLocation();
  const language = useLanguage();

  const appConstants = useContext(ConstantsContext);
  const route = appConstants.routes[Page.LANDING_PAGE];

  const [currentSection, setCurrentSection] = useState<Sections | null>(null);

  const onLanguageClick = () =>
    language.change(language.language === LanguageCode.EN ? LanguageCode.FR : LanguageCode.EN);

  const HeaderWrapper = styled(Toolbar)`
    position: fixed;
    width: -webkit-fill-available;
    background-color: ${theme.app.core.navbar.background};
    z-index: 1;
    a {
      text-decoration: none;
    }
  `;

  const Logo = styled.img`
    margin-left: 20px;
    width: 112px;
    height: 24px;
  `;

  const NavBarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 480px;
    margin: 0 auto;
  `;

  const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 20px;
  `;

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      const { pathname } = location;
      // Also add types
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
      <HeaderWrapper>
        <Logo src={FullLogo} alt="logo" />
        <NavBarWrapper>
          {route.sections.map((section: Sections) => (
            <Link reloadDocument key={section} to={`/#${section}`}>
              <Typography fontWeight={currentSection === section ? 700 : 500}>{t(`sections.${section}`)}</Typography>
            </Link>
          ))}
        </NavBarWrapper>
        <ButtonsWrapper>
          <Button variant={ButtonVariants.TEXT}>{t("loginButtons.signUp")}</Button>
          <Button variant={ButtonVariants.PRIMARY}>{t("loginButtons.login")}</Button>
          <Button variant={ButtonVariants.TEXT}>
            <FontAwesomeIcon icon={faBook} />
          </Button>
          <Tooltip title={t("languages.switch")} arrow placement="bottom-start">
            <Button variant={ButtonVariants.TEXT} onClick={onLanguageClick}>
              {t("languages.current")}
            </Button>
          </Tooltip>
        </ButtonsWrapper>
      </HeaderWrapper>
    </>
  );
};
