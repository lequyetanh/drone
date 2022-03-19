import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import Profile from '../component/user/profile/Profile';
import Footer from './../component/footer/Footer';

function ProfilePage() {
  return (
    <Fragment>
      <Header></Header>
      <Profile></Profile>
      <Footer></Footer>
    </Fragment>
  );
}

export default ProfilePage;