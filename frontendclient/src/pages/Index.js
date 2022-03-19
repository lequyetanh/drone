import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import Index from '../component/content/index/Index';
import Footer from './../component/footer/Footer';

function IndexPage() {
  return (
    <Fragment>
      <Header></Header>
      <Index></Index>
      <Footer></Footer>
    </Fragment>
  );
}

export default IndexPage;