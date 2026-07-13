import { Link } from "react-router";
import "./CourseCard.css";

// Small helper: category name -> the badge/tag modifier class + extension label.
const CATEGORY_META = {
  Beginner: { className: "badge--beginner", ext: ".begin" },
  Intermediate: { className: "badge--intermediate", ext: ".mid" },
};

function CourseCard({ course }) {
  const meta = CATEGORY_META[course.category] || {};

  return (
    // The whole card is a Link — clicking anywhere on it navigates
    // client-side to the course's detail route, no full page reload.
    <Link to={`/courses/${course.slug}`} className="course-card">
      <div className="course-card__top">
        <span className={`badge ${meta.className || ""}`}>{course.category}</span>
        <span className="course-card__tag mono">{meta.ext}</span>
      </div>
      <p className="course-card__title">{course.title}</p>
      <p className="course-card__meta mono">// {course.duration}</p>
      <p className="course-card__arrow">open file →</p>
    </Link>
  );
}

export default CourseCard;
