// @flow
import React, {Fragment, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from "react-router-dom";
import * as productAction from './../../../actions/productAction'
import { numberWithCommas } from './../../content/function';

function Product() {
  const dispatch = useDispatch();

  const page = parseInt(useParams().page);
  const direction = useParams().direction;
  const id = parseInt(useParams().id)

  const allProductReducer = useSelector(state => state.allProduct);
  const {loading: loadingAllProduct, product: allProduct, error: errorAllProduct} = allProductReducer;

  useEffect(() => {
    console.log("update all Product")
    if (page && direction && id) {
      dispatch(productAction.getAllProduct(page, direction, id));
    }
  }, [dispatch, page, direction, id])

  useEffect(() => {
    // console.log(allProduct)
  }, [allProduct])

  const deleteProduct = async (idProduct) => {
    await dispatch(productAction.deleteProduct(idProduct));
    await dispatch(productAction.getAllProduct(page, direction, id));
  }

  return (
    <Fragment>
      <div className="ads-grid py-sm-5 py-4">
        <div className="container py-xl-4 py-lg-2">
          <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
            <span>Tất Cả Sản Phẩm</span>
            {/* <span>&</span>
              <span>C</span>omputers */}
          </h3>
          <div className="flexbox-center-between padl-5 padr-5">
            <div>{page && <h2>Trang: {page}</h2>}</div>
            <Link to="/admin/product/create-product" className="button btn">Create Product</Link>
          </div>
          <div className="row">

            {allProduct
              ? <div className="agileinfo-ads-display col-lg-12 pad-20">
                  <div className="wrapper">
                    <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                      <div className="row">
                        {allProduct.map(product => (
                          <div key={product.id} className="col-md-3 product-men mt-5">
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
                              <Link
                                to={`/admin/product/edit-product/${product.id}`}
                                className="product-new-top pointer">Edit</Link>
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
                                    value="Delete"
                                    className="button btn"
                                    onClick={() => deleteProduct(product.id)}/>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="page mart-40 marr-40 marl-40 flexbox-center-between">
                        {allProduct && <Fragment>
                          {page == 1 && <input
                            type="submit"
                            name="submit"
                            value="Trang Trước"
                            className="button cursor-default"/>}
                          {page > 1 && <Link
                            to={`/admin/product/${page - 1}/previous/${allProduct[0].id}`}
                            className="button flexbox-center-center">Trang Trước</Link>}

                          {allProduct.length <= 23 && <input
                            type="submit"
                            name="submit"
                            value="Trang Sau"
                            className="button cursor-default"/>}
                          {allProduct.length == 24 && <Link
                            to={`/admin/product/${page + 1}/next/${allProduct[allProduct.length - 1].id}`}
                            className="button flexbox-center-center">Trang Sau</Link>}
                        </Fragment>
                      }
                      </div>
                    </div>
                  </div>
                </div>
              : <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;