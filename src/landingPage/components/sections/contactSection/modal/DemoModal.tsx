import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { TextField } from "@/core";
import { ButtonVariants, TypographyVariants } from "@/theme";
import { Button, Typography } from "@mui/material";

import { styles } from "../../../../styles";

export const DemoModal: FC = () => {
  const { t } = useTranslation("LandingPage");

  const { ModalContent, InputContainer } = styles.contactSection();
  const formPrefix = "contact.categories.sales.cards.demo.modal";

  return (
    <ModalContent>
      <Typography variant={TypographyVariants.TITLE}>{t(`${formPrefix}.title`)}</Typography>
      <Typography variant={TypographyVariants.PARAGRAPH_TITLE}>{t(`${formPrefix}.content`)}</Typography>
      <InputContainer>
        <TextField
          autoFocus
          placeholder={t(`${formPrefix}.form.name.placeholder`)}
          inputLabel={t(`${formPrefix}.form.name.label`)}
          required
        />
        <TextField
          placeholder={t(`${formPrefix}.form.companyName.placeholder`)}
          inputLabel={t(`${formPrefix}.form.companyName.label`)}
          required
        />
        <TextField
          placeholder={t(`${formPrefix}.form.email.placeholder`)}
          inputLabel={t(`${formPrefix}.form.email.label`)}
          required
        />
        <TextField
          placeholder={t(`${formPrefix}.form.phoneNumber.placeholder`)}
          inputLabel={t(`${formPrefix}.form.phoneNumber.label`)}
          required
        />
        <TextField
          placeholder={t(`${formPrefix}.form.projectDetailsOrQuestions.placeholder`)}
          inputLabel={t(`${formPrefix}.form.projectDetailsOrQuestions.label`)}
          multiline
          rows={4}
          required
        />
      </InputContainer>
      <Button variant={ButtonVariants.PRIMARY}>{t(`${formPrefix}.form.button`)}</Button>
    </ModalContent>
  );
};
