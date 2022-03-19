import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import Drone from '../component/admin/drone/Drone';
import Footer from './../component/footer/Footer';
import Banner from './../component/common/banner/Banner'

function DronePage () {
  return (
    <Fragment>
      <Header></Header>
      <Banner name="Drone"></Banner>
      <Drone></Drone>
      <Footer></Footer>
    </Fragment>
  );
}

export default DronePage ;