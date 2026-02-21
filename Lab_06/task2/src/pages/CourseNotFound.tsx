import { Link } from "react-router-dom";

function CourseNotFound() {
  return (
    <div>
      <p>Course not found.</p>
      <Link to="/courses">Back to Courses</Link>
    </div>
  );
}

export default CourseNotFound;
