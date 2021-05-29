import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Pricing from './components/Pricing';

import { styled } from 'twin.macro';

const Root = styled.div({
  fontFamily: 'Open Sans',
});

const Homepage = () => {
  return (
    <Root>
      <Nav></Nav>
      <Header></Header>
      <Main></Main>
      <Pricing></Pricing>
    </Root>
  );
};

export default Homepage;
