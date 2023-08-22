import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface CardContentProps {
  title: string;
  icon: IconDefinition;
  link: string;
}

export interface ContactCategory {
  title: string;
  cards: CardContentProps[];
}
