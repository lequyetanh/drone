import React, {Fragment, useState, useEffect} from 'react';
// import * as service from './../../services/dataService';
import './About.scss';
import { Link } from 'react-router-dom';

function About() {
  window.scrollTo({ left: 0, top: 0 });

  return (
    <Fragment>

        <div className="welcome py-sm-5 py-4">
          <div className="container py-xl-4 py-lg-2">
            <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
              <span>A</span>bout
              <span>U</span>s</h3>
            <div className="row">
              <div className="col-lg-6 welcome-left">
                <h3>Welcome</h3>
                <h4 className="my-sm-3 my-2">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta erat sit amet eros sagittis, quis hendrerit
                  libero aliquam. Fusce semper augue ac dolor efficitur, a pretium metus pellentesque.</p>
              </div>
              <div className="col-lg-6 welcome-right-top mt-lg-0 mt-sm-5 mt-4">
                <img src="/assets/images/ab.jpg" className="img-fluid" alt=" " />
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials py-sm-5 py-4">
          <div className="container py-xl-4 py-lg-2">
            <h3 className="tittle-w3l text-center text-white mb-lg-5 mb-sm-4 mb-3">
              <span>O</span>ur
              <span>C</span>ustomers
              <span>S</span>ays</h3>
            <div className="row gallery-index">
              <div className="col-sm-6 med-testi-grid">
                <div className="med-testi test-tooltip rounded p-4">
                  <p>"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="row med-testi-left my-5">
                  <div className="col-lg-2 col-3 w3ls-med-testi-img">
                    <img src="/assets/images/user.jpg" alt=" " className="img-fluid rounded-circle" />
                  </div>
                  <div className="col-lg-10 col-9 med-testi-txt">
                    <h4 className="font-weight-bold mb-lg-1 mb-2">Tyson</h4>
                    <p>fames ac turpis</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 med-testi-grid">
                <div className="med-testi test-tooltip rounded p-4">
                  <p>"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="row med-testi-left my-5">
                  <div className="col-lg-2 col-3 w3ls-med-testi-img">
                    <img src="/assets/images/user.jpg" alt=" " className="img-fluid rounded-circle" />
                  </div>
                  <div className="col-lg-10 col-9 med-testi-txt">
                    <h4 className="font-weight-bold mb-lg-1 mb-2">Alejandra</h4>
                    <p>fames ac turpis</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 med-testi-grid">
                <div className="med-testi test-tooltip rounded p-4">
                  <p>"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="row med-testi-left mt-sm-5 my-5">
                  <div className="col-lg-2 col-3 w3ls-med-testi-img">
                    <img src="/assets/images/user.jpg" alt=" " className="img-fluid rounded-circle" />
                  </div>
                  <div className="col-lg-10 col-9 med-testi-txt">
                    <h4 className="font-weight-bold mb-lg-1 mb-2">Charles</h4>
                    <p>fames ac turpis</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 med-testi-grid">
                <div className="med-testi test-tooltip rounded p-4">
                  <p>"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="row med-testi-left mt-5">
                  <div className="col-lg-2 col-3 w3ls-med-testi-img">
                    <img src="/assets/images/user.jpg" alt=" " className="img-fluid rounded-circle" />
                  </div>
                  <div className="col-lg-10 col-9 med-testi-txt">
                    <h4 className="font-weight-bold mb-lg-1 mb-2">Jessie</h4>
                    <p>fames ac turpis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default About;
