import CourseCard from "./CourseCard";
import "./CourseGrid.css";

function CourseGrid({ courses, emptyMessage = "No courses here yet." }) {
  if (courses.length === 0) {
    return <p className="course-grid__empty mono">// {emptyMessage}</p>;
  }

  return (
    <div className="course-grid">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CourseGrid;
