// @flow
import React, {Fragment, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom'
import * as userAction from './../../../actions/userActions'
import * as droneAction from './../../../actions/droneAction';
import {useHistory} from "react-router-dom";
import { numberWithCommas } from './../../content/function';

export default function UserDetail() {
  const userId = useParams().id;

  const dispatch = useDispatch();

  let history = useHistory()
  let userInforReducer = useSelector((state) => state.userInfor)
  const {loading, userInfor, error, login} = userInforReducer

  useEffect(() => {
    // console.log(login)
    // console.log(userInforReducer)
    if(login == false){
      // console.log("ahihi")
      return history.push("/")
    }
  }, [userInforReducer])
  
  const totalPrice = (listProduct) => {
    let total = 0;
    for (let i = 0; i < listProduct.length; i++) {
      total += listProduct[i].new_price * listProduct[i].quatity;
    }
    return (
      <span>{numberWithCommas(total)} VND</span>
    )
  }

  return (
    <Fragment>
      <div class="container wrapp">
        {userInfor ? 
          <Fragment>
            <div class="information">
              <div class="image">
                <img class="dimension" src={`/assets/icon/${userInfor.user.avatar}`}></img>
              </div>
              <div class="infor">
              <h2 class="userName">User Name: {userInfor.user.name}</h2>
              <h3 class="address">Address: {userInfor.user.address ? userInfor.user.address : "Null"}</h3>
              <h3 class="phoneNumber">Phone Number: {userInfor.user.phone_number}</h3>
              <h3 class="email">Email: {userInfor.user.email}</h3>
              <h3 class="status">Status: Null</h3>
              </div>
            </div>
            <div class="cart"></div>
          </Fragment>
          : ""
      }
      </div>

      {userInfor
        ? <Fragment>
            <div className="privacy py-sm-5 py-4">
              <div className="container py-xl-4 py-lg-2">
                <div className="checkout-right">
                  <h4 className="mb-sm-4 mb-3">User shopping cart contains: {userInfor.user.package.length}
                    Products
                  </h4>
                  <div className="table-responsive">
                    <table className="timetable_sub">
                      <thead>
                        <tr>
                          <th>SL No.</th>
                          <th>Product</th>
                          <th>Quality</th>
                          <th>Product Name</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userInfor
                          .user
                          .package
                          .map(product => (
                            <tr key={product.id} className="rem1">
                              <td className="invert">{product.id}</td>
                              <td className="invert-image">
                                <a href="single.html">
                                  <img src={product.image[0]} alt={product.name} className="img-responsive"/>
                                </a>
                              </td>
                              <td
                                className="invert"
                                style={{
                                width: '150px'
                              }}>
                                <div className="quantity">
                                  <div className="quantity-select">
                                    <div className="entry value blackcolor">
                                      {product.quatity}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="invert">{product.name}</td>
                              <td className="invert">{numberWithCommas(product.quatity * product.new_price)}
                                VND</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="pull-right mart-20">
                  <div className="cart-totals-row">
                    <h5 className="cart-total-title">Cart Totals</h5>
                  </div>
                  <div className="cart-totals-row mart-10">
                    <span>Cart Subtotal:</span>
                    {totalPrice(userInfor.user.package)}
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        : 
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
}
        <iframe src={`http://localhost:4200/home/${userId}`} width="100%" height="1000px"></iframe>
    </Fragment>
  );
};