import React, { FC } from "react";

import styled from "@emotion/styled";
import { StandardTextFieldProps, TextField as MuiTextField, Typography } from "@mui/material";
import { TypographyVariants } from "@/theme";

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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  justify-items: end;
`;

export const TextField: FC<TextFieldProps> = ({ inputLabel, inputPosition = "left", ...props }) => (
  <TextFieldContainer inputPosition={inputPosition}>
    <Typography variant={TypographyVariants.INPUT_LABEL} style={{ gridArea: "1 / 1 / 2 / 2" }}>
      <>
        {inputLabel}
        {props.required ?? "*"}
      </>
    </Typography>
    <MuiTextField fullWidth {...props} style={{ gridArea: "1 / 2 / 2 / 3" }} />
  </TextFieldContainer>
);
