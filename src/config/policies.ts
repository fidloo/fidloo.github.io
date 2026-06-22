export type PolicyType = "privacy-policy" | "terms-of-use";

export type PolicySection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ThirdPartyService = {
  title: string;
  href: string;
};

export type AppPolicy = {
  slug: string;
  appName: string;
  publisherName: string;
  contactEmail: string;
  lastUpdated: Date;
  serviceCost: string;
  thirdPartyServices: ThirdPartyService[];
  hasAffiliateLinks: boolean;
  terms: {
    premiumItemName: string;
  };
};

const sharedServices: ThirdPartyService[] = [
  {
    title: "Crashlytics",
    href: "http://try.crashlytics.com/terms/privacy-policy.pdf",
  },
  {
    title: "Fabric",
    href: "https://fabric.io/privacy",
  },
  {
    title: "Firebase Analytics",
    href: "https://firebase.google.com/policies/analytics",
  },
  {
    title: "Google Play Services",
    href: "https://www.google.com/policies/privacy",
  },
];

export const appPolicies = {
  cinexplore: {
    slug: "cinexplore",
    appName: "Cinexplore",
    publisherName: "Fidloo",
    contactEmail: "fidloo.apps@gmail.com",
    lastUpdated: new Date("2025-01-26"),
    serviceCost: "Free",
    thirdPartyServices: sharedServices,
    hasAffiliateLinks: true,
    terms: {
      premiumItemName: "Premium",
    },
  },
  sudoku: {
    slug: "sudoku",
    appName: "Sudoku",
    publisherName: "Fidloo",
    contactEmail: "fidloo.apps@gmail.com",
    lastUpdated: new Date("2026-06-22"),
    serviceCost: "Free",
    thirdPartyServices: sharedServices,
    hasAffiliateLinks: true,
    terms: {
      premiumItemName: "Premium",
    },
  },
} satisfies Record<string, AppPolicy>;

export type AppPolicySlug = keyof typeof appPolicies;

export function getAppPolicy(slug: string): AppPolicy | undefined {
  return appPolicies[slug as AppPolicySlug];
}

export function getPolicyTitle(policyType: PolicyType) {
  switch (policyType) {
    case "privacy-policy":
      return "Privacy Policy";
    case "terms-of-use":
      return "Terms of Use";
  }
}

export function getPolicyDescription(policyType: PolicyType, appName: string) {
  return `${getPolicyTitle(policyType)} for ${appName}`;
}
