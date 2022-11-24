import React from 'react';
import './style.css';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Requirements from './components/Requirements.js';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_irpyw2f',
        'template_nbv5ics',
        form.current,
        'KR0sD3OLoqr0-zKXr'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form id="registerForm" ref={form} onSubmit={sendEmail}>
      <div>
        <label>First Name</label>
        <input type="text" name="user_name" />
      </div>

      <div>
        <label>Last Name</label>
        <input type="text" name="user_name" />
      </div>

      <div>
        <label>Email</label>
        <input type="email" name="user_email" />
      </div>

      <div>
        <label>Age</label>
        <input type="text" name="user_age" />
      </div>
      <div>
        <label>What Grade are you in?</label>
        <input type="text" name="user_grade" />
      </div>
      <div>
        <label>What's your GPA? We will check in-person...</label>
        <input type="text" name="user_gpa" />
      </div>

      <div>
        <label>Hair Length approved by which Sunday School Teacher?</label>
        <input type="text" name="user_hair" />
      </div>
      <div>
        <label>Behavior approved by which Sunday School Teacher? </label>
        <input type="text" name="user_name" />
      </div>
      <div>
        <label>Anything else you want to add?</label>
        <textarea name="message" />
        <input
          id="registerButton"
          class="btn-primary"
          type="submit"
          defaultValue="Send"
        />
      </div>
    </form>
  );
};

export default function App() {
  return (
    <div>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta charset="UTF-8" />
        <title>Contact Us</title>

        <link
          href="https://unpkg.com/cirrus-ui"
          type="text/css"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Oswald"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />

        <script
          src="https://code.jquery.com/jquery-2.2.4.min.js"
          integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
          crossorigin="anonymous"
        ></script>

        <script src="//cdn.jsdelivr.net/npm/faunadb@latest/dist/faunadb-min.js"></script>
      </head>
      <div id="app">
        <div id="hero" className="componentContainer">
          <div id="heroLeft">
            <h1 className="titleOne">Spiritual</h1>
            <h1 className="titleTwo">Retreat</h1>
            <h6 className="titleThree">Orlando Florida January 13-16 2023</h6>
            <a href="#register">
              {' '}
              <button class="btn-primary">I'm Going</button>
            </a>
          </div>
          <div id="heroRight"></div>
        </div>

        <Requirements />

        {/* <!-- CONNECT --> */}

        <div id="connect" className="componentContainer">
          <div id="connectLeft">
            <h1>Connect</h1>
            <p>
              Life is short, the year is even shorter. You need great spiritual
              examples and models in order to have a successful 2023. Get a
              great, focused start to the new Year and see you there.
            </p>
            <ul>
              <li>Don't let Social Media be your entire life</li>
              <li>Disconnect from your phone to truly connect</li>
              <li>Make real physical friends not just digital ones</li>
              <li>Make the most of your life and create memories</li>
            </ul>
          </div>
          <div id="connectRight"></div>
        </div>

        {/* <!-- ENGAGE --> */}

        <div id="engage" className="componentContainer">
          <div id="engageLeft"></div>
          <div id="engageRight">
            <h1>Engage</h1>
            <p>
              In this trip you’ll rejuvenate with other people your age Wether
              it be through sports, spirit, and faith. This could be a good
              opportunity to be more involved with the great role models.
            </p>
            <ul>
              <li>Learn about the power of Habits</li>
              <li>Cook, Clean and live like an Adult</li>
              <li>Learn to sleep and wake up without your phone</li>
              <li>Set yourself up for a great year</li>
            </ul>
          </div>
        </div>

        <div id="whyFlorida" className="componentContainer">
          <div id="whyFloridaLeft">
            <h1>Why Florida?</h1>
            <p>
              We want to go Florida to be more social with the people in our
              Church lives by getting to know them better and make amazing
              memories with our Church friends and family.
            </p>
            <ul>
              <li>It's cold, Florida is not</li>
              <li>Winter blues are a real thing</li>
              <li>Celebrating the Birth of our LORD after fasting</li>
              <li>MLK Day Weekend so we get an extra day</li>
            </ul>
          </div>
          <div id="whyFloridaRight"></div>
        </div>

        {/* <!-- REGISTER --> */}

        <div id="register" className="componentContainer">
          <h1>Register Here</h1>
          <h6>This is manditory and must be submitted before Dec 10th.</h6>
          <br />
          <br />
          <ContactUs />
        </div>

        {/* Dev Credits */}
        <h1>Engineer Credits</h1>
        <ul>
          <li>D Awet</li>
          <li>Luwam</li>
          <li>Henos</li>
          <li>Henos' Friend</li>
        </ul>
      </div>
    </div>
  );
}
