import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Popover,
  Select,
  SelectChangeEvent,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { FC, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import { Page } from "@/router";
import { ConstantsContext } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FullLogo } from "../assets";

export const Navbar: FC = () => {
  const { t } = useTranslation("Core");

  const appConstants = useContext(ConstantsContext);
  const route = appConstants.routes[Page.LANDING_PAGE];

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const HeaderWrapper = styled(Toolbar)`
    margin-top: 10px;
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
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 480px;
    margin: 0 auto;
  `;

  const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-right: 20px;
  `;

  const PopoverContainer = styled(Popover)`
    position: absolute;
    right: 30px;
    top: 60px;
  `;

  return (
    <>
      <HeaderWrapper>
        <Logo src={FullLogo} alt="logo" />
        <NavBarWrapper>
          {route.sections.map((section, index) => (
            <HashLink key={section} to={`${route.path}#${section}`}>
              <Typography fontWeight={index === 0 ? 700 : 500}>{t(`sections.${section}`)}</Typography>
            </HashLink>
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
