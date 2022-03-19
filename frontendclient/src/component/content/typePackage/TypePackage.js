import React, {Fragment, useState, useEffect} from 'react';
import './TypePackage.scss';
import {Link, useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as productAction  from './../../../actions/productAction'
import * as userAction  from './../../../actions/userActions'
import RightContent from './../../common/rightContent/RightContent'
import { numberWithCommas } from './../../content/function';

function TypePackage(props) {
  window.scrollTo({ left: 0, top: 0 });
  const dispatch = useDispatch();

  const nameTypeProduct = useParams().typeProduct;
  const page = parseInt(useParams().page);
  const direction = useParams().direction;
  const id = parseInt(useParams().id)
  // console.log(nameTypeProduct);
  const productFromTypeProduct = useSelector((state) => state.productFromTypeProduct)
  const allTypeProductReducer = useSelector((state) => state.allTypeProduct);
  const userInforReducer = useSelector((state) => state.userInfor);

  const { loading: loadingAllTypeProduct, typeProduct, error: errorAllTypeProduct } = allTypeProductReducer
  const {loading: loadingUserInfor, userInfor, error: errorUserInfor} = userInforReducer
  const { loading, product, error} = productFromTypeProduct;
  const newProduct=[];

  useEffect(() => {
    dispatch(productAction.getProductsFromTypeProduct(nameTypeProduct, page, direction,id))
  }, [nameTypeProduct, page, direction, id])

  useEffect(() => {
    // console.log(product)
    // if(product){
    //   for(let i=0; i<product.length; i++){
    //     if(i == product.length - 1 ){
    //       break;
    //     }
    //     newProduct.push(product[i]);
    //   }
    //   // console.log(newProduct)
    // }
  }, [product])

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

        <div className="ads-grid py-sm-5 py-4">
          <div className="container py-xl-4 py-lg-2">
            <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
              <span>{nameTypeProduct && nameTypeProduct}</span>
              {/* <span>&</span>
              <span>C</span>omputers */}
            </h3>
            {page && <h2>Trang: {page}</h2>}
            <div className="row">

              {product ?
                <div className="agileinfo-ads-display col-lg-9 pad-20">
                  <div className="wrapper">
                    <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                      <div className="row">
                        {product.map(product => (
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
                      <div className="page mart-40 marr-40 marl-40 flexbox-center-between">
                            {product && 
                              <Fragment>
                                {page == 1 && <input
                                  type="submit"
                                  name="submit"
                                  value="Trang Trước"
                                  className="button cursor-default"/>}
                                { page > 1 && <Link to={`/typeProduct/${nameTypeProduct}/${page-1}/previous/${product[0].id}`} className="button flexbox-center-center">Trang Trước</Link>}

                                { product.length <= 20 && <input
                                  type="submit"
                                  name="submit"
                                  value="Trang Sau"
                                  className="button cursor-default"/>}
                                { product.length == 21 && <Link to={`/typeProduct/${nameTypeProduct}/${page+1}/next/${product[product.length - 1].id}`} className="button flexbox-center-center">Trang Sau</Link>}
                              </Fragment>
                            }
                          </div>
                    </div>
                  </div>
                </div>
                :
                <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              }
              <RightContent></RightContent>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default TypePackage;
