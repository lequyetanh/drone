import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import Contact from '../component/content/contact/Contact';
import Footer from './../component/footer/Footer';
import Banner from './../component/common/banner/Banner'

function ContactPage () {
  return (
    <Fragment>
      <Header></Header>
      <Banner name="contact"></Banner>
      <Contact></Contact>
      <Footer></Footer>
    </Fragment>
  );
}

export default ContactPage ;