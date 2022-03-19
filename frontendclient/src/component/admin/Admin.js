// @flow
import * as React from 'react';
import {Fragment} from 'react';
import './Admin.scss';
import {Link, Redirect} from 'react-router-dom';

export default function Admin() {

  return (
    <Fragment>
      <div className="privacy py-sm-5 py-4">
        <div className="container py-xl-4 py-lg-2">
          <div className="checkout-right">
            <div id="parentHorizontalTab">
              <ul className="resp-tabs-list hor_1">
              <button className="submit check_out btn"><Link className="" to="/admin/product/1/next/1">Product</Link></button>
              <button className="submit check_out btn"><Link className="" to="/admin/user">User</Link></button>
              <button className="submit check_out btn"><Link className="" to="/admin/drone">Drone</Link></button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};