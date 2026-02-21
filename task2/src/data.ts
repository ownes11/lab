export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Introduction to Programming",
    instructor: "Dr. Smith",
    description: "Fundamentals of programming with a modern language. Variables, control flow, and basic data structures.",
  },
  {
    id: 2,
    title: "Data Structures",
    instructor: "Prof. Johnson",
    description: "Arrays, linked lists, trees, graphs, and hash tables. Analysis of time and space complexity.",
  },
  {
    id: 3,
    title: "Web Development",
    instructor: "Dr. Williams",
    description: "HTML, CSS, JavaScript, and React. Building responsive and accessible web applications.",
  },
  {
    id: 4,
    title: "Database Systems",
    instructor: "Prof. Brown",
    description: "Relational databases, SQL, normalization, and basic transaction handling.",
  },
  {
    id: 5,
    title: "Software Engineering",
    instructor: "Dr. Davis",
    description: "Requirements, design, testing, and project management. Agile and version control.",
  },
];

export function getCourseById(id: number): Course | undefined {
  return courses.find((c) => c.id === id);
}
