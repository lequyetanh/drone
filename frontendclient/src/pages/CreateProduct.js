import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import CreateProduct from '../component/admin/product/createProduct/CreateProduct';
import Footer from './../component/footer/Footer';
import Banner from './../component/common/banner/Banner'

function CreateProductPage () {
  return (
    <Fragment>
      <Header></Header>
      <Banner name="create-product"></Banner>
      <CreateProduct></CreateProduct>
      <Footer></Footer>
    </Fragment>
  );
}

export default CreateProductPage ;