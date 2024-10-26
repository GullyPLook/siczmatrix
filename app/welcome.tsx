'use client'
import React from "react";

export default function Welcome(props: any) {


    return (
        <div>
          
          <h1>Welcome to the SICZ <span style={{ color: "white"}}>Duet Matrix.</span></h1>
          <br />
          <h3>
              This duet data matrix is being developed alongside the
              So I Called Zucchero podcast...
              <button 
              style={{ color: "#9f38d6" }}
              onClick={(event) => props.handlePodcastDetails(event)}><strong>↘</strong>
              </button> <br></br>
              {props.seePodcastDetails && 
              <div className="instructions" style={{ color: "#acacac" }}>
               <i>
               The SICZ podcast creates circular playlists of vocal duets.
               Using individual artists as links we plot a course through the matrix taking as few steps as possible to create a loop. <br></br>
               We take subscribers song suggestions to start each episode, so explore the matrix, play with the builder and get in touch.
               </i>
              </div>}
              In addition to 
              <span style={{ color: "#999", fontStyle: "italic"}}> search </span> 
                and <span className="performanceTags"><strong><i>tags</i></strong></span>, 
                you can navigate through the matrix with 
              <span style={{ fontWeight: "bold" }}> names</span>, 
              <span style={{ color: "white"}}> titles,</span> 
              <span style={{ fontStyle: "italic"}}> years</span> and table entries. <br></br>
                The search result will also start a SICZ playlist builder for you to try.
          </h3>  
        
        </div>
    )
}