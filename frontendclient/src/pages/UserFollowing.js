import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import Following from '../component/user/following/Following';
import Footer from './../component/footer/Footer';

function FollowingPage() {
  return (
    <Fragment>
      <Header></Header>
      <Following></Following>
      <Footer></Footer>
    </Fragment>
  );
}

export default FollowingPage;