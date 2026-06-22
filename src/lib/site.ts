export const site = {
  name: "Novapod",
  tagline: "Document Reconciliation AI for regulated environments",
  description:
    "Novapod designs and builds document reconciliation AI that runs entirely inside your infrastructure — no external LLM APIs, full audit trails, human-in-the-loop validation.",
  url: "https://novapod.ai",
  email: "hello@novapod.ai",
  calendarUrl: "/contact",
};

export const mainNav: { label: string; href: string }[] = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Discovery Sprint", href: "/discovery-sprint" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: {
  title: string;
  links: { label: string; href: string }[];
}[] = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Use Cases", href: "/use-cases" },
      { label: "Discovery Sprint", href: "/discovery-sprint" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Get Started",
    links: [
      { label: "Book Discovery Call", href: "/contact" },
      { label: "Discovery Sprint", href: "/discovery-sprint" },
    ],
  },
];
