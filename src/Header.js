import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import toDoIcon from './to-do-icon.png';

const headerStyle = css`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  border-bottom: 2px solid rgba(199, 218, 233, 0.78);
  background-color: white;
  z-index: 100;
  font-family: HindGunterLight, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica Neue, Arial, sans-serif;
`;

const mainMenu = css`
  margin-left: 89.5px;
  margin-right: 89.5px;
`;
const navContainer = css`
  height: 72px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

const logoAndName = css`
  display: flex;
  text-decoration: none;
  font-size: 24px;
  align-items: center;
  white-space: nowrap;
  padding: 5px 0;
  > * {
    color: rgb(17, 17, 17);
  }
`;

const listWrap = css`
  margin-top: 0;
  opacity: 1;
  visibility: visible;
  background: none;
`;

const listStyle = css`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  width: 100%;
  margin: 0 auto;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  > * {
    text-decoration: none;
    color: rgb(17, 17, 17);
  }

  > a {
    width: auto;
    margin: 10px;
    text-align: center;
    padding: 5px;
    &:hover:not(:last-of-type) {
      background-color: rgba(238, 243, 250, 0.5);
      border-radius: 5px;
      transition: background-color 0.2s;
    }
  }
`;

const buttonStyle = css`
  font-family: inherit;
  width: auto;
  display: block;
  font-size: 16px;
  background-color: #75bc52;
  color: #fff;
  border-top: none;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-radius: 5px;
  padding: 6px 12px;
  margin: 10px;
  &:hover {
    background-color: #63a91c;
    transition: background-color 0.2s ease, border-color 0.2s;
  }
`;

function Header() {
  return (
    <div className="justAWrap">
      <nav css={headerStyle}>
        <div className="mainMenu" css={mainMenu}>
          <div className="navContainer" css={navContainer}>
            <a href="#" className="logoAndName" css={logoAndName}>
              <img
                src={toDoIcon}
                alt="To do logo"
                css={css`
                  height: 22px;
                  margin-left: 13px;
                  margin-top: 0;
                  display: inline-block;
                  vertical-align: middle;
                `}
              ></img>
              <span
                css={css`
                  font-weight: 700;
                  margin-top: 0;
                  margin-left: 13px;
                  display: inline-block;
                `}
              >
                Zenkit
              </span>
              <span
                css={css`
                  margin-left: 7px;
                  display: inline-block;
                `}
              >
                To Do
              </span>
            </a>
            <div className="listWrap" css={listWrap}>
              <ul css={listStyle}>
                <a href="#">
                  <li>Features</li>
                </a>
                <a href="#">
                  <li>Pricing</li>
                </a>
                <a href="#">
                  <li>Login</li>
                </a>
                <a href="#">
                  <li>
                    <button css={buttonStyle}>Sign up for free</button>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
