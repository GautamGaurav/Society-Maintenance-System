import react, { useState, useEffect } from 'react';
import './MainContent.css';

import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar';


function MainContent(props) {
    return (
        <div className="page-container">
            <Sidebar></Sidebar>
            <Header></Header>
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-md-12">
                            {props.children}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright">
                                    <p>Designed, Developed and Maintained by Gaurav Gautam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent;