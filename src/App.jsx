import { Routes, Route } from "react-router-dom";
// import clsx from "clsx";

import css from "./App.module.css";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
}

export default App;
