import React, { ImgHTMLAttributes } from "react";
import styled from "@emotion/styled";

interface WidthProp {
  width: string;
}

export const aboutSection = () => {
  const SubSectionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `;

  const Image = styled((props: WidthProp & ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />, {
    shouldForwardProp: (propName) => propName !== "width",
  })`
    width: ${({ width }) => width};
    height: auto;
  `;

  const Card = styled((props: WidthProp & React.HTMLAttributes<HTMLDivElement>) => <div {...props} />, {
    shouldForwardProp: (propName) => propName !== "width",
  })`
    border-radius: 14px;
    background: #fff;
    box-shadow: 0px 0px 14px -3px rgba(0, 0, 0, 0.25);
    padding: 20px 40px;
    width: ${({ width }) => width};
    white-space: pre-line;
  `;

  return {
    SubSectionWrapper,
    Image,
    Card,
  };
};
