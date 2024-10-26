'use client'
import React from "react";

export default function Logo(props: any) {

return (
  <div>
  {props.seeLogo &&
  <div className="logo">
    <svg
      width="20%" 
      height="20%" 
      version="1.1" 
      viewBox="0 0 36.522 53.096"
      xmlns="http://www.w3.org/2000/svg">
      <g 
        transform="translate(-74.433 -136.33)">
        <path 
          id="lines"
          d="m93.964 154.07-10.714-15.214 27-1.8214-11.25 24.964 9.3214 26.786-33.214-13.5z" 
          fill="none" 
          stopColor="#000000" 
          stroke="#9f38d6" 
          strokeLinejoin="round" 
          strokeWidth=".30917"/>
      </g>
      <g
        transform="translate(-74.433 -136.33)">
        <circle id="dot1"
          cx="83.156" 
          cy="138.8" 
          r=".7"
          fill="rgb(236, 151, 23)" />
        <circle id="dot2"
          cx="110.26" 
          cy="137.03" 
          r=".7"
          fill="rgb(236, 151, 23)" />
        <circle id="dot3"
          cx="93.944" 
          cy="154.02" 
          r=".7"
          fill="rgb(236, 151, 23)" />
        <circle id="dot4"
          cx="99.025" 
          cy="161.91" 
          r=".7"
          fill="rgb(236, 151, 23)" />
        <circle id="dot5"
          cx="108.28" 
          cy="188.72" 
          r=".7"
          fill="rgb(236, 151, 23)" />
        <circle id="dot6"
          cx="75.133" 
          cy="175.26" 
          r=".7"
          fill="rgb(236, 151, 23)" />
      </g>
    </svg>
   </div>}
  </div>
          )};