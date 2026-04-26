export const POSTS = [
  {
    slug: "rendering-the-wire",
    title: "Rendering Hacker News: how HackerRoll turns a thread into a visual card.",
    kicker: "Engineering",
    date: "2026-04-10",
    readTime: "6 min read",
    excerpt:
      "A walkthrough of the render pipeline, from HN item metadata and readable article text to a visual story card.",
    accent: "accent",
  },
  {
    slug: "news-that-moves",
    title: "HN that moves: the case for a focused swipe feed.",
    kicker: "Product",
    date: "2026-03-28",
    readTime: "4 min read",
    excerpt:
      "A short argument for keeping Hacker News skimmable without flattening the discussion that makes it useful.",
    accent: "violet",
  },
  {
    slug: "sources-we-trust",
    title: "Keeping the original thread in view.",
    kicker: "Trust & safety",
    date: "2026-03-14",
    readTime: "5 min read",
    excerpt:
      "HackerRoll always keeps the HN story, linked source, and comment context within reach, even when AI features summarize or translate.",
    accent: "hot",
  },
  {
    slug: "beta-0-1-patch-notes",
    title: "Beta 0.1 patch notes: Pro AI, credits, and fewer feed interruptions.",
    kicker: "Changelog",
    date: "2026-02-22",
    readTime: "2 min read",
    excerpt:
      "Structured translation, explain modes, and visual feed improvements for readers who live inside Hacker News.",
    accent: "accent",
  },
];

export function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}
