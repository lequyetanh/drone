import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import Admin from '../component/admin/Admin';
import Footer from './../component/footer/Footer';
import Banner from './../component/common/banner/Banner'

function AdminPage () {
  return (
    <Fragment>
      <Header></Header>
      <Banner name="admin"></Banner>
      <Admin></Admin>
      <Footer></Footer>
    </Fragment>
  );
}

export default AdminPage ;