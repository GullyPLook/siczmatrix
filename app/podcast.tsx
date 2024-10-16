'use client'
import React from "react";

export default function Podcast(props: any) {

    const podcastContainer = (
        <div className="songCard">
            <div className="videoContainer">
              <iframe 
                // width="560" 
                // height="315" 
                src="https://www.youtube.com/embed/videoseries?si=ARHtlEA3IiAh_2Rk&amp;list=PL3fAq4OrBzWC4kDgqGk8ryS0EPELwFb0e" 
                title="YouTube video player" 
                // frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                // referrerpolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
              </iframe>
            </div>
        </div>
    );
    

    return (
        <>
        {podcastContainer}
        </>
    );
};