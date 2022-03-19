import React, {Fragment, useState, useEffect} from 'react';
import './Cart.scss';
import {Link, Redirect} from 'react-router-dom';
import {useHistory} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux';
import * as userAction from './../../../actions/userActions'
import { numberWithCommas } from './../../content/function';

function Cart() {
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

  const removeProductFromCart = (id) => {
    for (let i = 0; i < userInfor.user.package.length; i++) {
      if (userInfor.user.package[i].id == id) {
        userInfor
          .user
          .package
          .splice(i, 1);
      }
    }
    dispatch(userAction.updateUser(userInfor.user.id, userInfor.user));
    // console.log(userInfor.user.package)
  }

  const updateUserInfor = (id) => {
    dispatch(userAction.updateUser(id, userInfor.user));
  }

  const increaseProduct = (id) => {
    for (let i = 0; i < userInfor.user.package.length; i++) {
      if (userInfor.user.package[i].id == id) {
        userInfor.user.package[i].quatity += 1;
      }
    }
    dispatch(userAction.updateUser(userInfor.user.id, userInfor.user));
  }

  const descreaseProduct = (id, quatity) => {
    if(quatity == 1 ){
      removeProductFromCart(id);
    }else{
      for (let i = 0; i < userInfor.user.package.length; i++) {
        if (userInfor.user.package[i].id == id) {
          userInfor.user.package[i].quatity -= 1;
        }
      }
      dispatch(userAction.updateUser(userInfor.user.id, userInfor.user));
    }
  }

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
      {userInfor
        ? <Fragment>
            <div className="privacy py-sm-5 py-4">
              <div className="container py-xl-4 py-lg-2">
                <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                  <span>C</span>heckout
                </h3>
                <div className="checkout-right">
                  <h4 className="mb-sm-4 mb-3">Your shopping cart contains: {userInfor.user.package.length}
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
                          <th>Remove</th>
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
                                    <div className="entry value-minus" onClick={() => descreaseProduct(product.id, product.quatity)}>&nbsp;</div>
                                    <div className="entry value">
                                      <span>{product.quatity}</span>
                                    </div>
                                    <div
                                      className="entry value-plus active"
                                      onClick={() => increaseProduct(product.id)}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="invert">{product.name}</td>
                              <td className="invert">{numberWithCommas(product.quatity * product.new_price)}
                                VND</td>
                              <td className="invert">
                                <a
                                  className="remove pointer flexbox-center-center"
                                  title="Remove this item"
                                  onClick={() => removeProductFromCart(product.id)}>
                                  <i className="far fa-trash-alt"></i>
                                </a>
                              </td>
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

                <div className="checkout-left">
                  <div className="address_form_agile mt-sm-5 mt-4">
                    <h4 className="mb-sm-4 mb-3">Add a new Details</h4>
                    <form
                      action="payment.html"
                      method="post"
                      className="creditly-card-form agileinfo_form">
                      <div className="creditly-wrapper wthree, w3_agileits_wrapper">
                        <div className="information-wrapper">
                          <div className="first-row">
                            <div className="controls form-group">
                              <input
                                className="billing-address-name form-control"
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={userInfor.user.name}
                                required=""/>
                            </div>
                            <div className="w3_agileits_card_number_grids">
                              <div className="w3_agileits_card_number_grid_left form-group">
                                <div className="controls">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Mobile Number"
                                    name="number"
                                    value={userInfor.user.phone_number}
                                    onChange={(e) => {userInfor.user.phone_number = e.target.value}}
                                    required=""/>
                                </div>
                              </div>
                              <div className="w3_agileits_card_number_grid_right form-group">
                                <div className="controls">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Address"
                                    name="address"
                                    value={userInfor.user.address}
                                    // neu viet là userInfor.user.address ? userInfor.user.address : '' thì sẽ bị lỗi
                                    onChange={(e) => userInfor.user.address = e.target.value}
                                    required=""/>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button onClick={() => updateUserInfor(userInfor.user.id)} className="submit check_out btn">Lưu Thông Tin</button>
                        </div>
                      </div>
                    </form>
                    <div className="checkout-right-basket">
                      <Link to="/user/checkout">Make a Payment
                        <span className="far fa-hand-point-right"></span>
                      </Link>
                    </div>
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
    </Fragment>
  );
}

export default Cart;
