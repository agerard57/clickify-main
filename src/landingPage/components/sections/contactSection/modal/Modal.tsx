import React, { Dispatch, FC, SetStateAction } from "react";
import styled from "@emotion/styled";
import { Box, Modal as MuiModal } from "@mui/material";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cards } from "../../../../typings";
import { DemoModal } from "./DemoModal";
import { SupportModal } from "./SupportModal";

const ModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border-radius: 15px;
  background: #fafafa;
  padding: 30px;
  width: 70%;
`;

const CloseButton = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #333;
  font-size: 0.8rem;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: color 0.3s;

  &:hover {
    color: #e74c3c;
  }
`;

interface ModalProps {
  open: Cards | null;
  setOpen: Dispatch<SetStateAction<Cards>>;
}

export const Modal: FC<ModalProps> = ({ open, setOpen }) => {
  const handleClose = () => setOpen(null);

  const getModalContent = () => {
    if (open === Cards.DEMO) return <DemoModal />;
    if (open === Cards.SUPPORT) return <SupportModal />;
    return null;
  };

  return (
    <MuiModal
      open={open !== null && open !== Cards.DOCUMENTATION}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        <CloseButton icon={faX} onClick={handleClose} />
        {getModalContent()}
      </ModalContainer>
    </MuiModal>
  );
};
