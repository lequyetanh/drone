import React, {Fragment, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, useParams} from 'react-router-dom';
import './DetailPackage.scss';
import * as productAction from './../../../actions/productAction'
import * as userAction from './../../../actions/userActions'
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import RelatedPackage from '../../common/relatePackage/RelatePackage';
import { numberWithCommas } from './../function';

function DetailPackage() {
  window.scrollTo({ left: 0, top: 0 });

  const dispatch = useDispatch();

  const productItemId = useParams().id;
  console.log(productItemId) 
  // console.log(productItemId)
  const productItem = useSelector((state) => state.productFromId)
  const {loading, product, error} = productItem;

  const newProductReducer = useSelector((state) => state.newProduct);
  const topProductReducer = useSelector(state => state.topProduct);
  const productRelativeReducer = useSelector(state => state.productRelative);
  const userInforReducer = useSelector((state) => state.userInfor);

  const {loading: loadingNewProduct, product: newProduct, error: errorNewProduct} = newProductReducer;
  const {loading: loadingTopProduct, product: topProduct, error: errorTopProduct} = topProductReducer;
  const {loading: loadingProductRelative, product: productRelative, error: errorProductRelative} = productRelativeReducer;
  const {loading: loadingUserInfor, userInfor, error: errorUserInfor} = userInforReducer

  useEffect(() => {
    dispatch(productAction.getProductFromId(productItemId))
    dispatch(productAction.get8NewProduct());
    dispatch(productAction.get8TopProduct());
  }, [productItemId])

  useEffect(() => {
    if (product) {
      console.log(product)
      dispatch(productAction.get8ProductRelative(product.type, productItemId));
    }
  }, [productItem])

  const addProductToCart = (product) => {
    if (!userInfor) {
      alert("Bạn phải đăng nhập để sử dụng chức năng này");
      return false;
    }
    let equal = false;
    // event.preventDefault();
    userInfor
      .user
      .package
      .map(itemPackage => {
        if (itemPackage.id == product.id) {
          equal = true;
          alert("Bạn đã có sản phẩm trong giỏ hàng");
        }
      })
    if (equal == true) {
      return false;
    } else {
      userInfor
        .user
        .package
        .push({
          ...product,
          quatity: 1
        });
      // console.log(id, product) console.log(userInfor.user.package)
      dispatch(userAction.updateUser(userInfor.user.id, userInfor.user));
    }
  }

  return (
    <Fragment>
      {product ?
          <div className="banner-bootom-w3-agileits py-5">
            <div className="container py-xl-4 py-lg-2">
              <h3 className="tittle-w3l text-center mb-sm-4 mb-3" style={{marginLeft: "50px"}}>
                <span>M</span>o ta 
                <span> S</span>an pham
              </h3>
              <div className="row">
                <div className="col-lg-5 col-md-8 single-right-left ">
                  <div className="grid">
                    <div className="">
                      <ul className="slides">
                        <li>
                          <div className="thumb-image">
                            <img src={product.image[0]} className="img-fluid" alt={product.name} /> </div>
                        </li>
                      </ul>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7 single-right-left simpleCart_shelfItem">
                  <h3 className="mb-3">{product.name}</h3>
                  <p className="mb-3">
                    <span className="item_price">{numberWithCommas(product.old_price)} VND</span>
                    <del className="mx-2 font-weight-light">{numberWithCommas(product.new_price)} VND</del>
                    <label>Free delivery</label>
                  </p>
                  <div className="single-infoagile">
                    <ul>
                      <li className="mb-3">
                        Cash on Delivery Eligible.
                      </li>
                      <li className="mb-3">
                        Shipping Speed to Delivery.
                      </li>
                      <li className="mb-3">
                        EMIs from $655/month.
                      </li>
                      <li className="mb-3">
                        Bank OfferExtra 5% off* with Axis Bank Buzz Credit CardT&C
                      </li>
                    </ul>
                  </div>
                  <div className="product-single-w3l">
                    <p className="my-3">
                      <i className="far fa-hand-point-right mr-2"></i>
                      <label>1 Year</label>Manufacturer Warranty</p>
                    <div>
                      {product.information.map(item => (
                        <p className="mb-1">
                          {item}
                        </p>
                      ))}
                    </div>
                    <p className="my-sm-4 my-3">
                      <i className="fas fa-retweet mr-3"></i>Net banking & Credit/ Debit/ ATM card
                    </p>
                  </div>
                  <div className="occasion-cart">
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                      <input type="submit" name="submit" value="Add to cart" className="button"  onClick={() => addProductToCart(product)}/>
                    </div>
                  </div>
                </div>
              </div>
              <h3>Mô Tả: </h3>
              <ul>
                {product.content.map(item => (
                  <li className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>

            <div className="space50">&nbsp;</div>
              <div className="beta-products-list">
                <h2>Related Products</h2>
                {/* <RelatedPackage/> */}
                <div className="row">
                  {productRelative && productRelative.map(product => (
                      <div key={product.id} className="col-md-3 product-men mt-5">
                        <div className="men-pro-item simpleCart_shelfItem">
                          <div className="men-thumb-item text-center">
                            <img src={product.image[0]} alt={product.name}/>
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <Link to={`/productItem/${product.id}`} className="link-product-add-cart">Quick View</Link>
                              </div>
                            </div>
                          </div>
                          <span className="product-new-top">New</span>
                          <div className="item-info-product text-center border-top mt-4">
                            <h4 className="pt-1 name-product">
                              <Link to={`/productItem/${product.id}`}>{product.name}</Link>
                            </h4>
                            <div className="info-product-price my-2">
                              <span className="item_price">{numberWithCommas(product.old_price)}
                                VND</span>
                              <del className="fs-13">{numberWithCommas(product.new_price)}
                                VND</del>
                            </div>
                            <div
                              className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button btn"
                                onClick={() => addProductToCart(product)}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        : 
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      }
    </Fragment>
  );
}

export default DetailPackage;
