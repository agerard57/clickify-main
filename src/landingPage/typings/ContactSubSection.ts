import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export enum Cards {
  DEMO = "demo",
  SUPPORT = "support",
  DOCUMENTATION = "documentation",
}

export interface CardContentProps {
  title: Cards;
  icon: IconDefinition;
}

export interface ContactCategory {
  title: "sales" | "support";
  cards: CardContentProps[];
}
