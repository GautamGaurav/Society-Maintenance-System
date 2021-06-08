import react from 'react';
import { Link, browerHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCoffee,
    faBuilding,
    faUserLock,
    faHome,
    faChalkboardTeacher,
    faTools
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
                            <Link className="link" >
                                <FontAwesomeIcon icon={faChalkboardTeacher} className="icon" />
                                <span className="ms-1">Builders</span>
                            </Link>
                        </li>
                        <li class="has-sub">
                            <Link>
                                <FontAwesomeIcon icon={faBuilding} className="icon" />
                                <span className="ms-1">Sites</span>
                            </Link>
                        </li>
                        <li class="has-sub">
                            <Link>
                                <FontAwesomeIcon icon={faHome} className="icon" />
                                <span className="ms-1">Site Units</span>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <FontAwesomeIcon icon={faUserLock} className="icon" />
                                <span className="ms-1">Owners</span>
                            </Link>
                        </li>

                        <li>
                            <Link>
                                <FontAwesomeIcon icon={faTools} className="icon" />
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