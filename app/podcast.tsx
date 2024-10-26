'use client'
import React from "react";
import episodes from "./episodes.json";

export default function Podcast(props: any) {

  function mediaSwitches() {
    const switches = episodes.map(eps => {
      
        return (
          <button 
            key={eps.id}
            id={eps.id}
            className="liveSwitch"
            onClick={(event) => props.handleMediaSelect(event, eps.link, eps.id)}>
              <strong><i>{eps.tag}</i></strong>
          </button>
        )
    })
    return switches 
  };

    const podcastContainer = (
        <div className="songCard">
            <div className="videoContainer">
              <iframe 
                // width="560" 
                // height="315" 
                src={props.mediaSelect} 
                title="YouTube video player" 
                // frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                // referrerpolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
              </iframe>
              <div className="mediaSwitches">
                {mediaSwitches()}
              </div>
            </div>
            <div className="songInfoContainer">
              <div className="scTitle">
                <i style={{ color: "white", fontSize: "x-large" }}>{props.episode.tag} - {props.episode.name}</i><br></br>
                <i>({props.episode.date})</i>
              </div>
              <br />
              <div className="blurb">
                {`${props.episode.blurb}`}
              </div>
                
            </div>
        </div>
    );
    

    return (
        <>
        {podcastContainer}
        </>
    );
};