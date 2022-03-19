import React, {Fragment, useState, useEffect} from 'react';
import './Checkout.scss';
import {Link, Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import * as userAction  from './../../../actions/userActions'

function Checkout() {

  const dispatch = useDispatch();
  let history = useHistory();

  let userInforReducer = useSelector((state) => state.userInfor)
  const { loading, userInfor, error } = userInforReducer
  const [privacy, setPrivacy] = useState('Cash on delivery (COD)')

  // console.log(privacy)

  useEffect(()=>{
    dispatch(userAction.getUserFromToken())
  }, [])

  const totalPrice = (listProduct) => {
    let total = 0 ;
    for(let i=0; i<listProduct.length; i++){
      total += listProduct[i].new_price*listProduct[i].quatity;
    }
    return (
      <span>{total} VND</span>
    )
  }

  const checkout = () => {
    dispatch(userAction.updateUser(userInfor.user.id, {...userInfor.user, checkOut: 2}))
    return history.push("/")
  }

  return (
    <Fragment>
        <div className="privacy py-sm-5 py-4">
          <div className="container py-xl-4 py-lg-2">
            <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
              <span>P</span>ayment</h3>
            <div className="checkout-right">
              <div id="parentHorizontalTab">
                <ul className="resp-tabs-list hor_1">
                  <li className={privacy == 'Cash on delivery (COD)' ? 'privacy-active' : ''} onClick={() => setPrivacy('Cash on delivery (COD)')}>Thanh Toán Khi Nhận Hàng</li>
                  <li className={privacy == 'Credit/Debit' ? 'privacy-active' : ''} onClick={() => setPrivacy('Credit/Debit')}>Credit/Debit</li>
                  <li className={privacy == 'Net Banking' ? 'privacy-active' : ''} onClick={() => setPrivacy('Net Banking')}>Net Banking</li>
                  <li className={privacy == 'Paypal Account' ? 'privacy-active' : ''} onClick={() => setPrivacy('Paypal Account')}>Paypal Account</li>
                </ul>
                <div className="resp-tabs-container hor_1 padl-50 padr-50">

                  <div className={privacy == 'Cash on delivery (COD)' ? '' : 'privacy-noactive'}>
                    <div className="vertical_post check_box_agile">
                      <button className="submit mt-3">
                        <span onClick={()=>checkout()}>Đặt Hàng</span>
                      </button>
                    </div>
                  </div>
                  <div className={privacy == 'Credit/Debit' ? '' : 'privacy-noactive'}>
                    <form action="#" method="post" className="creditly-card-form agileinfo_form">
                      <div className="creditly-wrapper wthree, w3_agileits_wrapper">
                        <div className="credit-card-wrapper">
                          <div className="first-row form-group">
                            <div className="controls">
                              <label className="control-label">Name on Card</label>
                              <input className="billing-address-name form-control" type="text" name="name" placeholder="John Smith" />
                            </div>
                            <div className="w3_agileits_card_number_grids my-3">
                              <div className="w3_agileits_card_number_grid_left">
                                <div className="controls">
                                  <label className="control-label">Card Number</label>
                                  <input className="number credit-card-number form-control" type="text" name="number" inputMode="numeric" autoComplete="cc-number" placeholder="&#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149;" />
                                </div>
                              </div>
                              <div className="w3_agileits_card_number_grid_right mt-2">
                                <div className="controls">
                                  <label className="control-label">CVV</label>
                                  <input className="security-code form-control" inputMode="numeric" type="text" name="security-code" placeholder="&#149;&#149;&#149;" />
                                </div>
                              </div>
                              <div className="clear"> </div>
                            </div>
                            <div className="controls">
                              <label className="control-label">Expiration Date</label>
                              <input className="expiration-month-and-year form-control" type="text" name="expiration-month-and-year" placeholder="MM / YY" />
                            </div>
                          </div>
                          <button className="submit mt-3">
                            <span>Make a payment </span>
                          </button>
                        </div>
                      </div>
                    </form>

                  </div>
                  <div className={privacy == 'Net Banking' ? '' : 'privacy-noactive'}>
                    <div className="vertical_post">
                      <form action="#" method="post">
                        <h5>Select From Popular Banks</h5>
                        <div className="swit-radio">
                          <div className="check_box_one">
                            <div className="radio_one">
                              <label>
                                <input type="radio" name="radio" />
                                <i></i>Syndicate Bank</label>
                            </div>
                          </div>
                          <div className="check_box_one">
                            <div className="radio_one">
                              <label>
                                <input type="radio" name="radio" />
                                <i></i>Bank of Baroda</label>
                            </div>
                          </div>
                          <div className="check_box_one">
                            <div className="radio_one">
                              <label>
                                <input type="radio" name="radio" />
                                <i></i>Canara Bank</label>
                            </div>
                          </div>
                          <div className="check_box_one">
                            <div className="radio_one">
                              <label>
                                <input type="radio" name="radio" />
                                <i></i>ICICI Bank</label>
                            </div>
                          </div>
                          <div className="check_box_one">
                            <div className="radio_one">
                              <label>
                                <input type="radio" name="radio" />
                                <i></i>State Bank Of India</label>
                            </div>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                        <h5>Or Select Other Bank</h5>
                        <div className="section_room_pay">
                          <select className="year">
                            <option value="">=== Other Banks ===</option>
                            <option value="ALB-NA">Allahabad Bank NetBanking</option>
                            <option value="ADB-NA">Andhra Bank</option>
                            <option value="BBK-NA">Bank of Bahrain and Kuwait NetBanking</option>
                            <option value="BBC-NA">Bank of Baroda Corporate NetBanking</option>
                            <option value="BBR-NA">Bank of Baroda Retail NetBanking</option>
                            <option value="BOI-NA">Bank of India NetBanking</option>
                            <option value="BOM-NA">Bank of Maharashtra NetBanking</option>
                            <option value="CSB-NA">Catholic Syrian Bank NetBanking</option>
                            <option value="CBI-NA">Central Bank of India</option>
                            <option value="CUB-NA">City Union Bank NetBanking</option>
                            <option value="CRP-NA">Corporation Bank</option>
                            <option value="DBK-NA">Deutsche Bank NetBanking</option>
                            <option value="DCB-NA">Development Credit Bank</option>
                            <option value="DC2-NA">Development Credit Bank - Corporate</option>
                            <option value="DLB-NA">Dhanlaxmi Bank NetBanking</option>
                            <option value="FBK-NA">Federal Bank NetBanking</option>
                            <option value="IDS-NA">Indusind Bank NetBanking</option>
                            <option value="IOB-NA">Indian Overseas Bank</option>
                            <option value="ING-NA">ING Vysya Bank (now Kotak)</option>
                            <option value="JKB-NA">Jammu and Kashmir NetBanking</option>
                            <option value="JSB-NA">Janata Sahakari Bank Limited</option>
                            <option value="KBL-NA">Karnataka Bank NetBanking</option>
                            <option value="KVB-NA">Karur Vysya Bank NetBanking</option>
                            <option value="LVR-NA">Lakshmi Vilas Bank NetBanking</option>
                            <option value="OBC-NA">Oriental Bank of Commerce NetBanking</option>
                            <option value="CPN-NA">PNB Corporate NetBanking</option>
                            <option value="PNB-NA">PNB NetBanking</option>
                            <option value="RSD-DIRECT">Rajasthan State Co-operative Bank-Debit Card</option>
                            <option value="RBS-NA">RBS (The Royal Bank of Scotland)</option>
                            <option value="SWB-NA">Saraswat Bank NetBanking</option>
                            <option value="SBJ-NA">SB Bikaner and Jaipur NetBanking</option>
                            <option value="SBH-NA">SB Hyderabad NetBanking</option>
                            <option value="SBM-NA">SB Mysore NetBanking</option>
                            <option value="SBT-NA">SB Travancore NetBanking</option>
                            <option value="SVC-NA">Shamrao Vitthal Co-operative Bank</option>
                            <option value="SIB-NA">South Indian Bank NetBanking</option>
                            <option value="SBP-NA">State Bank of Patiala NetBanking</option>
                            <option value="SYD-NA">Syndicate Bank NetBanking</option>
                            <option value="TNC-NA">Tamil Nadu State Co-operative Bank NetBanking</option>
                            <option value="UCO-NA">UCO Bank NetBanking</option>
                            <option value="UBI-NA">Union Bank NetBanking</option>
                            <option value="UNI-NA">United Bank of India NetBanking</option>
                            <option value="VJB-NA">Vijaya Bank NetBanking</option>
                          </select>
                        </div>
                        <input type="submit" value="PAY NOW" />
                      </form>
                    </div>
                  </div>
                  <div className={privacy == 'Paypal Account' ? '' : 'privacy-noactive'}>
                    <div id="tab4" className="tab-grid" style={{display: 'block'}}>
                      <div className="row">
                        <div className="col-md-6 pay-forms">
                          <img className="pp-img" src="/assets/images/paypal.png" alt="Image Alternative text" title="Image Title" />
                          <p>Important: You will be redirected to PayPal's website to securely complete your payment.</p>
                          <a className="btn btn-primary">Checkout via Paypal</a>
                        </div>
                        <div className="col-md-6 number-paymk">
                          <form action="#" method="post" className="creditly-card-form-2 shopf-sear-headinfo_form">
                            <section className="creditly-wrapper payf_wrapper">
                              <div className="credit-card-wrapper">
                                <div className="first-row form-group">
                                  <div className="controls">
                                    <label className="control-label">Card Holder </label>
                                    <input className="billing-address-name form-control" type="text" name="name" placeholder="John Smith" />
                                  </div>
                                  <div className="paymntf_card_number_grids my-2">
                                    <div className="fpay_card_number_grid_left">
                                      <div className="controls">
                                        <label className="control-label">Card Number</label>
                                        <input className="number credit-card-number-2 form-control" type="text" name="number" inputMode="numeric" autoComplete="cc-number" placeholder="•••• •••• •••• ••••" />
                                      </div>
                                    </div>
                                    <div className="fpay_card_number_grid_right mt-2">
                                      <div className="controls">
                                        <label className="control-label">CVV</label>
                                        <input className="security-code-2 form-control" inputMode="numeric" type="text" name="security-code" placeholder="•••" />
                                      </div>
                                    </div>
                                    <div className="clear"> </div>
                                  </div>
                                  <div className="controls">
                                    <label className="control-label">Valid Thru</label>
                                    <input className="expiration-month-and-year-2 form-control" type="text" name="expiration-month-and-year" placeholder="MM / YY" />
                                  </div>
                                </div>
                                <input className="submit" type="submit" value="Proceed Payment" />
                              </div>
                            </section>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default Checkout;
