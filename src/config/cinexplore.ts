import type {Feature, AppData} from "@/types";


const testimonials = [
    "Best movie and TV series app I've used",
    "Excellent app! Responsive, material UI, great synchronization with Trakt and both TV series and films.",
    "Great app to track your series and movies. UI is pretty and smooth.",
    "The best TV tracker, very complete and the content is well structured to facilitate searches",
    "Great app to follow our films and series",
    "I love this app, it had everything I was looking for because I always forgot where I was when I saw something. I have found series and movies that I want to watch and I like to keep track of them, it is easy to use, with beautiful aesthetics and has a great variety so I have been able to find things that I thought would never appear. Thanks to the creators, I loved it",
    "Great app with an excellent Trakt support",
    "Best show & movie tracker I have found!",
    "Amazing app. The functionality is great, it does exactly what you expect, and more. It feels very fast with smooth animations. And as an added bonus, the UI is incredible.",
    "Fantastic app, responsive developer, beautiful UI.",
    "Well done, excellent trackt support and the ability to add custom lists",
    "Great app! The navigation is easy, it's modern looking, and has all the features needed!",
];

const features: Feature[] = [
    {
        title: "Discover Content",
        description: "Explore movies, TV shows, and actors based on genres, ratings, or streaming platforms.",
    },
    {
        title: "Track Progress",
        description:  "Build watchlists, mark content as watched, and rate what you’ve seen.",
    },
    {
        title: "Detailed Info",
        description: "View trailers, cast details, release dates, and where to watch.",
    },
    {
        title: "Calendar & Alerts",
        description: "Stay updated with release dates and get notifications for new episodes or movies.",
    },
    {
        title: "Trakt Client",
        description: "Synchronize with Trakt to access your lists and recommendations anywhere.",
    },
    {
        title: "Personalized Experience",
        description: "Customize the application to suit your needs",
    },
    {
        title: "Themes",
        description: "Enjoy a sleek interface with a large palette of themes based on Material You for a better experience.",
    },
];

export const cinexploreAppData: AppData = {
    title: "Cinexplore",
    overview: "Discover and manage TV Shows & Movies and keep track of what you're watching.",
    description: "Cinexplore is a user-friendly Android application designed to help users discover and track movies, TV shows, and actors that match their tastes.",
    url: "https://play.google.com/store/apps/details?id=com.fidloo.cinexplore",
    testimonials: testimonials,
    features: features,
}
