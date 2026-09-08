import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Fidloo",
  description: "Android App Developer",
  url: "https://fidloo.github.io",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Cinexplore",
    items: [
      { title: "Privacy Policy", href: "/cinexplore/privacy-policy", },
      { title: "Terms of Use", href: "/cinexplore/terms-of-use", },
    ],
  },
  {
    title: "Sudoku",
    items: [
      { title: "Privacy Policy", href: "/sudoku/privacy-policy", },
      { title: "Terms of Use", href: "/sudoku/terms-of-use", },
    ],
  },
];
