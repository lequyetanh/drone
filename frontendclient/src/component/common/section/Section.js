// @flow 
import * as React from 'react';
import { Fragment } from 'react';

function Section() {
  return (
    <Fragment>
      	<div className="join-w3l1 py-sm-5 py-4">
          <div className="container py-xl-4 py-lg-2">
            <div className="row">
              <div className="col-lg-6">
                <div className="join-agile text-left p-4">
                  <div className="row">
                    <div className="col-sm-7 offer-name">
                      <h6>Smooth, Rich & Loud Audio</h6>
                      <h4 className="mt-2 mb-3">Branded Headphones</h4>
                      <p>Sale up to 25% off all in store</p>
                    </div>
                    <div className="col-sm-5 offerimg-w3l">
                      <img src="assets/classNameName/off1.png" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-lg-0 mt-5">
                <div className="join-agile text-left p-4">
                  <div className="row ">
                    <div className="col-sm-7 offer-name">
                      <h6>A Bigger Phone</h6>
                      <h4 className="mt-2 mb-3">Smart Phones 5</h4>
                      <p>Free shipping order over $100</p>
                    </div>
                    <div className="col-sm-5 offerimg-w3l">
                      <img src="assets/classNameName/off2.png" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
};

export default Section;