import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const getClassActive = ({ isActive }) =>
  clsx(css.link, {
    [css.active]: isActive,
  });

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={getClassActive}>
        Home
      </NavLink>
      <NavLink to="/movies" className={getClassActive}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
