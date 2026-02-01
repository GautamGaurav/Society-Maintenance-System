import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header-desktop">
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="header-wrap">
            <form className="form-header" action="" method="POST">
              <input className="au-input au-input--xl" type="text" name="search" placeholder="Search for datas &amp; reports..." />
              <button className="au-btn--submit" type="submit">
                <i className="fa fa-search fa-lg"></i>
              </button>
            </form>
            <div className="header-button">
              <div className="noti-wrap">
                <div className="noti__item js-item-menu">
                  <i className="fa fa-bell fa-lg black-font" aria-hidden="true"></i>
                  <span className="quantity">1</span>
                  <div className="mess-dropdown js-dropdown">
                    <div className="mess__title">
                      <p>You have 2 news message</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="account-wrap">
                <div className="account-item clearfix js-item-menu">
                  <div className="image">
                    <img src={process.env.PUBLIC_URL + '/user.png'} alt="User" />
                  </div>
                  <div className="content">
                    <Link to="home">Gaurav Gautam</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
