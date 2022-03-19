import React, {Fragment} from 'react';
import { TopHeader } from './top-header/TopHeader';
import { BottomHeader } from './bottom-header/BottomHeader';
import { Navigation } from './navigation/Navigation';

function Header() {
  return (
    <Fragment>
      <TopHeader></TopHeader>
      <BottomHeader></BottomHeader>
      <Navigation></Navigation>
    </Fragment>
  );
}

export default Header;
