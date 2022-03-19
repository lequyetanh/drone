import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import * as productAction  from './../../../actions/productAction'
import * as userAction  from './../../../actions/userActions'

export default function Search (props){

  const [searchText, setSearch] = useState('');
  window.scrollTo({ left: 0, top: 0 });
  const dispatch = useDispatch();
  const search = removeAccents(useParams().search).toLowerCase();
  const allProductReducer = useSelector(state => state.allProduct);
  const { loading, product: allProduct, error } = allProductReducer;
  let  searchProduct = [];
  const [listProduct, setListProduct] = useState([]);
  let [loadingListProduct, setLoadingListProduct] = useState(true);

  const userInforReducer = useSelector((state) => state.userInfor);
  const {loading: loadingUserInfor, userInfor, error: errorUserInfor} = userInforReducer

  useEffect(()=>{
    dispatch(productAction.getAllProductSearch())
  },[])

  useEffect(()=>{
    if(allProduct){
      console.log(allProduct)
      for (let i = 0; i < allProduct.length; i++) {
        let name = removeAccents(allProduct[i].name).toLowerCase();
        // let regxName = `/${this.searchName}/i`;
        // console.log(regxName);
        if (name.search(search) == -1) {
            continue;
        }
        else {
            searchProduct.push(allProduct[i])
        }
      }
      setListProduct(searchProduct);
      setLoadingListProduct(false);
      // console.log(searchProduct)
    }
  },[allProduct, search])

  function removeAccents(str) {
    return str.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

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
              <span>{search && search}</span>
              {/* <span>&</span>
              <span>C</span>omputers */}
            </h3>
            <div className="row">

              {
                !loadingListProduct ?
                <div className="agileinfo-ads-display col-lg-9 pad-20">
                  <div className="wrapper">
                    <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                      <div className="row">
                        {listProduct.map(product => (
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
                                <span className="item_price">{product.old_price}
                                  VND</span>
                                <del className="fs-13">{product.new_price}
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

              <div className="col-lg-3 mt-lg-0 mt-4 p-lg-0">
                <div className="side-bar p-sm-4 p-3">
                  <div className="search-hotel border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Brand</h3>
                    <form action="#" method="post">
                    <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search" required />
                    <button type="submit" value=""><Link to={`/search/${searchText}`}>Search</Link></button>
                    </form>
                    <div className="left-side py-2">
                      <ul>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">Samsung</span>
                        </li>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">Red Mi</span>
                        </li>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">Apple</span>
                        </li>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">Nexus</span>
                        </li>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">Motorola</span>
                        </li>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">Micromax</span>
                        </li>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">Lenovo</span>
                        </li>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">Oppo</span>
                        </li>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">Sony</span>
                        </li>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">LG</span>
                        </li>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">One Plus</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Ram</h3>
                    <ul>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Less than 512 MB</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">512 MB - 1 GB</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">1 GB</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">2 GB</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">3 GB</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">5 GB</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">6 GB</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">6 GB & Above</span>
                      </li>
                    </ul>
                  </div>
                  <div className="range border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Price</h3>
                    <div className="w3l-range">
                      <ul>
                        <li>
                          <a href="#">Under $1,000</a>
                        </li>
                        <li className="my-1">
                          <a href="#">$1,000 - $5,000</a>
                        </li>
                        <li>
                          <a href="#">$5,000 - $10,000</a>
                        </li>
                        <li className="my-1">
                          <a href="#">$10,000 - $20,000</a>
                        </li>
                        <li>
                          <a href="#">$20,000 $30,000</a>
                        </li>
                        <li className="mt-1">
                          <a href="#">Over $30,000</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Discount</h3>
                    <ul>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">5% or More</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">10% or More</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">20% or More</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">30% or More</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">50% or More</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">60% or More</span>
                      </li>
                    </ul>
                  </div>
                  <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Offers</h3>
                    <ul>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Exchange Offer</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">No Cost EMI</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Special Price</span>
                      </li>
                    </ul>
                  </div>
                  <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Cash On Delivery</h3>
                    <ul>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Eligible for Cash On Delivery</span>
                      </li>
                    </ul>
                  </div>
                  <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">New Arrivals</h3>
                    <ul>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Last 30 days</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Last 90 days</span>
                      </li>
                    </ul>
                  </div>
                  <div className="left-side py-2">
                    <h3 className="agileits-sear-head mb-3">Availability</h3>
                    <ul>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Exclude Out of Stock</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
};