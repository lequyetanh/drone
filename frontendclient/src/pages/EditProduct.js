import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import EditProduct from '../component/admin/product/editProduct/EditProduct';
import Footer from './../component/footer/Footer';
import Banner from './../component/common/banner/Banner'

function EditProductPage () {
  return (
    <Fragment>
      <Header></Header>
      <Banner name="edit-product"></Banner>
      <EditProduct></EditProduct>
      <Footer></Footer>
    </Fragment>
  );
}

export default EditProductPage ;