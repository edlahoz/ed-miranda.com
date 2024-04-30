type Page = {
  displayName: string;
  path: string;
  includeInMenu?: boolean;
  hideNameInHeader?: boolean;
  links?: PageLink[];
};

type PageLink = {
  title: string;
  value: string;
  encoded?: boolean;
};

export type { Page, PageLink };
