import './styles.css';
import 'bootstrap/js/src/collapse.js'
import {NavLink, Link} from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
        <div className="container-fluid">
          <Link to="/" className= "nav-logo-text">
            <h4>Black Clothes</h4>
          </Link>
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#carrostop-navbar"
        aria-controls="carrostop-navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
          <div className= "collapse navbar-collapse" id="carrostop-navbar">
            <ul className='navbar-nav offset-md-2 main-menu'>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/products">Catálogo</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    );
  }
  
  export default Navbar;

