import react, { useState, useEffect } from 'react';
import { Link, browerHistory } from 'react-router';
import './MainContent.css';

import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar';


function MainContent(props) {
    return (
        <div class="page-container">
            <Sidebar></Sidebar>
            <Header></Header>
            <div class="main-content">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <div class="row">
                        <div class="col-md-12">
                            {props.children}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="copyright">
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