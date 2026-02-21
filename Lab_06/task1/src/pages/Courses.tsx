interface Course {
  id: number;
  title: string;
  instructor: string;
}

const courses: Course[] = [
  { id: 1, title: "Introduction to Programming", instructor: "Dr. Smith" },
  { id: 2, title: "Data Structures", instructor: "Prof. Johnson" },
  { id: 3, title: "Web Development", instructor: "Dr. Williams" },
  { id: 4, title: "Database Systems", instructor: "Prof. Brown" },
  { id: 5, title: "Software Engineering", instructor: "Dr. Davis" },
];

function Courses() {
  return (
    <div>
      <h2>Courses</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {courses.map((c) => (
          <li key={c.id}>
            <span>{c.title}</span> — <span>{c.instructor}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
