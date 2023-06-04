import React, { FC, ReactNode } from "react";
import { appConstants } from "../assets";
import { ConstantsContext } from "../contexts";

interface Props {
  children: ReactNode;
}

export const ConstantsProvider: FC<Props> = ({ children }) => {
  return <ConstantsContext.Provider value={appConstants}>{children}</ConstantsContext.Provider>;
};
