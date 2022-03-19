import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import User from '../component/admin/user/User';
import Footer from './../component/footer/Footer';
import Banner from './../component/common/banner/Banner'

function UserPage () {
  return (
    <Fragment>
      <Header></Header>
      <Banner name="user"></Banner>
      <User></User>
      <Footer></Footer>
    </Fragment>
  );
}

export default UserPage ;