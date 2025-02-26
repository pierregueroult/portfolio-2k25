export type Project = {
  id: number;
  name: string;
  role: string;
  description: string;
  technologies: string[];
  links: { url: string; title: string }[];
  date: Date;
};

export const projects: Project[] = [
  {
    id: 0,
    name: "next-launch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc. Nullam nec purus nec nunc. Nullam nec purus nec nunc. Nullam nec purus nec nunc.",
    technologies: ["React", "Next.js", "TypeScript"],
    links: [
      {
        url: "https://github.com/pierregueroult/next-launch",
        title: "Github Repository of next-launch",
      },
      {
        url: "https://www.npmjs.com/package/next-launch",
        title: "NPM Package of next-launch",
      },
    ],
    role: "Creator & Developer",
    date: new Date("2021-09-01"),
  },
  {
    id: 1,
    name: "selenite-website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc. Nullam nec purus nec nunc. Nullam nec purus nec nunc. Nullam nec purus nec nunc.",
    technologies: ["React", "Next", "TypeScript", "TailwindCSS", "Three.js"],
    links: [
      {
        url: "https://selenite.live",
        title: "Website of Selenite",
      },
      {
        url: "https://github.com/selenite-live/selenite-game",
        title: "Github Repository of Selenite",
      },
      {
        url: "https://weare.selenite.live",
        title: "Website of the Selenite Team and Selenite Design",
      },
      {
        url: "https://wiki.selenite.live",
        title: "Wiki of the Selenite Game",
      },
    ],
    role: "Developer & DevOps",
    date: new Date("2021-09-01"),
  },
  {
    id: 2,
    name: "selenite-game",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc. Nullam nec purus nec nunc. Nullam nec purus nec nunc. Nullam nec purus nec nunc.",
    technologies: ["Unity", "Github", "C#"],
    links: [
      {
        url: "https://selenite.live",
        title: "Website of Selenite",
      },
      {
        url: "https://github.com/selenite-live/selenite-game",
        title: "Github Repository of Selenite",
      },
    ],
    role: "Developer & DevOps",
    date: new Date("2021-09-01"),
  },
];
