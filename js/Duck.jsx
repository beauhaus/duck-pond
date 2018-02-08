// import React from 'react';
import React, { Component } from 'react';
import { Power1, TimelineLite } from 'gsap';

class Duck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: new TimelineLite()
    };
  }

  componentDidMount() {
    this.state.timeline
      .from('.duck-svg', 5, { x: 300, repeat: -1, ease: Power1.easeInOut, yoyo: true })
      .from('.ripple-1', 1.5, { autoAlpha: 0, repeat: -1, ease: Power1.easeInOut, yoyo: true }, '5.0')
      .from('.ripple-2', 1.5, { autoAlpha: 0, repeat: -1, ease: Power1.easeInOut, yoyo: true }, '5.3')
      .from('.ripple-3', 1.5, { autoAlpha: 0, repeat: -1, ease: Power1.easeInOut, yoyo: true }, '5.6')
      .from('.ripple-4', 1.5, { autoAlpha: 0, repeat: -1, ease: Power1.easeInOut, yoyo: true }, '5.9')
      .from('.ripple-5', 1.5, { autoAlpha: 0, repeat: -1, ease: Power1.easeInOut, yoyo: true }, '6.2')
      .from('.ripple-6', 1.5, { autoAlpha: 0, repeat: -1, ease: Power1.easeInOut, yoyo: true }, '6.5')
      .from('.ripple-7', 1.5, { autoAlpha: 0, repeat: -1, ease: Power1.easeInOut, yoyo: true }, '6.8')
      .from('.wake-1', 6, { autoAlpha: 0, repeat: -1, ease: Power1.easeInOut, yoyo: true }, '2.1')
      .from('.wake-2', 6, { autoAlpha: 0, repeat: -1, ease: Power1.easeInOut, yoyo: true }, '-=6');

    // this.state.timeline.fromTo('.duck-svg', 140, { ease:Power1.easeInOut, x:500}, {x: -500});
  }
  // console

  render() {
    return (
      <svg className="duck-svg" viewBox="0 0 1920 1080">
        {}
        <linearGradient
          id="reflection-grad"
          x1="1169.9648"
          x2="1169.9648"
          y1="947"
          y2="1022.9995"
          gradientUnits="userSpaceOnUse"
        >
        <stop offset="0" stopOpacity="0" />
        <stop offset="0.2" stopOpacity=".4" />
          
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <path
          fill="url(#reflection-grad)"
          d="M1226 978.8c.4-.4.8-.7 1.2-1.1.3-.1.6.2 1 .6 2.2 2.3 4.1 5.2 5.7 9-.3-4.8-.6-9.7-1-14.4-1.7-6.1-4.6-10.3-6.2-16.5-1.2-3-2.6-5.8-4-8.3-3.8 0-74.4-.9-90.4-1.2 0 .8-.1 1.6 0 2.4-1.5 5-2 11.1-1 18.6.2 5.6 1.9 12.4-.2 18.1-.5 1-1.1 1.8-1.8 2.4-7.7 14.2-16.6-14.9-23.2-14.9 3.2 15.8 14.3 21.1 15.6 39.7 3.5 11.3 12.7 13.9 19.1 1.6 3.2-6.2 4.2-14 4.2-21.3 0-2.7-2.2-21.9 2-18.6.9 0 1.7.6 2.4 1.6 2.7 3.8 5.5 7.1 9 8.5 1.1 1.2 2.4 1.5 3.7 1.9 3.2 2.1 6.9 3.8 10.5 3.7 6.5 2.2 14.7 0 21.6-1.3 4.9-1 9.8-2.6 14.7-4.6 3.3-1.3 7.2-4.5 10.3-3 2.9 2.6 6.5 3.3 9.1 6.2.1-3.7-1-6.7-2.3-9.1z"
        />
        <g className="ripple-wake-collection" fill="none" stroke="#333" strokeMiterlimit="10">
          <ellipse
            className="ripple ripple-1"
            cx="1186.5"
            cy="949.9"
            stroke="#000"
            strokeWidth="2"
            rx="61.2"
            ry="3.8"
          />
          <ellipse
            className="ripple ripple-2"
            cx="1196.9"
            cy="949.9"
            stroke="#1A1A1A"
            strokeWidth="1.8"
            rx="68.3"
            ry="5.4"
          />
          <ellipse
            className="ripple ripple-3"
            cx="1212.7"
            cy="949.9"
            stroke="#333"
            strokeWidth="1.5"
            rx="84"
            ry="7.6"
          />
          <ellipse
            className="ripple ripple-4"
            cx="1227.8"
            cy="949.9"
            stroke="#4D4D4D"
            strokeWidth="1"
            rx="98.9"
            ry="9.6"
          />
          <ellipse
            className="ripple ripple-5"
            cx="1253.9"
            cy="949.9"
            stroke="#666"
            strokeWidth="1."
            rx="124.7"
            ry="9.5"
          />
          <ellipse
            className="ripple ripple-6"
            cx="1292.4"
            cy="949.9"
            stroke="gray"
            strokeWidth="0.8"
            rx="163"
            ry="11.1"
          />
          <ellipse
            className="ripple ripple-7"
            cx="1431.3"
            cy="949.9"
            stroke="#999"
            strokeWidth="0.8"
            rx="301.3"
            ry="10.6"
          />

          <path
            className="wake wake-1"
            stroke="gray"
            strokeWidth=".7"
            d="M1146.2 942.6c105.1-10.3 177.6-22.4 386.2-24.6 122.5-1.3 319.2 3.6 377.7-5.9"
          />
          <path
            className="wake wake-2"
            stroke="#333"
            strokeWidth=".5"
            d="M1147.8 955.4c103.8 9.9 175 23.3 380.4 29.8 120.6 3.9 327-2.5 384.8 5.7"
          />
        </g>
        <path
          id="duck-surfaced"
          fill="#0F0D0B"
          d="M1231.4 940.6c-.1 0 0 0 0 0-.4.2-.8.4-1.1.3-.4-.2-.8-.3-1.2-.5h.1c1.5-1.2 3-2.6 3.3-4.5-2.9 1.4-6.7 1.8-9.8 3-3.3.8-6.8-.8-10-1.5-4.7-1-9.4-1.8-14.2-2.2-6.8-.7-14.8-1.7-21.6-.7-3.6 0-7.5.8-10.9 1.8-1.4.2-2.7.4-3.9.9-3.7.7-6.9 2.3-10 4.2-.8.5-1.7.8-2.6.8-4.5 1.6-.2-7.8.1-9.1.8-3.6.6-7.4-1.9-10.4-5-6-14.6-4.8-19.4.8-3.3 9.1-15 11.7-20 19.4 6.6 0 18.7-14.2 24.9-7.3.6.3 1.1.7 1.5 1.2 1.5 2.8-.9 6.1-1.8 8.8-1.2 2.4-1.7 4.5-1.6 6.4 23.8-.3 76.7-.3 95.2.1.3-.3.6-.5.9-.8 2.3-3 5.7-5.1 8-8.1 1-2.3 1.8-4.7 2.6-7-1.9 1.8-4.2 3.3-6.6 4.4z"
        />

      </svg>
    );
  }
}

export default Duck;