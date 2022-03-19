// @flow
import * as React from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export function BottomHeader(props) {

  window.scrollTo({ left: 0, top: 0 });
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  
  // console.log(search)
  return (
    <Fragment>
      	<div className="header-bot">
          <div className="container">
            <div className="row header-bot_inner_wthreeinfo_header_mid">
              <div className="col-md-3 logo_agile">
                <h1 className="text-center">
                  <Link to="/" className="font-weight-bold font-italic">
                    <img src="/assets/images/logo2.png" alt=" " className="img-fluid" />Shop Store
                  </Link>
                </h1>
              </div>
              <div className="col-md-9 mt-4 mb-md-0 mb-4">
                <div className="row flexbox-center-start">
                  <div className="col-10 agileits_search">
                    <form className="form-inline" action="#" method="post">
                      <input className="form-control mr-sm-2" onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search" required />
                      <button className="btn my-2 my-sm-0" type="submit"><Link to={`/search/${search}`}>Search</Link></button>
                    </form>
                  </div>
                  <div className="col-2 top_nav_right text-center mt-sm-0 mt-2">
                    <Link to="/user/cart" className="wthreecartaits wthreecartaits2 cart cart box_1">
                      <form action="#" method="post" className="last">
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="display" value="1" />
                        <button className="btn w3view-cart" type="submit" name="submit" value="">
                          <i className="fas fa-cart-arrow-down"></i>
                        </button>
                      </form>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
};