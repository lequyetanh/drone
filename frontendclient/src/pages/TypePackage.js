import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import TypePackage from '../component/content/typePackage/TypePackage';
import Footer from './../component/footer/Footer';

function TypePackagePage () {
  return (
    <Fragment>
      <Header></Header>
      <TypePackage></TypePackage>
      <Footer></Footer>
    </Fragment>
  );
}

export default TypePackagePage ;