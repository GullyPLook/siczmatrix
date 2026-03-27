'use client'
import { use, useEffect } from "react";
import LogoSmall from "./logoSmall";

export default function Latest(props: any) {

const latest: any = use(props.latestPromise);


const rows: any = latest.map((row: any) => {
  if (props.latestSwitch === row.id) {
    return (
          <div key={row.id} 
              id={row.id.toString()}
              className="latestOption"
              style={{ backgroundColor: 'rgb(41, 48, 88)'}}
              >
            <button 
              className="latestButtonOption" 
              onClick={(event) => props.handleLatestSelect(event, row.link, row.id)}
              >
               <strong className="latestSong">{`${row.title}`}</strong>
               <i style={{color: "rgb(39, 179, 58)"}}>{` (${row.year})`}</i>
               <br />
               <strong>{`${row.artist_a} & ${row.artist_b}`}</strong>
            </button>
            <button className="logoLatestCol" onClick={(event) => props.handleSearchChange(event, row.id, row.song_id, row.title, row.year, row.artist_a, row.artist_a_id, row.artist_b, row.artist_b_id)}>
                      <LogoSmall size={40} color="#9f38d6" color2="rgb(236, 151, 23)"/>
            </button>
          </div>
         )
  } else {
    return (
          <div key={row.id} 
              id={row.id.toString()}
              className="latestOption"
              >
            <button 
              className="latestButtonOption" 
              onClick={(event) => props.handleLatestSelect(event, row.link, row.id)}
              >
               <i className="latestSong">{`${row.title}`}</i>
               <i style={{color: "rgb(39, 179, 58)"}}>{` (${row.year})`}</i>
               <br />
               <i>{`${row.artist_a} & ${row.artist_b}`}</i>
            </button>
            <button className="logoLatestCol" onClick={(event) => props.handleSearchChange(event, row.id, row.song_id, row.title, row.year, row.artist_a, row.artist_a_id, row.artist_b, row.artist_b_id)}>
                      <LogoSmall size={40} color="#9f38d6" color2="rgb(236, 151, 23)"/>
            </button>
          </div>
         )
  }
         
})

/* style={props.latestSelect.substring(props.latestSelect.length - 5) === row.link.substring(props.latestSelect.length - 5) ? { opacity: 1} : {opacity: 0.3}} */

const card = (

     <div className="latestCard">
        
            <div className="videoContainer">
              
              <iframe 
                // width="560" 
                // height="315" 
                src={props.latestSelect} 
                title="YouTube video player" 
                // frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                // referrerpolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
              </iframe> 
                         
            </div>
            <div className="latestOptionsContainer">{rows}</div>
            
    </div>
         

     
      )

      useEffect(() => {
          setTimeout(() => props.handleLatestSelect(event, latest[0].link, latest[0].id), 100)

        }, [latest])
    

    return (
        <>
       <strong className="latestTable">Latest entries</strong>
        {card}
        

        </>
    );
};