import react, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
            <div class="row m-t-25">
                <div class="col-sm-6 col-lg-3">
                    <div class="overview-item overview-item--c1">
                        <div class="overview__inner">
                            <div class="overview-box clearfix">
                                <div class="icon">
                                    <i class="zmdi zmdi-account-o"></i>
                                </div>
                                <div class="text">
                                    <h2>Rs 47300</h2>
                                    <span>Total Collection</span>
                                    <div className="mt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="overview-item overview-item--c2">
                        <div class="overview__inner">
                            <div class="overview-box clearfix">
                                <div class="icon">
                                    <i class="zmdi zmdi-shopping-cart"></i>
                                </div>
                                <div class="text">
                                    <h2>7000</h2>
                                    <span>Total Amount Spent</span>
                                    <div className="mt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="overview-item overview-item--c3">
                        <div class="overview__inner">
                            <div class="overview-box clearfix">
                                <div class="icon">
                                    <i class="zmdi zmdi-calendar-note"></i>
                                </div>
                                <div class="text">
                                    <h2>1,086</h2>
                                    <span>This week Collection</span>
                                    <div className="mt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="overview-item overview-item--c4">
                        <div class="overview__inner">
                            <div class="overview-box clearfix">
                                <div class="icon">
                                    <i class="zmdi zmdi-money"></i>
                                </div>
                                <div class="text">
                                    <h2>3,20,000</h2>
                                    <span>Expected Collection</span>
                                    <div className="mt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="au-card au-card--no-shadow au-card--no-pad m-b-40">
                    <div class="au-card-title">
                        <div class="bg-overlay bg-overlay--blue"></div>
                        <h3>
                            <i class="zmdi zmdi-account-calendar"></i>Current Month Details</h3>
                        <button class="au-btn-plus">
                            <i class="zmdi zmdi-plus"></i>
                        </button>
                    </div>
                    <div class="au-task js-list-load">
                        <div class="au-task__title">
                            <p>26 April, 2018</p>
                        </div>
                        <div class="au-task-list js-scrollbar3">
                            <div class="au-task__item au-task__item--danger">
                                <div class="au-task__item-inner">
                                    <h5 class="task">
                                        <a href="#">Meeting about plan for Admin Template 2018</a>
                                    </h5>
                                    <span class="time">10:00 AM</span>
                                </div>
                            </div>
                            <div class="au-task__item au-task__item--warning">
                                <div class="au-task__item-inner">
                                    <h5 class="task">
                                        <a href="#">Create new task for Dashboard</a>
                                    </h5>
                                    <span class="time">11:00 AM</span>
                                </div>
                            </div>
                            <div class="au-task__item au-task__item--primary">
                                <div class="au-task__item-inner">
                                    <h5 class="task">
                                        <a href="#">Meeting about plan for Admin Template 2018</a>
                                    </h5>
                                    <span class="time">02:00 PM</span>
                                </div>
                            </div>
                            <div class="au-task__item au-task__item--success">
                                <div class="au-task__item-inner">
                                    <h5 class="task">
                                        <a href="#">Create new task for Dashboard</a>
                                    </h5>
                                    <span class="time">03:30 PM</span>
                                </div>
                            </div>
                            <div class="au-task__item au-task__item--danger js-load-item">
                                <div class="au-task__item-inner">
                                    <h5 class="task">
                                        <a href="#">Meeting about plan for Admin Template 2018</a>
                                    </h5>
                                    <span class="time">10:00 AM</span>
                                </div>
                            </div>
                            <div class="au-task__item au-task__item--warning js-load-item">
                                <div class="au-task__item-inner">
                                    <h5 class="task">
                                        <a href="#">Create new task for Dashboard</a>
                                    </h5>
                                    <span class="time">11:00 AM</span>
                                </div>
                            </div>
                        </div>
                        <div class="au-task__footer">
                            <button class="au-btn au-btn-load js-load-btn">load more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;