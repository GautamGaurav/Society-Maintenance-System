import react from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBuilding,
    faUserLock,
    faHome,
    faChalkboardTeacher,
    faTools,
    faDesktop
} from '@fortawesome/free-solid-svg-icons';
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
                                <FontAwesomeIcon icon={faDesktop} className="icon" />
                                <span className="ms-3">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="link"
                                to={`/Builders`}
                            >
                                <FontAwesomeIcon icon={faChalkboardTeacher} className="icon" />
                                <span className="ms-3">Builders</span>
                            </Link>
                        </li>
                        <li class="has-sub">
                            <Link
                                className="link"
                                to={`/sites`}
                            >
                                <FontAwesomeIcon icon={faBuilding} className="icon" />
                                <span className="ms-3">Sites</span>
                            </Link>
                        </li>
                        <li class="has-sub">
                            <Link
                                className="link"
                                to={`/siteunits`}
                            >
                                <FontAwesomeIcon icon={faHome} className="icon" />
                                <span className="ms-3">Site Units</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="link"
                                to={`/owners`}
                            >
                                <FontAwesomeIcon icon={faUserLock} className="icon" />
                                <span className="ms-3">Owners</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="link"
                                to={`/maintenance`}
                            >
                                <FontAwesomeIcon icon={faTools} className="icon" />
                                <span className="ms-3">Maintenance</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar;