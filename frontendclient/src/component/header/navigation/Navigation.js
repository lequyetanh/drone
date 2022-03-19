// @flow
import React, {Fragment, useState, useEffect} from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import * as typeProductAction  from './../../../actions/typeProductAction'
import { useSelector, useDispatch } from 'react-redux';

export function Navigation(props) {

  const dispatch = useDispatch();
  const history = useHistory();

  const allTypeProduct = useSelector((state) => state.allTypeProduct)
  const { loadingAllTypeProduct, typeProduct, errorAllTypeProduct} = allTypeProduct;

  useEffect(() => {
    dispatch(typeProductAction.getAllTypeProduct());
  }, [])

  function navigate(name){
    console.log(name)
    return history.push(`/typeProduct/${name}/1/next/0`);
  }

  return (
    <Fragment>
      	<div className="navbar-inner">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="agileits-navi_search">
                <form className="form" action="#" method="post">
                  <select id="agileinfo-nav_search" name="agileinfo_search" onChange={(e) =>navigate(e.target.value)} className="border" required="">

                    { typeProduct && typeProduct.map(item => (
                         <option key={item.id} value={item.name} >{item.name}</option>
                    ))}

                  </select>
                </form>
              </div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto text-center mr-xl-5">
                  <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Electronics
                    </a>
                    <div className="dropdown-menu">
                      <div className="agile_inner_drop_nav_info p-4">
                        <h5 className="mb-3">Mobiles, Computers</h5>
                        <div className="row">
                          <div className="col-sm-6 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li>
                                <a href="product.html">All Mobile Phones</a>
                              </li>
                              <li>
                                <a href="product.html">All Mobile Accessories</a>
                              </li>
                              <li>
                                <a href="product.html">Cases & Covers</a>
                              </li>
                              <li>
                                <a href="product.html">Screen Protectors</a>
                              </li>
                              <li>
                                <a href="product.html">Power Banks</a>
                              </li>
                              <li>
                                <a href="product.html">All Certified Refurbished</a>
                              </li>
                              <li>
                                <a href="product.html">Tablets</a>
                              </li>
                              <li>
                                <a href="product.html">Wearable Devices</a>
                              </li>
                              <li>
                                <a href="product.html">Smart Home</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-6 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li>
                                <a href="product.html">Laptops</a>
                              </li>
                              <li>
                                <a href="product.html">Drives & Storage</a>
                              </li>
                              <li>
                                <a href="product.html">Printers & Ink</a>
                              </li>
                              <li>
                                <a href="product.html">Networking Devices</a>
                              </li>
                              <li>
                                <a href="product.html">Computer Accessories</a>
                              </li>
                              <li>
                                <a href="product.html">Game Zone</a>
                              </li>
                              <li>
                                <a href="product.html">Software</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Appliances
                    </a>
                    <div className="dropdown-menu">
                      <div className="agile_inner_drop_nav_info p-4">
                        <h5 className="mb-3">TV, Appliances, Electronics</h5>
                        <div className="row">
                          <div className="col-sm-6 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li>
                                <a href="product2.html">Televisions</a>
                              </li>
                              <li>
                                <a href="product2.html">Home Entertainment Systems</a>
                              </li>
                              <li>
                                <a href="product2.html">Headphones</a>
                              </li>
                              <li>
                                <a href="product2.html">Speakers</a>
                              </li>
                              <li>
                                <a href="product2.html">MP3, Media Players & Accessories</a>
                              </li>
                              <li>
                                <a href="product2.html">Audio & Video Accessories</a>
                              </li>
                              <li>
                                <a href="product2.html">Cameras</a>
                              </li>
                              <li>
                                <a href="product2.html">DSLR Cameras</a>
                              </li>
                              <li>
                                <a href="product2.html">Camera Accessories</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-6 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li>
                                <a href="product2.html">Musical Instruments</a>
                              </li>
                              <li>
                                <a href="product2.html">Gaming Consoles</a>
                              </li>
                              <li>
                                <a href="product2.html">All Electronics</a>
                              </li>
                              <li>
                                <a href="product2.html">Air Conditioners</a>
                              </li>
                              <li>
                                <a href="product2.html">Refrigerators</a>
                              </li>
                              <li>
                                <a href="product2.html">Washing Machines</a>
                              </li>
                              <li>
                                <a href="product2.html">Kitchen & Home Appliances</a>
                              </li>
                              <li>
                                <a href="product2.html">Heating & Cooling Appliances</a>
                              </li>
                              <li>
                                <a href="product2.html">All Appliances</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                    <a className="nav-link" href="product.html">New Arrivals</a>
                  </li>
                  <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Pages
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="product.html">Product 1</a>
                      <a className="dropdown-item" href="product2.html">Product 2</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="single.html">Single Product 1</a>
                      <a className="dropdown-item" href="single2.html">Single Product 2</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="checkout.html">Checkout Page</a>
                      <a className="dropdown-item" href="payment.html">Payment Page</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                  </li>
                  <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                    <Link className="nav-link" to="/about">About Us</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
    </Fragment>
  );
};