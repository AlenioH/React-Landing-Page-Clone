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
  height: 545px;
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
                left: -70px;
              `}
            ></img>
          </div>

          <section>
            <img src={bannerWunderlist}></img>
            <p>
              For Wunderlist users: Use our 1-click import for a smooth move to
              Zenkit To Do!
            </p>
            <a href="#">Compare now.</a>
          </section>
          <section>
            <div>
              <h3>Welcome home</h3>
              <p>
                <span
                  css={css`
                    font-weight: bold;
                    color: hotpink;
                  `}
                >
                  Feel at home{' '}
                </span>
                in Zenkit To Do. Organize your tasks, shopping lists, meetings,
                events, trips, ideas, notes, places, and whatever else needs to
                be organized, so you have more time for the important things in
                life.
              </p>
              <img src={ToDo1} alt="alien img"></img>
            </div>
          </section>
          <section>
            <div>
              <img src={ToDo2}></img>
              <h3>Your day at a glance</h3>
              <p>
                <span
                  css={css`
                    font-weight: bold;
                    color: purple;
                  `}
                >
                  Focus
                </span>
                on your most important tasks for the day. Our smart lists like
                “Assigned to me”, “Favorites”, “Week” and “Today” give you the
                perfect overview of everything you have up ahead.
              </p>
            </div>
          </section>
          <section>
            <div>
              <h3>Never miss a deadline</h3>
              <p>
                Add{' '}
                <span
                  css={css`
                    font-weight: bold;
                    color: blue;
                  `}
                >
                  due dates and reminders
                </span>{' '}
                to any task. Repeating tasks give you control over continuing
                processes. You can even integrate your favorite calendar tools
                (coming soon).
              </p>
              <img src={ToDo3}></img>
            </div>
          </section>
          <section>
            <div>
              <img src={ToDo4}></img>
              <h3>Collaborate with anyone</h3>
              <p>
                <span
                  css={css`
                    font-weight: bold;
                    color: orange;
                  `}
                >
                  Share and assign tasks{' '}
                </span>
                with colleagues, friends, and family. Plan for work, home, and
                everything in between with the people that matter. Comment and
                reply to tasks to keep everyone up-to-date.
              </p>
            </div>
          </section>
          <section>
            <div>
              <h3>Connect to the Zenkit Universe</h3>
              <p>
                Zenkit To Do is part of the{' '}
                <span
                  css={css`
                    font-weight: bold;
                    color: hotpink;
                  `}
                >
                  Zenkit family
                </span>
                . All products deeply integrate with one another. In fact, they
                share one single data platform. Tasks from To Do are also
                available in Zenkit Project Management (To Do’s big brother)
                with more views and functions like Kanban, Gantt, and mind maps.
              </p>
              <img src={ToDo5}></img>
            </div>
          </section>
          <section>
            <div>
              <img src={ToDo6}></img>
              <h3>Enterprise ready</h3>
              <p>
                The Zenkit platform is an{' '}
                <span
                  css={css`
                    font-weight: bold;
                    color: purple;
                  `}
                >
                  Enterprise-ready infrastructure
                </span>{' '}
                including Access-management (Roles, Groups), Provisioning
                (SCIM), Identity management (SAML, 2FA), Audits and more…
              </p>
            </div>
          </section>
          <section
            css={css`
              background-image: url(${bg1});
            `}
          >
            <h2>Stay in sync</h2>
            <p>
              Zenkit To Do syncs seamlessly across devices to give you
              productivity on the go (even offline). Download it for free from
              the App Store and Google Play today!
            </p>
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
