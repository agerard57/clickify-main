import React, { FC, useContext } from "react";
import { useTranslation } from "react-i18next";

import { ConstantsContext } from "@/constants";
import { TextField } from "@/core";
import { ButtonVariants, TypographyVariants } from "@/theme";
import { MainSupportTopics } from "@clickify/clickify-common";
import { Button, MenuItem, Typography } from "@mui/material";

import { styles } from "../../../../styles";

export const SupportModal: FC = () => {
  const { t } = useTranslation("LandingPage");
  const appConstants = useContext(ConstantsContext);

  const { ModalContent, InputContainer } = styles.contactSection();
  const formPrefix = "contact.categories.support.cards.support.modal";

  return (
    <ModalContent>
      <Typography variant={TypographyVariants.TITLE}>{t(`${formPrefix}.title`)}</Typography>
      <Typography variant={TypographyVariants.PARAGRAPH_TITLE}>{t(`${formPrefix}.content`)}</Typography>
      <InputContainer>
        <TextField
          autoFocus
          select
          defaultValue={MainSupportTopics.ORDER}
          inputLabel={t(`${formPrefix}.form.topic.label`)}
          required
        >
          {appConstants.landingPage.sections.contact.modal.demo.topics.map((option) => (
            <MenuItem key={option} value={option}>
              {t(`${formPrefix}.form.topic.topics.${option}`)}
            </MenuItem>
          ))}
        </TextField>
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
          placeholder={t(`${formPrefix}.form.subject.placeholder`)}
          inputLabel={t(`${formPrefix}.form.subject.label`)}
          required
        />
        <TextField
          placeholder={t(`${formPrefix}.form.details.placeholder`)}
          inputLabel={t(`${formPrefix}.form.details.label`)}
          multiline
          rows={4}
          required
        />
      </InputContainer>
      <Button variant={ButtonVariants.PRIMARY}>{t(`${formPrefix}.form.button`)}</Button>
    </ModalContent>
  );
};
