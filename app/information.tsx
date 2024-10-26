'use client'
import React from "react";


export default function Information(props: { seeIntroduction: any; seeCongratulations: any; seeNiceTry: any; }) {
    
    return(
        <div>
          {props.seeCongratulations &&
            <ul>
              <li className="congrats"><strong>Congratulations!</strong></li>
              <li className="congratMessage">You made a circular playlist within 6 degrees of separation.</li>
            </ul>}
           {props.seeNiceTry &&
            <ul>
              <li className="congrats"><strong>Nice try!</strong></li>
              <li className="congratMessage">You made a circular playlist! Now try to do it within 6 degrees of separation.</li>
            </ul>}
        </div>
        )
}