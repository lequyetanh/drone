import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import Signin from '../component/content/signin/Signin';
import Footer from './../component/footer/Footer';
import Banner from './../component/common/banner/Banner'

function SigninPage () {
  return (
    <Fragment>
      <Header></Header>
      <Banner name="Singin"></Banner>
      <Signin></Signin>
      <Footer></Footer>
    </Fragment>
  );
}

export default SigninPage ;