import { Routes, Route } from "react-router-dom";
// import clsx from "clsx";

import css from "./App.module.css";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import Navigation from "./components/Navigation/Navigation";
import NotFoundPage from "./pages/NotFoundPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
