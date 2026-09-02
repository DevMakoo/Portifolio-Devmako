export type TimelineEntry = {
  title: string;
  period: string;
  org: string;
  description: string;
};

export const experience: TimelineEntry[] = [
  {
    title: "Apprentice Programmer",
    period: "2023",
    org: "SENAI CIMATEC / Ford",
    description:
      "Practical training program in programming fundamentals, developed in partnership between SENAI CIMATEC and Ford.",
  },
  {
    title: "Electromechanics Apprentice",
    period: "2025 — Present",
    org: "Suzano",
    description:
      "Apprenticeship combining technical training with hands-on experience in an industrial environment.",
  },
];

export const education: TimelineEntry = {
  title: "Software Engineering",
  period: "In Progress",
  org: "Universidade Católica do Salvador",
  description:
    "Studying software engineering with a focus on application development, databases, and system architecture.",
};
