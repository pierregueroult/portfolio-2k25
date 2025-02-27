type WorkDate = Date | "now";

type PassedWork = {
  place: string;
  works: {
    role: string;
    techs: string[];
    period: [Date, WorkDate];
    description: string;
  }[];
};

type LookingForWork = {
  place: string;
  role: string;
};

export type Work = PassedWork | LookingForWork;

export const works: Work[] = [
  {
    place: "Paris, France",
    role: "an internship in software engineering",
  },
  {
    place: "Groupe Frame IP",
    works: [
      {
        role: "Web development internship",
        techs: ["Angular", "C#", "MySQL", "PHP"],
        period: [new Date("2024/08"), "now"],
        description: "I'm working on the internal tools of the company, mainly using PHP and Angular frameworks.",
      },
      {
        role: "Web developer",
        techs: ["Angular", "C#", "MySQL", "PHP"],
        period: [new Date("2024/06"), new Date("2024/08")],
        description:
          "I mainly worked on the migration of the company's internal tools to a new version of PHP. I also worked on the development of new features.",
      },
    ],
  },
];
