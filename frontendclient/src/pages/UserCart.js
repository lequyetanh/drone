import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import Cart from '../component/user/cart/Cart';
import Footer from './../component/footer/Footer';

function CartPage() {
  return (
    <Fragment>
      <Header></Header>
      <Cart></Cart>
      <Footer></Footer>
    </Fragment>
  );
}

export default CartPage;