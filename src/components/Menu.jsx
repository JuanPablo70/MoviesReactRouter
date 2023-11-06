import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About us</Link>
        </li>
        <li>
          <Link to="/movie-list">Movie List</Link>
        </li>       
      </ul>
    </nav>
  );
}