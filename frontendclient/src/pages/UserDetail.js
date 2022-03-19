import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import UserDetail from '../component/admin/user/UserDetail';
import Footer from './../component/footer/Footer';

function UserDetailPage() {
  return (
    <Fragment>
      <Header></Header>
      <UserDetail></UserDetail>
      <Footer></Footer>
    </Fragment>
  );
}

export default UserDetailPage;