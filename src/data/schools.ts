type SchoolDate = Date | "now";


export type School = {
  name: string;
  school: string;
  city: string;
  country: string;
  period: [Date, SchoolDate];
  description: string;
};

export const schools: School[] = [
  {
    name: "BUT Métiers du Multimédia et de l'Internet",
    school: "Université de Rouen",
    city: "Rouen",
    country: "France",
    period: [new Date("2022/09"), "now"],
    description: "I specialize in Web Development and Interactive Systems, focusing on front-end and back-end development, UI/UX design, and interactive media."
  },
];
