import type {Feature, AppData} from "@/types";


const testimonials = [
];

const features: Feature[] = [
    {
        title: "Unlimited Puzzles",
        description: "Generate an endless supply of unique puzzles across six difficulty levels, from easy to diabolical.",
    },
    {
        title: "Daily Challenges",
        description: "Solve a fresh hand-picked puzzle every day and keep your solving streak alive.",
    },
    {
        title: "Smart Hints",
        description: "Get context-aware hints that explain the technique behind each move so you actually improve.",
    },
    {
        title: "Notes & Auto-Candidates",
        description: "Pencil in candidates manually or let the app fill them in, with error highlighting to catch mistakes early.",
    },
    {
        title: "Statistics & Progress",
        description: "Track your best times, win rates, and streaks for every difficulty level.",
    },
    {
        title: "Themes",
        description: "Enjoy a sleek interface with a large palette of themes based on Material You for a better experience.",
    },
];

export const sudokuAppData: AppData = {
    title: "Sudoku - Train your brain",
    overview: "Learn Sudoku with guided lessons, smart hints, and daily challenges",
    description: "Learn Sudoku with guided lessons, smart hints, and daily challenges. Whether you're solving your first Sudoku puzzle or improving advanced Sudoku skills, this Sudoku game helps you master real solving techniques step by step.",
    url: "https://play.google.com/store/apps/details?id=com.fidloo.sudoku",
    logo: "/images/sudoku_logo.svg",
    testimonials: testimonials,
    features: features,
}
