import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar({ dogs }) {
    const links = dogs.map(dog => (
      <Link key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
    ));
  
    return (
      <nav>
        <Link to="/dogs" end>  Home</Link>
        {links}
      </nav>
    );
  }
  
  export default NavBar;
  