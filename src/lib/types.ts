export type NavigationItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
  featured?: boolean;
};

export type Skill = {
  id: string;
  title: string;
};

export type Tool = {
  id: string;
  name: string;
  icon?: string;
};

export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export type WebsiteType = {
  id: string;
  number: string;
  title: string;
  description?: string;
  price?: string;
  actionLabel?: string;
};

export type ContactInfo = {
  phone?: string;
  email?: string;
  viber?: string;
  instagram?: string;
  behance?: string;
  telegram?: string;
  qrCode?: string;
};
