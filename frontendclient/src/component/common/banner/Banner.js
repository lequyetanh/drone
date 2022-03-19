// @flow
import * as React from 'react';
import {Fragment} from 'react';
import {Link} from 'react-router-dom'

function Banner(props) {
  return (
    <Fragment>
      <div className="services-breadcrumb">
        <div className="agile_inner_breadcrumb">
          <div className="container flexbox-center-start">
            <ul className="w3_short flexbox-center-start">
              <li className="flexbox-center-start">
                <Link to="/">Home</Link>
                <i>|</i>
              </li>
              <li>{props.name}</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;