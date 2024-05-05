'use client'
import React from "react";

export default function Information(props: { seeIntroduction: any; seeCongratulations: any; seeNiceTry: any; }) {
    
    return(
        <div>
          {props.seeIntroduction &&
            <ul>
              <li>Welcome to the SICZ Duet Matrix.</li>
              <br />
              <li className="playlistSongs">The So I Called Zucchero podcast creates circular playlists of vocal duets.</li> 
              <li className="playlistSongs">Using individual artists as links we plot a course through the matrix taking as few steps as possible to create a loop.</li>
              <br />
              <li>See if you can make a SICZ playlist within 6 duets...</li>
            </ul>}
          {props.seeCongratulations &&
            <ul>
              <li className="congrats">Congratulations!</li>
              <li className="congratMessage">You made a circular playlist within 6 degrees of separation.</li>
            </ul>}
           {props.seeNiceTry &&
            <ul>
              <li className="congrats">Nice try!</li>
              <li className="congratMessage">You made a circular playlist! Now try to do it within 6 degrees of separation.</li>
            </ul>}
        </div>
        )
}