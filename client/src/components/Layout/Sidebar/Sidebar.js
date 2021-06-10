import react from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';


function Sidebar() {
    return (
        <aside class="menu-sidebar d-none d-lg-block">
            <div class="logo">
                <a href="#">
                    <img
                        src={process.env.PUBLIC_URL + '/sai_sparsh_logo.jpg'}
                        className="mainLogo"
                    />
                </a>
            </div>
            <div class="menu-sidebar__content js-scrollbar1">
                <nav class="navbar-sidebar">
                    <ul class="list-unstyled navbar__list">
                        <li>
                            <Link
                                className="link"
                                to={`/home`}
                            >
                                <i className="fa fa-home fa-md"></i>
                                <span className="ms-1">Home</span>
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                className="link"
                                to={`/Builders`}
                            >
                                 <i className="fa fa-lock fa-md"></i>
                                <span className="ms-3">Builders</span>
                            </Link>
                        </li> */}
                        <li>
                            <Link
                                className="link"
                                to={`/sites`}
                            >
                                <i className="fa fa-building fa-md"></i>
                                <span className="ms-1">Sites</span>
                            </Link>
                        </li>
                        {/* <li class="has-sub">
                            <Link
                                className="link"
                                to={`/siteunits`}
                            >
                                 <i className="fa fa-lock fa-md"></i>
                                <span className="ms-3">Site Units</span>
                            </Link>
                        </li> */}
                        <li>
                            <Link
                                className="link"
                                to={`/owners`}
                            >
                                 <i className="fa fa-users fa-md"></i>
                                <span className="ms-1">Owners</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="link"
                                to={`/maintenance`}
                            >
                                 <i className="fa fa-wrench fa-md"></i>
                                <span className="ms-1">Maintenance</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar;