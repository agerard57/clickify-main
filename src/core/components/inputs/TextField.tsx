import React, { FC } from "react";

import { TypographyVariants } from "@/theme";
import styled from "@emotion/styled";
import { StandardTextFieldProps, TextField as MuiTextField, Typography } from "@mui/material";

interface TextFieldProps extends StandardTextFieldProps {
  inputLabel: string;
  inputPosition?: "left" | "top";
}

const TextFieldContainer = styled(
  (props: { inputPosition: TextFieldProps["inputPosition"] } & React.HTMLAttributes<HTMLDivElement>) => (
    <div {...props} />
  ),
  {
    shouldForwardProp: (propName) => propName !== "inputPosition",
  },
)`
  display: ${({ inputPosition }) => (inputPosition === "top" ? "flex" : "grid")};
  flex-direction: ${({ inputPosition }) => (inputPosition === "top" ? "column" : "row")};
  align-items: ${({ inputPosition }) => (inputPosition === "top" ? "flex-start" : "center")};
  gap: 20px;
  white-space: nowrap;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  justify-items: end;
`;

export const TextField: FC<TextFieldProps> = ({ inputLabel, inputPosition = "left", size = "small", ...props }) => (
  <TextFieldContainer inputPosition={inputPosition}>
    <Typography variant={TypographyVariants.INPUT_LABEL} style={{ gridArea: "1 / 1 / 2 / 2" }}>
      <>
        {inputLabel}
        {props.required ?? "*"}
      </>
    </Typography>
    <MuiTextField fullWidth size={size} {...props} style={{ gridArea: "1 / 2 / 2 / 3" }} />
  </TextFieldContainer>
);
