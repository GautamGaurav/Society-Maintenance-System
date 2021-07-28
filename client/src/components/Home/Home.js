import react, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import './Home.css';
import { NotificationManager } from 'react-notifications';


function Home() {
    const location = useLocation();

    useEffect(() => {
        //console.log(location.state.user)
    }, []);

    return (
        <div>
            <div className="row m-t-25">
                <div className="col-sm-6 col-lg-3">
                    <div className="overview-item overview-item--c1">
                        <div className="overview__inner">
                            <div className="overview-box clearfix">
                                <div className="icon">
                                </div>
                                <div className="text">
                                    <h2><i className="fa fa-inr" aria-hidden="true"></i> 47300</h2>
                                    <span>Total Collection</span>
                                    <div className="mt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="overview-item overview-item--c2">
                        <div className="overview__inner">
                            <div className="overview-box clearfix">
                                <div className="icon">
                                </div>
                                <div className="text">
                                    <h2><i className="fa fa-inr" aria-hidden="true"></i> 7000</h2>
                                    <span>Total Amount Spent</span>
                                    <div className="mt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="overview-item overview-item--c3">
                        <div className="overview__inner">
                            <div className="overview-box clearfix">
                                <div className="icon">
                                </div>
                                <div className="text">
                                    <h2><i className="fa fa-inr" aria-hidden="true"></i> 1,086</h2>
                                    <span>This week Collection</span>
                                    <div className="mt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="overview-item overview-item--c4">
                        <div className="overview__inner">
                            <div className="overview-box clearfix">
                                <div className="icon">
                                </div>
                                <div className="text">
                                    <h2><i className="fa fa-inr" aria-hidden="true"></i> 3,20,000</h2>
                                    <span>Expected Collection</span>
                                    <div className="mt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="au-card au-card--no-shadow au-card--no-pad m-b-40">
                    <div className="au-card-title">
                        <div className="bg-overlay bg-overlay--blue"></div>
                        <h3>
                            <i className="fa fa-calendar fa-md"></i>Current Month Summary</h3>
                        <button className="au-btn-plus">
                            <i className="fa fa-plus fa-md"></i>
                        </button>
                    </div>
                    <div className="au-task js-list-load">
                        <div className="au-task__title">
                            <p>26 April, 2018</p>
                        </div>
                        <div className="au-task-list js-scrollbar3">
                            <div className="au-task__item au-task__item--danger">
                                <div className="au-task__item-inner">
                                    <h5 className="task">
                                        <a href="#">Meeting about Society Wellfare</a>
                                    </h5>
                                    <span className="time">10:00 AM</span>
                                </div>
                            </div>
                            <div className="au-task__item au-task__item--warning">
                                <div className="au-task__item-inner">
                                    <h5 className="task">
                                        <a href="#">Sanjay Jariya Paid 3000 RS</a>
                                    </h5>
                                    <span className="time">11:00 AM</span>
                                </div>
                            </div>
                            <div className="au-task__item au-task__item--primary">
                                <div className="au-task__item-inner">
                                    <h5 className="task">
                                        <a href="#">Cleaning Work done!</a>
                                    </h5>
                                    <span className="time">02:00 PM</span>
                                </div>
                            </div>
                            
                        </div>
                        <div className="au-task__footer">
                            <button className="au-btn au-btn-load js-load-btn">load more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;