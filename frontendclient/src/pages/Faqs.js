import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import Faqs from './../component/content/faqs/Faqs';
import Footer from './../component/footer/Footer';
import Banner from './../component/common/banner/Banner'

function FaqsPage () {
  return (
    <Fragment>
      <Header></Header>
      <Banner name="faqs"></Banner>
      <Faqs></Faqs>
      <Footer></Footer>
    </Fragment>
  );
}

export default FaqsPage ;