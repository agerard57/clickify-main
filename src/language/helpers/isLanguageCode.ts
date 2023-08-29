import { LanguageCode } from "../typings";

export const isLanguageCode = (code: string): code is LanguageCode =>
  Object.values(LanguageCode).includes(code as LanguageCode);
