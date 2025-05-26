import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="menu-sidebar d-none d-lg-block">
      <div className="logo">
        <Link to={`/home`}>
          <img
            src={process.env.PUBLIC_URL + "/logo.jpg"}
            className="mainLogo"
            alt="Society Logo"
          />
        </Link>
      </div>
      <div className="menu-sidebar__content js-scrollbar1">
        <nav className="navbar-sidebar">
          <ul className="list-unstyled navbar__list">
            <li>
              <Link className="link" to={`/home`}>
                <i className="fa fa-home fa-md"></i>
                <span className="ms-1">Home</span>
              </Link>
            </li>
            <li>
              <Link className="link" to={`/builders`}>
                <i className="fa fa-cubes fa-md"></i>
                <span className="ms-1">Builders</span>
              </Link>
            </li>
            <li>
              <Link className="link" to={`/sites`}>
                <i className="fa fa-building fa-md"></i>
                <span className="ms-1">Sites</span>
              </Link>
            </li>
            <li>
              <Link className="link" to={`/siteunits`}>
                <i className="fa fa-sitemap fa-md"></i>
                <span className="ms-1">Site Units</span>
              </Link>
            </li>
            <li>
              <Link className="link" to={`/owners`}>
                <i className="fa fa-user fa-md"></i>
                <span className="ms-1">Owners</span>
              </Link>
            </li>
            <li>
              <Link className="link" to={`/society`}>
                <i className="fa fa-users fa-md"></i>
                <span className="ms-1">Society</span>
              </Link>
            </li>
            <li>
              <Link className="link" to={`/budget`}>
                <i className="fa fa-credit-card fa-md"></i>
                <span className="ms-1">Society Budget</span>
              </Link>
            </li>
            <li>
              <Link className="link" to={`/maintenance`}>
                <i className="fa fa-wrench fa-md"></i>
                <span className="ms-1">Maintenance</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
