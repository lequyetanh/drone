import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import Product from '../component/admin/product/Product';
import Footer from './../component/footer/Footer';
import Banner from './../component/common/banner/Banner'

function ProductPage () {
  return (
    <Fragment>
      <Header></Header>
      <Banner name="product"></Banner>
      <Product></Product>
      <Footer></Footer>
    </Fragment>
  );
}

export default ProductPage ;