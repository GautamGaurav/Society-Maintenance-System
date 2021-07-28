import react from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
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
                                        <div className="mess__item">
                                            <div className="image img-cir img-40">
                                                <img src="images/icon/avatar-06.jpg" alt="Michelle Moreno" />
                                            </div>
                                            <div className="content">
                                                <h6>Michelle Moreno</h6>
                                                <p>Have sent a photo</p>
                                                <span className="time">3 min ago</span>
                                            </div>
                                        </div>
                                        <div className="mess__item">
                                            <div className="image img-cir img-40">
                                                <img src="images/icon/avatar-04.jpg" alt="Diane Myers" />
                                            </div>
                                            <div className="content">
                                                <h6>Diane Myers</h6>
                                                <p>You are now connected on message</p>
                                                <span className="time">Yesterday</span>
                                            </div>
                                        </div>
                                        <div className="mess__footer">
                                            <a href="#">View all messages</a>
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
                                    <div className="account-dropdown js-dropdown">
                                        <div className="info clearfix">
                                            <div className="image">
                                                <a href="#">
                                                    <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <h5 className="name">
                                                    <a href="#">john doe</a>
                                                </h5>
                                                <span className="email">johndoe@example.com</span>
                                            </div>
                                        </div>
                                        <div className="account-dropdown__body">
                                            <div className="account-dropdown__item">
                                                <a href="#">
                                                    <i className="zmdi zmdi-account"></i>Account</a>
                                            </div>
                                            <div className="account-dropdown__item">
                                                <a href="#">
                                                    <i className="zmdi zmdi-settings"></i>Setting</a>
                                            </div>
                                            <div className="account-dropdown__item">
                                                <a href="#">
                                                    <i className="zmdi zmdi-money-box"></i>Billing</a>
                                            </div>
                                        </div>
                                        <div className="account-dropdown__footer">
                                            <a href="#">
                                                <i className="zmdi zmdi-power"></i>Logout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )

}

export default Header;