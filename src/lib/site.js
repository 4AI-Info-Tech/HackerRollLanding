export const SITE = {
  name: "HackerRoll",
  domain: "hackerroll.com",
  url: "https://hackerroll.com",
  appStoreUrl: "/support#ios",
  supportEmail: "support@hackerroll.com",
  privacyEmail: "privacy@hackerroll.com",
  adsEmail: "ads@hackerroll.com",
  pressEmail: "press@hackerroll.com",
  legalEmail: "legal@hackerroll.com",
};

export const SITE_ROUTES = [
  { path: "/", label: "Home", changefreq: "weekly", priority: "1.0" },
  { path: "/blog", label: "Blog", changefreq: "weekly", priority: "0.8" },
  { path: "/advertise", label: "Advertise", changefreq: "monthly", priority: "0.7" },
  { path: "/support", label: "Support", changefreq: "monthly", priority: "0.6" },
  { path: "/privacy", label: "Privacy", changefreq: "yearly", priority: "0.4" },
  { path: "/terms", label: "Terms", changefreq: "yearly", priority: "0.4" },
];
