import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import Footer from './../component/footer/Footer';
import Search from './../component/content/search/Search';
import Banner from './../component/common/banner/Banner'

function SearchPage () {
  return (
    <Fragment>
      <Header></Header>
      <Banner name="Rule"></Banner>
      <Search></Search>
      <Footer></Footer>
    </Fragment>
  );
}

export default SearchPage ;