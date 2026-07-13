import { courses } from "../data/courses";
import CourseGrid from "../components/CourseGrid";
import "./Home.css";

function Home() {
  return (
    <div className="page-container">
      <section className="hero">
        <p className="hero__prompt mono">
          <span className="hero__prompt-user">techyjaunt@catalog</span>
          <span className="hero__prompt-sep">:~$</span> ls ./courses --level=all
        </p>
        <h1 className="hero__title">
          Learn at your<br />own pace.
        </h1>
        <p className="hero__subtitle">
          Everything from HTML basics to advanced React patterns — structured,
          practical, and built for beginners who mean business.
        </p>
      </section>

      <section className="section">
        <div className="section__header">
          <h2 className="section__title">
            All courses <span className="section__count mono">({courses.length})</span>
          </h2>
        </div>
        <CourseGrid courses={courses} />
      </section>
    </div>
  );
}

export default Home;
