import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import logo from './to-do-icon.png';
import applelogo from './apple_app_store_badge.svg';
import googlelogo from './google-play-badge.png';
import phone from './phone.svg';
import globe from './globe.svg';

const footerGen = css`
  padding-bottom: 3rem;
  * {
    color: #e5e0ee;
  }
`;

const h3Style = css`
  font-weight: 600;
  font-size: 20px;
  color: #fff;
`;

const ulStyle = css`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  text-align: left;

  * {
    text-decoration: none;
    padding-top: 5px;
  }

  a:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <footer css={footerGen}>
      <div
        className="colums"
        css={css`
          background-color: #30404d;
          padding: 0 15%;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            flex-wrap: nowrap;
            margin-left: auto;
            margin-right: auto;
            > * {
              padding: 0 70px;
            }
          `}
        >
          <section>
            <ul css={ulStyle}>
              <li>
                <h3 css={h3Style}>Company</h3>
              </li>
              <a href="#">
                <li>About Us</li>
              </a>
              <a href="#">
                <li>Newsroom</li>
              </a>
              <a href="#">
                <li>Press Kit</li>
              </a>
              <a href="#">
                <li>Blog</li>
              </a>
              <a href="#">
                <li>Academy</li>
              </a>
              <a href="#">
                <li>Careers</li>
              </a>
            </ul>
          </section>

          <section>
            <ul css={ulStyle}>
              <li>
                <h3 css={h3Style}>Service</h3>
              </li>
              <a href="#">
                <li>Tutorials</li>
              </a>
              <a href="#">
                <li>Newsletter</li>
              </a>
              <a href="#">
                <li>Affiliate</li>
              </a>
              <a href="#">
                <li>GDPR</li>
              </a>
              <a href="#">
                <li>Security practices</li>
              </a>
            </ul>
          </section>

          <section>
            <ul
              css={css`
                display: flex;
                flex-direction: column;
                border-left: 2px solid #dad9d5;
              `}
              css={ulStyle}
            >
              <li>
                <h3
                  css={css`
                    margin-top: 20px;
                  `}
                >
                  <a
                    href="#"
                    css={css`
                      text-decoration: none;
                      font-weight: 600;
                      font-size: 20px;
                    `}
                  >
                    <img
                      src={logo}
                      css={css`
                        width: 15px;
                        height: 15px;
                        margin-right: 10px;
                      `}
                    ></img>
                    <span
                      css={css`
                        color: white;
                      `}
                    >
                      Zenkit
                    </span>{' '}
                    <span
                      css={css`
                        color: white;
                        font-weight: 400;
                      `}
                    >
                      To Do
                    </span>
                  </a>
                </h3>
              </li>
              <a href="#">
                <li>Features</li>
              </a>
              <a href="#">
                <li>Pricing</li>
              </a>
              <a href="#">
                <li>Switching from</li>
              </a>
              <a href="#">
                <li>Wunderlist</li>
              </a>
              <a href="#">
                <li>Platform</li>
              </a>

              <a href="#">
                <img
                  src={applelogo}
                  css={css`
                    width: 120px;
                    height: 35px;
                  `}
                ></img>
              </a>
              <a href="#">
                <img
                  src={googlelogo}
                  css={css`
                    width: 120px;
                    height: 35px;
                  `}
                ></img>
              </a>
            </ul>
          </section>
        </div>
        <div
          css={css`
            width: 600px;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            flex-direction: row;
            border-radius: 30px;
            margin: 50px auto 60px;
            justify-content: center;
            align-items: center;
            margin-top: 50px;
            position: relative;
            bottom: 40px;
          `}
        >
          <div
            css={css`
              margin-left: auto;
              margin-right: auto;
              padding: 15px 10px 15px 35px;
            `}
          >
            Any Questions for Zenkit To Do? Give us a call.
          </div>

          <div
            css={css`
              background-color: #75bc52;
              border-top-right-radius: 30px;
              border-bottom-right-radius: 30px;
              width: 200px;
              display: flex;
              flex-direction: row;
              margin-left: auto;
              padding-left: 20px;
            `}
          >
            <a
              href="#"
              css={css`
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                text-decoration: none;
              `}
            >
              <img
                src={phone}
                css={css`
                  height: 20px;
                `}
              ></img>
              <p>+49 721 35 28 375</p>
            </a>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerSocial">
          <ul>
            {/* <li><a href="#"><img></img></a></li>
  <li><a href="#"><img></img></a></li>
  <li><a href="#"><img></img></a></li>
  <li><a href="#"><img></img></a></li> need to figure out the social media logos of its okay to download them from some other page*/}
          </ul>
        </div>
        <button>
          <img src={globe}></img> <span>English</span>
        </button>
      </div>
      <div className="footerLegal">
        © 2020 Zenkit. A venture of Axonic Informationssysteme GmbH.
        <br />
        All rights reserved. Read our
        <a href="#"> Legal Notice</a>,<a href="#">Privacy Policy</a> and{' '}
        <a href="#">Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;
