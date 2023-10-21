import React, { FC, HTMLAttributes } from "react";

import { TypographyVariants } from "@/theme";
import styled from "@emotion/styled";
import { StandardTextFieldProps, TextField as MuiTextField, Typography } from "@mui/material";

const TextFieldContainer = styled.div`
  gap: 20px;
  white-space: nowrap;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  justify-items: end;
`;
interface TextFieldProps extends StandardTextFieldProps {
  inputLabel: string;
  inputPosition?: "left" | "top";
}

export const TextField: FC<TextFieldProps> = ({ inputLabel, inputPosition = "left", size = "small", ...props }) => (
  <TextFieldContainer
    style={{
      display: inputPosition === "top" ? "flex" : "grid",
      flexDirection: inputPosition === "top" ? "column" : "row",
      alignItems: inputPosition === "top" ? "flex-start" : "center",
    }}
  >
    <Typography variant={TypographyVariants.INPUT_LABEL} style={{ gridArea: "1 / 1 / 2 / 2" }}>
      <>
        {inputLabel}
        {props.required ?? "*"}
      </>
    </Typography>
    <MuiTextField fullWidth size={size} {...props} style={{ gridArea: "1 / 2 / 2 / 3" }} />
  </TextFieldContainer>
);
