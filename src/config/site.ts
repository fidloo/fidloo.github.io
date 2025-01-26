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
      { title: "Privacy Policy", href: "/privacy-policy", },
      { title: "Terms of Use", href: "/terms-of-use", },
    ],
  },
];