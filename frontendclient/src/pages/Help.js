import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import Footer from './../component/footer/Footer';
import Help from './../component/content/help/Help';
import Banner from './../component/common/banner/Banner'

function HelpPage () {
  return (
    <Fragment>
      <Header></Header>
      <Banner name="help"></Banner>
      <Help></Help>
      <Footer></Footer>
    </Fragment>
  );
}

export default HelpPage ;