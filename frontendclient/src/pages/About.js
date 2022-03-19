import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import About from '../component/content/about/About';
import Footer from './../component/footer/Footer';
import Banner from './../component/common/banner/Banner'

function AboutPage () {
  return (
    <Fragment>
      <Header></Header>
      <Banner name="about"></Banner>
      <About></About>
      <Footer></Footer>
    </Fragment>
  );
}

export default AboutPage ;