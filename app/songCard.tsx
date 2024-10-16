'use client'
import React from "react";

export default function SongCard(props: any) {
    
  function mediaSwitches() {
    const switches = Object.entries(props.songCard[0]).slice(24, 27).map(vids => {
      if (vids[1] !== "") {
        return (
          <button 
            key={vids[0]}
            id={vids[0]}
            className="liveSwitch"
            onClick={(event) => props.handleMediaSelect(event, vids[1])}
            >
              <strong><i>{vids[0]}</i></strong>
          </button>
        )
      } else {
        return (
          <span 
            key={vids[0]}
            className="deadSwitch">
              <strong><i>{vids[0]}</i></strong>
          </span>
        )
      }
    })
    return switches 
  };

  function composerSplit(x: string) {

    const regex = /\s*(?:,|$)\s*/;
    const seperates = x.split(regex);

    const composers = seperates.map((composer: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined) => {
      if (composer === seperates[seperates.length - 1]) {
        return (
        <button 
          className="composerTag"
          onClick={(event) => props.handleComposers(event, composer)}>{composer}</button>
      )} else {
        return (
        <button 
          className="composerTag"
          onClick={(event) => props.handleComposers(event, composer)}>{composer},&nbsp;</button>
        )
      };  
    });
    return composers
  };
  

   const card = (
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
              <div className="scSongInfo">
                <div className="scTitle">
                  <i style={{ color: "white", fontSize: "x-large" }}>{props.songCard[0].title}</i>
                  <button 
                    onClick={(event) => props.handleTableLink(event, props.songCard[0].year)}>
                    <i>&nbsp;&nbsp;({props.songCard[0].year})</i>
                  </button>
                  <br />
                  <button 
                    onClick={(event) => props.handleTableLink(event, props.songCard[0].artist_a)}>
                    <strong>{props.songCard[0].artist_a}</strong>
                  </button>
                  <strong> & </strong> 
                  <button 
                    onClick={(event) => props.handleTableLink(event, props.songCard[0].artist_b)}>
                    <strong>{props.songCard[0].artist_b}</strong>
                  </button>
                  <br />
                  <span style={{ color: "white", fontSize: "smaller" }}>({composerSplit(props.songCard[0].composer)})</span>
                </div>
                <br />
                <div className="scRelease">
                   {Object.entries(props.songCard[0]).slice(6, 12).map(tag  => {
                     if (tag[1] !== "") {
                     return (
                   <button 
                     className="releaseTags" 
                     id={tag[0]} 
                     key={tag[0]}
                     onClick={(event) => props.handleTag(event, tag)}>
                     <strong><i>{props.seeSongTags && tag[1]}</i></strong>
                     </button>
                     )} else { return null }
                   })}
                </div>
                <div className="scSong">
                   {Object.entries(props.songCard[0]).slice(12, 18).map(tag  => {
                     if (tag[1] !== "" && tag[0] !== "Cause") {
                     return (
                       <button 
                         className="songTags" 
                         id={tag[0]} 
                         key={tag[0]}
                         onClick={(event) => props.handleTag(event, tag)}>
                       <strong><i>{props.seeSongTags && tag[1]}</i></strong>
                       </button>
                     )} else if (tag[1] !== "" && tag[0] === "Cause") {
                     return (
                       <button 
                         className="songTags" 
                         id={tag[0]} 
                         key={tag[0]}
                         onClick={(event) => props.handleTag(event, tag)}>
                         <strong><i>{props.seeSongTags && tag[0]}</i></strong>
                       </button>    
                      )} else { return null }
                   })}
                </div>
                <div className="scSpecial">
                   {Object.entries(props.songCard[0]).slice(18, 21).map(tag  => {
                     if (tag[1] !== "") {
                     return (
                   <button 
                     className="specialTags" 
                     id={tag[0]} 
                     key={tag[0]}
                     onClick={(event) => props.handleTag(event, tag)}>
                     <strong><i>{props.seeSongTags && tag[1]}</i></strong>
                     </button>
                     )} else { return null }
                   })}
                </div>
              </div>
              <div className="scPerformance">
                 {Object.entries(props.songCard[0]).slice(21, 24).map(tag  => {
                   if (tag[1] !== "") {
                   return (
                 <button 
                   className="performanceTags"
                   id={tag[0]} 
                   key={tag[0]}
                   onClick={(event) => props.handleTag(event, tag)}>
                   <strong><i>{props.seeSongTags && tag[1]}</i></strong>
                   </button>
                   )} else { return null }
                 })}
              </div>
            </div>
        </div>
    );
    
    return (
        <>
        {card}
        </>
    );
};