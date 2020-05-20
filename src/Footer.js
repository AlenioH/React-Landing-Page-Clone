import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import logo from './to-do-icon.png';
import applelogo from './apple_app_store_badge.svg';
import googlelogo from './google-play-badge.png';
import phone from './phone.svg';
import globe from './globe.svg';

function Footer() {
  return (
    <footer>
      <div className="colums">
        <div>
          <section>
            <h3>Company</h3>
            <ul>
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
        </div>
        <div>
          <section>
            <h3>Service</h3>
            <ul>
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
                <li>Security</li>
              </a>
              <a href="#">
                <li>Practices</li>
              </a>
            </ul>
          </section>
        </div>
        <div>
          <a href="#">
            <img src={logo}></img>
            <span>Zenkit</span> <span>To Do</span>
            <section>
              <ul>
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
              </ul>
            </section>
          </a>
        </div>
      </div>
      <div>
        <a href="#">
          <img src={applelogo}></img>
        </a>
        <a href="#">
          <img src={googlelogo}></img>
        </a>
        <div>
          <div>Any Questions for Zenkit To Do? Give us a call.</div>

          <div
            css={css`
              background-color: green;
              width: 150px;
            `}
          >
            <a href="#">
              <img
                src={phone}
                css={css`
                  height: 30px;
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
