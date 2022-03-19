import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import Footer from './../component/footer/Footer';
import Privacy from './../component/content/privacy/Privacy';
import Banner from './../component/common/banner/Banner'

function PrivacyPage () {
  return (
    <Fragment>
      <Header></Header>
      <Banner name="privacy"></Banner>
      <Privacy></Privacy>
      <Footer></Footer>
    </Fragment>
  );
}

export default PrivacyPage ;