import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  apps: [
    {
      title: "Apps",
      items: [
        {
          title: "Cinexplore",
          href: "/cinexplore",
          description: "A Movie & TV Show tracker",
          image: "/images/cinexplore_logo.svg",
        },
        {
          title: "Sudoku",
          href: "/sudoku",
          description: "Train your brain",
          image: "/images/sudoku_logo.svg",
        },
      ]
    },
  ],
  links: [],
};
