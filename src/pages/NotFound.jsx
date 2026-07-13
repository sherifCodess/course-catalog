import { Link, useLocation } from "react-router";
import "./NotFound.css";

function NotFound() {
  const location = useLocation();

  return (
    <div className="page-container">
      <div className="not-found">
        <p className="not-found__code mono">Error 404</p>
        <h2 className="not-found__title">Page not found</h2>
        <p className="not-found__text">
          Nothing lives at <code className="mono">{location.pathname}</code>.
          Check the URL, or head back to the catalog.
        </p>
        <Link to="/" className="btn btn--primary">
          ← Back to all courses
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
