import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <aside className="menu-sidebar d-none d-lg-block">
      <div className="logo">
        <a href="#">
          <img src={process.env.PUBLIC_URL + '/logo.jpg'} alt="SMS" />
        </a>
      </div>
      <div className="menu-sidebar__content js-scrollbar1">
        <nav className="navbar-sidebar">
          <ul className="list-unstyled navbar__list">
            <li className="active has-sub">
              <a href="/home">
                <i className="fa fa-home"></i>Home</a>
            </li>
            <li>
              <a href="/builders"><i className="fa fa-building-o" aria-hidden="true"></i>Builders</a>
            </li>
            <li>
              <a href="/sites"><i className="fa fa-map-marker" aria-hidden="true"></i>Sites</a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
