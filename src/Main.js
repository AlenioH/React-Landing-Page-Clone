import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import ToDo1 from './Zenkit_Web_ToDo_1_Home.jpg';
import ToDo2 from './Zenkit_Web_ToDo_2_Day_2.jpg';
import ToDo3 from './ToDo3.jpg';
import ToDo4 from './ToDo4.jpg';
import ToDo5 from './ToDo5.jpg';
import ToDo6 from './ToDo6.jpg';
import bg1 from './sync-bg-1.jpg';
import Animation from './Trust_Animation.gif';
import ipadPic from './zenkit-to-do-en-1.png';
import bannerWunderlist from './banner_wunderlist_zenkit-1.png';

const styleWelcome = css`
  margin-top: 80px;
  margin-bottom: 70px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  font-family: inherit;
`;

const ipadStyle = css`
  position: relative;
  right: 0;
  top: 20px;
  width: 775px;
  height: 500px;
  left: 22%;
  text-align: center;
`;

const bannerContainer = css`
  text-align: center;
  width: 78%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
`;

const bannerStyleReduced = css`
  width: 90%;
  margin: 0 auto 10px;
  text-align: center;
`;
const bannerStyle = css`
  background-color: #fffdd7;
  border-radius: 10px;
  padding: 20px;

  > * {
    display: inline-block;
    font-size: 18px;
    color: #664d1d;
    line-height: 1.5%;
  }

  a {
    text-decoration: none;
    color: #337ab7;
    &:hover {
      color: #23527c;
    }
  }
`;

const sectionGen = css`
  > * {
    text-align: left;
    margin-top: 40px;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1035px;
  }
`; // THE SHIT IS NOT CENTRAL SEND HELP

const containerSection = css`
  text-align: center;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;

const styleRow = css`
  display: flex;
  flex-direction: row;
  margin-left: -15px;
  margin-right: -15px;
  align-items: center;
`;

const styleText = css`
  width: 50%;

  padding-left: 15px;
  padding-right: 15px;
  > * {
    line-height: 1.5;
    font-size: 18px;
  }
`;

const styleImage = css`
  padding-left: 15px;
  padding-right: 15px;
  width: 50%;
  > * {
    width: 100%;
    height: auto;
    vertical-align: middle;
  }
`;

const h3Style = css`
  font-size: 46px;
  line-height: 1.2;
  margin-top: 20px;
  margin-bottom: 7px;
  font-weight: 600;
`;

function Main() {
  return (
    <div
      className="theBigOne"
      css={css`
        padding-top: 86px;
      `}
    >
      <div className="primary">
        <main>
          <section css={styleWelcome}>
            <h1
              css={css`
                font-size: 6rem;
                margin-bottom: 0.5rem;
                line-height: 1.2;
                margin-top: 0;
                font-weight: bold;
              `}
            >
              To Do. Done.
            </h1>
            <h2
              css={css`
                font-size: 41px;
                margin-bottom: 2rem;
                font-weight: 400;
                line-height: 48px;
              `}
            >
              Simple task management for you and your team
            </h2>
          </section>
          <div className="ipadBanner" css={ipadStyle}>
            <img
              src={ipadPic}
              alt="Diverse devices"
              css={css`
                height: 501px;
                z-index: 50;
                position: absolute;
                top: 0;
                left: -10px;
              `}
            ></img>
          </div>

          <section>
            <div css={bannerContainer}>
              <div css={bannerStyleReduced}>
                <div css={bannerStyle}>
                  <img
                    src={bannerWunderlist}
                    css={css`
                      width: 90px;
                      margin-right: 15px;
                      margin-top: -3px;
                      vertical-align: middle;
                    `}
                  ></img>
                  <p>
                    For Wunderlist users: Use our 1-click import for a smooth
                    move to Zenkit To Do! <a href="#">Compare now.</a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section css={sectionGen}>
            <div css={containerSection}>
              <div css={styleRow}>
                <div css={styleText}>
                  <h3 css={h3Style}>Welcome home</h3>
                  <p>
                    <span
                      css={css`
                        font-weight: 700;
                        color: #f54da5;
                      `}
                    >
                      Feel at home{' '}
                    </span>
                    in Zenkit To Do. Organize your tasks, shopping lists,
                    meetings, events, trips, ideas, notes, places, and whatever
                    else needs to be organized, so you have more time for the
                    important things in life.
                  </p>
                </div>
                <div css={styleImage}>
                  <img src={ToDo1} alt="alien img"></img>
                </div>
              </div>
            </div>
          </section>

          <section css={sectionGen}>
            <div css={containerSection}>
              <div css={styleRow}>
                <div css={styleImage}>
                  <img src={ToDo2}></img>
                </div>
                <div css={styleText}>
                  <h3 css={h3Style}>Your day at a glance</h3>
                  <p>
                    <span
                      css={css`
                        font-weight: 700;
                        color: #9d54fd;
                      `}
                    >
                      Focus{' '}
                    </span>
                    on your most important tasks for the day. Our smart lists
                    like “Assigned to me”, “Favorites”, “Week” and “Today” give
                    you the perfect overview of everything you have up ahead.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section css={sectionGen}>
            <div css={containerSection}>
              <div css={styleRow}>
                <div css={styleText}>
                  <h3 css={h3Style}>Never miss a deadline</h3>
                  <p>
                    Add{' '}
                    <span
                      css={css`
                        font-weight: 700;
                        color: #19bede;
                      `}
                    >
                      due dates and reminders
                    </span>{' '}
                    to any task. Repeating tasks give you control over
                    continuing processes. You can even integrate your favorite
                    calendar tools (coming soon).
                  </p>
                </div>
                <div css={styleImage}>
                  <img src={ToDo3}></img>
                </div>
              </div>
            </div>
          </section>

          <section css={sectionGen}>
            <div css={containerSection}>
              <div css={styleRow}>
                <div css={styleImage}>
                  <img src={ToDo4}></img>
                </div>
                <div css={styleText}>
                  <h3 css={h3Style}>Collaborate with anyone</h3>
                  <p>
                    <span
                      css={css`
                        font-weight: 700;
                        color: #f9903f;
                      `}
                    >
                      Share and assign tasks{' '}
                    </span>
                    with colleagues, friends, and family. Plan for work, home,
                    and everything in between with the people that matter.
                    Comment and reply to tasks to keep everyone up-to-date.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section css={sectionGen}>
            <div css={containerSection}>
              <div css={styleRow}>
                <div css={styleText}>
                  <h3 css={h3Style}>Connect to the Zenkit Universe</h3>
                  <p>
                    Zenkit To Do is part of the{' '}
                    <span
                      css={css`
                        font-weight: 700;
                        color: #f54da5;
                      `}
                    >
                      Zenkit family
                    </span>
                    . All products deeply integrate with one another. In fact,
                    they share one single data platform. Tasks from To Do are
                    also available in Zenkit Project Management (To Do’s big
                    brother) with more views and functions like Kanban, Gantt,
                    and mind maps.
                  </p>
                </div>
                <div css={styleImage}>
                  <img src={ToDo5}></img>
                </div>
              </div>
            </div>
          </section>

          <section css={sectionGen}>
            <div css={containerSection}>
              <div css={styleRow}>
                <div css={styleImage}>
                  <img src={ToDo6}></img>
                </div>
                <div css={styleText}>
                  <h3 css={h3Style}>Enterprise ready</h3>
                  <p>
                    The Zenkit platform is an{' '}
                    <span
                      css={css`
                        font-weight: 700;
                        color: #9d54fd;
                      `}
                    >
                      Enterprise-ready infrastructure
                    </span>{' '}
                    including Access-management (Roles, Groups), Provisioning
                    (SCIM), Identity management (SAML, 2FA), Audits and more…
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            css={css`
              background-image: url(${bg1});
              background-size: 100%;
              margin-bottom: 4rem;
              width: 100%;
              overflow: hidden;
            `}
          >
            <div
              css={css`
                background-size: 100%;
                background-repeat: no-repeat;
                background-position: top;
                background-position-x: center;
                background-position-y: top;
                vertical-align: middle;
                display: table-cell;
                width: 100%;
                padding: 11% 0;
              `}
            >
              <div
                css={css`
                  width: 100%;
                  padding-right: 30px;
                  padding-left: 30px;
                  text-align: center;
                `}
              >
                <h2
                  css={css`
                    font-size: 46px;
                    font-weight: 600;
                    margin-top: 20px;
                    margin-bottom: 10px;
                  `}
                >
                  Stay in sync
                </h2>
                <p
                  css={css`
                    font-size: 18px;
                    margin-left: auto;
                    margin-right: auto;
                    line-height: 1.6;
                  `}
                >
                  Zenkit To Do syncs seamlessly across devices to give you
                  productivity on the go (even offline). Download it for free
                  from the App <br /> Store and Google Play today!
                </p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h2>Here for you. Here to stay.</h2>
              <p>
                Built from the ground up with your security in mind by a German
                team with guaranteed GDPR compliance and Europe-based servers.
                We are committed to remaining independent – no acquisitions, no
                surprise shut downs. We promise to be here as long as you need
                our tools.
              </p>
            </div>
          </section>
          <section>
            <div>
              <p>
                <img src={Animation}></img>
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Main;
