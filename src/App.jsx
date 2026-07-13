import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";

function App() {
  return (
    // BrowserRouter wraps the whole app and gives every child access
    // to routing via history/URL state.
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <main className="app-main">
          {/* Routes picks the single Route below that matches the current URL. */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses/:slug" element={<CourseDetail />} />
            <Route path="/category/:category" element={<Category />} />
            {/* Catch-all: anything that doesn't match the routes above. */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
