import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import Checkout from '../component/user/checkout/Checkout';
import Footer from './../component/footer/Footer';

function CheckoutPage() {
  return (
    <Fragment>
      <Header></Header>
      <Checkout></Checkout>
      <Footer></Footer>
    </Fragment>
  );
}

export default CheckoutPage;