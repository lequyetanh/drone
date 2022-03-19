import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import NotFound from '../component/content/notFound/NotFound';
import Footer from './../component/footer/Footer';

function NotFoundPage() {
  return (
    <Fragment>
      <Header></Header>
      <NotFound></NotFound>
      <Footer></Footer>
    </Fragment>
  );
}

export default NotFoundPage;