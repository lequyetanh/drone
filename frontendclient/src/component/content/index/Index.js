import React, {Fragment, useState, useEffect} from 'react';
import './Index.scss';
import * as productAction from './../../../actions/productAction'
import * as userAction from './../../../actions/userActions'
import {Link} from 'react-router-dom'
import Slide from './slide/Slide'
import {useDispatch, useSelector} from 'react-redux';
import RightContent from '../../common/rightContent/RightContent';
import { numberWithCommas } from './../function';

function Index() {
  window.scrollTo({ left: 0, top: 0 });
  const dispatch = useDispatch();

  const newProduct = useSelector((state) => state.newProduct);
  const userInforReducer = useSelector((state) => state.userInfor);
  const topProductReducer = useSelector(state => state.topProduct);
  const allTypeProductReducer = useSelector(state => state.allTypeProduct);
  // console.log(newProduct)
  const {loading, product, error} = newProduct;
  const {loading: loadingTopProduct, product: topProduct, error: errorTopProduct} = topProductReducer;
  const {loading: loadingUserInfor, userInfor, error: errorUserInfor} = userInforReducer
  const {loading: loadingTypeProduct, typeProduct, error: errorTypeProduct} = allTypeProductReducer

  useEffect(() => {
    dispatch(productAction.get8NewProduct());
    dispatch(productAction.get8TopProduct());
  }, [])
  // console.log(phimle)

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
      {product && <Slide product={product}></Slide>}
      <div className="ads-grid py-sm-5 py-4">
        <div className="container py-xl-4 py-lg-2">
          <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
            <span>O</span>ur
            <span>N</span>ew
            <span>P</span>roducts</h3>
          <div className="row">
            <div className="agileinfo-ads-display col-lg-9">
              <div className="wrapper">
                <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                  <h3 className="heading-tittle text-center font-italic">New Product</h3>
                  <div className="row">
                    {product && product.map(product => (
                      <div key={product.id} className="col-md-4 product-men mt-5">
                        <div className="men-pro-item simpleCart_shelfItem">
                          <div className="men-thumb-item text-center">
                            <Link to={`/productItem/${product.id}`}>
                              <img src={product.image[0]} alt={product.name}/>
                              <div className="men-cart-pro">
                                <div className="inner-men-cart-pro">
                                  <div className="link-product-add-cart">Quick View</div>
                                </div>
                              </div>
                            </Link>
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
                <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                  <h3 className="heading-tittle text-center font-italic">Top Product</h3>
                  <div className="row">
                    {topProduct && topProduct.map(product => (
                      <div key={product.id} className="col-md-4 product-men mt-5">
                        <div className="men-pro-item simpleCart_shelfItem">
                          <div className="men-thumb-item text-center">
                            <Link to={`/productItem/${product.id}`}>
                              <img src={product.image[0]} alt={product.name}/>
                              <div className="men-cart-pro">
                                <div className="inner-men-cart-pro">
                                  <div className="link-product-add-cart">Quick View</div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div className="item-info-product text-center border-top mt-4">
                            <h4 className="pt-1 name-product">
                              <a href="single.html">{product.name}</a>
                            </h4>
                            <div className="info-product-price my-2">
                              <span className="item_price">
                              {numberWithCommas(product.old_price)}
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
                <div className="product-sec1 product-sec2 px-sm-5 px-3">
                  <div className="row">
                    <h3 className="col-md-4 effect-bg">Summer Carnival</h3>
                    <p className="w3l-nut-middle">Get Extra 10% Off</p>
                    <div className="col-md-8 bg-right-nut">
                      <img src="/assets/images/image1.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <RightContent></RightContent>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Index;
