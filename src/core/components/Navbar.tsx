import styled from "@emotion/styled";
import { Button, Toolbar, Typography, useTheme } from "@mui/material";
import React, { FC, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/router";
import { ConstantsContext } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { Section } from "@/landingPage";
import { Link, useLocation } from "react-router-dom";
import { FullLogo } from "../assets";

export const Navbar: FC = () => {
  const { t } = useTranslation("Core");
  const theme = useTheme();
  const location = useLocation();

  const appConstants = useContext(ConstantsContext);
  const route = appConstants.routes[Page.LANDING_PAGE];

  const [currentSection, setCurrentSection] = useState<Section | null>(null);

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
      setCurrentSection(pathname !== "/" ? null : (hash.replace("#", "") as Section));
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  console.log(currentSection);
  return (
    <>
      <HeaderWrapper>
        <Logo src={FullLogo} alt="logo" />
        <NavBarWrapper>
          {route.sections.map((section: Section) => (
            <Link reloadDocument key={section} to={`/#${section}`}>
              <Typography fontWeight={currentSection === section ? 700 : 500}>{t(`sections.${section}`)}</Typography>
            </Link>
          ))}
        </NavBarWrapper>
        <ButtonsWrapper>
          <Typography>Sign up</Typography>
          <Button>Login</Button>
          <FontAwesomeIcon icon={faBook} />
        </ButtonsWrapper>
      </HeaderWrapper>
    </>
  );
};
