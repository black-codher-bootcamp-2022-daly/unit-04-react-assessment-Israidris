import { Link } from "react-router-dom";

export const Nav = (props) => {
  return (
    <div className="nav">
      <div className="nav_link">
        <Link to="/">Home/Search</Link>
      </div>
      <div className="nav_link">
        <Link to="/About.js">About</Link>
      </div>
      <div className="nav_basket">
        <Link to="/Basket">Basket: {props.count}</Link>
      </div>
    </div>
  );
};

export default Nav;