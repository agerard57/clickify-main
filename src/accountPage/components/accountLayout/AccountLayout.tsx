import React, { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";

import { useConstants } from "@/constants";
import { TypographyVariants } from "@/theme";
import styled from "@emotion/styled";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Typography } from "@mui/material";

import { AccountSubPages } from "../../typings";

const AccountLayoutContainer = styled.div`
  background-color: #fffa;
  margin: 100px 40px;
`;

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const LinksArea = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: column;
`;

const ContentArea = styled.div`
  grid-area: 1 / 2 / 2 / 4;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

interface LinkBoxProps {
  selected?: boolean;
  children: ReactNode;
}

const LinkBox: FC<LinkBoxProps> = ({ selected = false, children }) => (
  <div
    style={{
      padding: "14px 0 14px 12px",
      borderRadius: 6,
      cursor: "pointer",
      backgroundColor: selected ? "rgba(199,208,242,0.75)" : "#FFF",
      maxWidth: 260,
    }}
  >
    {children}
  </div>
);

export const AccountLayout: FC = () => {
  const { t } = useTranslation("AccountPage");
  const appConstants = useConstants();

  // TODO
  const currentPage = AccountSubPages.COMPANY;

  return (
    <AccountLayoutContainer>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <Typography variant={TypographyVariants.SMALL_TITLE}>{t("title", { user: "TODO" })}</Typography>
        <Typography variant={TypographyVariants.INPUT_LABEL} style={{ textAlign: "right", color: "#848484" }}>
          {t(`${currentPage}.description`)}
        </Typography>
      </div>
      <Divider flexItem style={{ color: "#7A7A7A", margin: "15px 0 30px 0" }} />
      <LayoutGrid>
        <LinksArea style={{ display: "flex", flexDirection: "column" }}>
          {appConstants.accountPage.subPages.map((subPage) => {
            const selected = subPage === currentPage;

            return (
              <LinkBox key={subPage} selected={selected}>
                <StyledLink to={subPage}>
                  <Typography variant={TypographyVariants.SECTION_TITLE} style={{ fontWeight: selected ? 700 : 400 }}>
                    {t(`${subPage}.title`)}
                  </Typography>
                </StyledLink>
              </LinkBox>
            );
          })}
          <LinkBox>
            <StyledLink to={"TODO BACKOFFICE"}>
              <Typography variant={TypographyVariants.SECTION_TITLE} style={{ fontWeight: 400 }}>
                {t("backOffice")}
              </Typography>
              <FontAwesomeIcon icon={faUpRightFromSquare} size="xs" style={{ paddingLeft: 10, color: "#000" }} />
            </StyledLink>
          </LinkBox>
          <LinkBox>
            <StyledLink to={"TODO"}>
              <Typography variant={TypographyVariants.SECTION_TITLE} style={{ color: "#FF6565", fontWeight: 400 }}>
                {t("close.title")}
              </Typography>
            </StyledLink>
          </LinkBox>
        </LinksArea>
        <ContentArea>
          <Outlet />
        </ContentArea>
      </LayoutGrid>
    </AccountLayoutContainer>
  );
};

/* 
      <h1>AccountPages page</h1>
      <p>{t("title")}</p> 
      Outlet 
      */
