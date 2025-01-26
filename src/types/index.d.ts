export type NavItem = {
    title: string;
    href: string;
    disabled?: boolean;
};
export type MenuItem = NavItem & {
    image?: string;
    description?: string;
    launched?: boolean;
    external?: boolean;
    forceReload?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
    title: string;
    disabled?: boolean;
    external?: boolean;
} & (
    | {
    href: string;
    items?: never;
}
    | {
    href?: string;
    items: MenuItem[];
}
    );

export type SiteConfig = {
    name: string;
    description: string;
    url: string;
};

export type DocsConfig = {
    mainNav: MainNavItem[];
    sidebarNav: SidebarNavItem[];
};

export type NavMenuConfig = {
    apps: SidebarNavItem[];
    links: MenuItem[];
};

export type InfoList = {
    icon: string;
    title: string;
    description: string;
};

export type InfoLdg = {
    title: string;
    image: string;
    description: string;
    list: InfoList[];
}

export type Feature = {
    title: string;
    description: string;
}

export type AppData = {
    title: string;
    description: string;
    overview: string;
    url: string;
    testimonials: string[];
    features: Feature[];
}