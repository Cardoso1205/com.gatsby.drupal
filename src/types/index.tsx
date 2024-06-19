export interface ButtonProps {
  children: string;
  to: string;
  target?: string;
  variant?: "primary" | "secondary";
}

interface Link {
  label: string;
  to: string;
}

export interface NavbarProps {
  logo: string;
  links: Link[];
  ctas: ButtonProps[];
}

export interface InputProps {
  value?: string;
  placeholder?: string;
  type?: string;
}

export interface HeroProps {
  title: string;
  description: string;
  image: string;
  fields: InputProps[];
  ctas: ButtonProps[];
}

export interface AlertProps {
  text: string;
  cta: Link;
}

export interface CardProps {
  image: string;
  title: string;
  description?: string;
  variant?: "general" | "blog";
}

export interface CardGridProps {
  title: string;
  description?: string;
  cards: CardProps[];
  columns: "2" | "3" | "4";
  variant: "general" | "blog";
}

export interface PromoCardProps {
  image: string;
  title: string;
  cta: Link;
}

export interface PreFooterProps {
  title: string
  cta?: Link
}

export interface Navigation {
  title: string
  links: Link[]
}

export interface FooterProps{
  title: string
  description: string
  navigation: Navigation[]
}
