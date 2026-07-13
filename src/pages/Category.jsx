import { useParams } from "react-router";
import { courses } from "../data/courses";
import CourseGrid from "../components/CourseGrid";
import "./Category.css";

function Category() {
  // useParams reads the ":category" segment — e.g. "Beginner" or "Intermediate" —
  // straight from the URL, so this page never hardcodes a category.
  const { category } = useParams();

  const filtered = courses.filter(
    (course) => course.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="page-container">
      <section className="category-hero">
        <p className="category-hero__breadcrumb mono">
          courses/<strong>{category.toLowerCase()}</strong>/
        </p>
        <h1 className="category-hero__title">{category} Courses</h1>
        <p className="category-hero__subtitle">
          {filtered.length} {filtered.length === 1 ? "course" : "courses"} matched
        </p>
      </section>

      <section className="section">
        <CourseGrid
          courses={filtered}
          emptyMessage={`No ${category} courses yet — check back soon.`}
        />
      </section>
    </div>
  );
}

export default Category;
