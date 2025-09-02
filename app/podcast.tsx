'use client'
import React from "react";
import episodes from "./episodes.json";

export default function Podcast(props: any) {

  function mediaSwitches() {
    const switches = episodes.map(eps => {

      if (eps.id === 5) {
        return (
          <button 
            key={eps.id}
            id={eps.id.toString()}
            style={props.mediaSwitch === eps.id ? { opacity: 1} : {opacity: 0.3}}
            className="liveSwitch"
            onClick={(event) => props.handleMediaSelect(event, eps.link, eps.id)}>
              <strong><i>{eps.id}</i></strong>
          </button>
        )
      } else {
      
        return (
          <button 
            key={eps.id}
            id={eps.id.toString()}
            style={props.mediaSwitch === eps.id ? { opacity: 1} : {opacity: 0.3}}
            className="liveSwitch"
            onClick={(event) => props.handleMediaSelect(event, eps.link, eps.id)}>
              <strong><i>{eps.id}</i></strong>
          </button>
        )
        }
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
                <i>{mediaSwitches()}</i>
              </div>
            </div>
            <div className="songInfoContainer">
              
              <div className="scTitle">
                
                { props.episode.id === episodes.length? <div><strong style={{ fontSize: "large"}}>So I Called Zucchero - Latest episode</strong></div>
                : null }
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