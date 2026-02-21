import { useParams, useLoaderData } from "react-router-dom";
import type { Course } from "../data";

interface LoaderData {
  course: Course;
}

function CourseDetail() {
  const { id } = useParams();
  const { course } = useLoaderData() as LoaderData;

  return (
    <div>
      <h2>{course.title}</h2>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p>{course.description}</p>
      <p><em>Route ID parameter: {id}</em></p>
    </div>
  );
}

export default CourseDetail;
