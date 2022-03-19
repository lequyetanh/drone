import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import DetailPackage from '../component/content/detailPackage/DetailPackage';
import Footer from './../component/footer/Footer';

function DetaitlPackagePage() {
  return (
    <Fragment>
      <Header></Header>
      <DetailPackage></DetailPackage>
      <Footer></Footer>
    </Fragment>
  );
}

export default DetaitlPackagePage;