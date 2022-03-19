import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import Login from '../component/content/login/Login';
import Footer from './../component/footer/Footer';
import Banner from './../component/common/banner/Banner'

function LoginPage() {
  return (
    <Fragment>
      <Header></Header>
      <Banner name="login"></Banner>
      <Login></Login>
      <Footer></Footer>
    </Fragment>
  );
}

export default LoginPage;