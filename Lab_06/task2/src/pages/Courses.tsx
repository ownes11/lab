import { Link, useSearchParams } from "react-router-dom";
import { courses } from "../data";

function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sort") ?? "asc";
  const sorted = [...courses].sort((a, b) =>
    sortOrder === "desc"
      ? b.title.localeCompare(a.title)
      : a.title.localeCompare(b.title)
  );

  const toggleSort = () => {
    setSearchParams({ sort: sortOrder === "asc" ? "desc" : "asc" });
  };

  return (
    <div>
      <h2>Courses</h2>
      <button type="button" onClick={toggleSort}>
        Sort: {sortOrder.toUpperCase()}
      </button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {sorted.map((c) => (
          <li key={c.id}>
            <Link to={`/courses/${c.id}`}>{c.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
