import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import Footer from './../component/footer/Footer';
import Rule from './../component/content/rule/Rule';
import Banner from './../component/common/banner/Banner'

function RulePage () {
  return (
    <Fragment>
      <Header></Header>
      <Banner name="Rule"></Banner>
      <Rule></Rule>
      <Footer></Footer>
    </Fragment>
  );
}

export default RulePage ;