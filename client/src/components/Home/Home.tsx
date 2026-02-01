import React, { useEffect } from 'react';
import './Home.css';

const Home: React.FC = () => {
  useEffect(() => {
    // nothing for now
  }, []);

  return (
    <div>
      <div className="row m-t-25">
        <div className="col-sm-6 col-lg-3">
          <div className="overview-item overview-item--c1">
            <div className="overview__inner">
              <div className="overview-box clearfix">
                <div className="icon"></div>
                <div className="text">
                  <h2>
                    <i className="fa fa-inr" aria-hidden="true"></i> 47300
                  </h2>
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
                <div className="icon"></div>
                <div className="text">
                  <h2>
                    <i className="fa fa-inr" aria-hidden="true"></i> 7000
                  </h2>
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
                <div className="icon"></div>
                <div className="text">
                  <h2>
                    <i className="fa fa-inr" aria-hidden="true"></i> 1,086
                  </h2>
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
                <div className="icon"></div>
                <div className="text">
                  <h2>
                    <i className="fa fa-inr" aria-hidden="true"></i> 3,20,000
                  </h2>
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
              <i className="fa fa-calendar fa-md"></i>Current Month Summary
            </h3>
            <button className="au-btn-plus">
              <i className="fa fa-plus fa-md"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
