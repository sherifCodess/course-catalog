import { useParams, useNavigate, Link } from "react-router";
import { courses } from "../data/courses";
import "./CourseDetail.css";
import "./NotFound.css";

const CATEGORY_BADGE = {
  Beginner: "badge--beginner",
  Intermediate: "badge--intermediate",
};

function CourseDetail() {
  // useParams reads the dynamic ":slug" segment out of the current URL.
  const { slug } = useParams();
  // useNavigate gives us a function to move around history programmatically —
  // that's what powers the back button below.
  const navigate = useNavigate();

  const course = courses.find((c) => c.slug === slug);

  // No course matched this slug: render a "not found" message instead of
  // crashing on undefined fields.
  if (!course) {
    return (
      <div className="page-container">
        <div className="not-found">
          <p className="not-found__code mono">Error 404</p>
          <h2 className="not-found__title">Course not found</h2>
          <p className="not-found__text">
            There's no course at <code className="mono">/courses/{slug}</code>.
            The link might be wrong, or the course may no longer exist.
          </p>
          <Link to="/" className="btn btn--primary">
            ← Back to all courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="detail">
        {/* navigate(-1) sends the user back exactly where they came from,
            whether that was Home or a Category page. */}
        <button className="btn btn--ghost" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="detail__eyebrow">
          <span className={`badge ${CATEGORY_BADGE[course.category] || ""}`}>
            {course.category}
          </span>
          <span className="detail__breadcrumb mono">
            courses/<strong>{course.slug}</strong>.md
          </span>
        </div>

        <h1 className="detail__title">{course.title}</h1>
        <p className="detail__duration mono">// {course.duration}</p>

        <p className="detail__desc">{course.description}</p>

        <p className="topics__title">Topics covered</p>
        <ul className="topics__list">
          {course.topics.map((topic) => (
            <li className="topics__item" key={topic}>
              <span className="topics__check" aria-hidden="true">✓</span>
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CourseDetail;
