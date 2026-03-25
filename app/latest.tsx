'use client'
import { use, useEffect } from "react";
import LogoSmall from "./logoSmall";

export default function Latest(props: any) {

const latest: any = use(props.latestPromise);

const threeColumnTable = (

        <div className="tableContainer">
          
          <table>
           {/*  <thead className="latest">
              <tr>
                <th scope="col">Song</th> 
                <th scope="col">Artists</th>
                <th scope="col"></th>
              </tr>
            </thead> */}
            <tbody className="latest">
              {latest.map((row: any) =>
              <tr key={row.id} 
                  id={row.id.toString()}
                  style={props.latestSwitch === row.id ?  
                    {color: 'rgb(41, 48, 88)',
                     backgroundColor:  'rgb(39, 179, 58)', 
                     fontWeight: 'bold'} : { opacity: 1}}
                     >
                  <td onClick={(event) => props.handleLatestSelect(event, row.link, row.id)}>{row.title}</td>
                  <td onClick={(event) => props.handleLatestSelect(event, row.link, row.id)}>{row.artist_a} & {row.artist_b}</td>
                  <td onClick={(event) => props.handleSearchChange(event, row.id, row.song_id, row.title, row.year, row.artist_a, row.artist_a_id, row.artist_b, row.artist_b_id)}>
                    <LogoSmall size={30} color="#9f38d6" color2="rgb(236, 151, 23)"/></td>
              </tr>
              )} 
            </tbody>
          </table>
        </div>
      ); 
const card = (

     <div className="latestCard">
        
            <div className="videoContainer">
              <div>
                
              </div> 
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
            <div className="latestInfoContainer">{threeColumnTable}</div>
            
         </div>
         

     
      )

      useEffect(() => {
          setTimeout(() => props.handleLatestSelect(event, latest[0].link, latest[0].id), 100)
        }, [latest])
    

    return (
        <>
       <strong className="latestTable">Duet Matrix - Latest entries</strong>
        {card}
        

        </>
    );
};