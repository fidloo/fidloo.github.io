import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Fidloo",
  description: "Android App Developer",
  url: "https://fidloo.github.io",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Terms & policies",
    items: [
      { title: "Privacy Policy", href: "/cinexplore/privacy-policy", },
      { title: "Terms of Use", href: "/cinexplore/terms-of-use", },
    ],
  },
];
