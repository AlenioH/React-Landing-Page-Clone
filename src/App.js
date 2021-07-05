import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import bgImg from './bg-to-do-13.jpg';

const styleGen = css`
  box-sizing: border-box;
  display: block;
  font-size: 16px;
  box-sizing: border-box;
  line-height: 1.5;
  color: rgb(17, 17, 17);
  line-height: 1.5;
  margin: 0px;
  text-align: left;
  background-image: url(${bgImg});
  background-size: auto;
  background-attachment: scroll;
  background-origin: padding-box;
  background-position: top;
  background-size: auto;
  background-repeat: no-repeat;
  font-family: HindGunterLight, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica Neue, Arial, sans-serif;
`;

function App() {
  return (
    <div className="App" css={styleGen}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
