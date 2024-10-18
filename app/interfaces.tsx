export interface NavLinkProps {
  href: string;
  title: string;
}

export interface MenuOverlayProps {
  links: NavLinkProps[];
}

export interface ProjectProps {
  title: string,
  href: string,
  description: string,
  tech: string,
  imageSrc: string,
}

