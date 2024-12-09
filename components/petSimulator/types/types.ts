export interface SocialLinkProps {
  icon: string;
  href: string;
}

export interface QuestionCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  hasNextButton?: boolean;
}

export interface NavLinkProps {
  label: string;
}

export interface FooterSectionProps {
  title: string;
  content: string;
}
