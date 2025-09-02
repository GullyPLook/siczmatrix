'use client'
import { use } from "react";

export default function ComposerTable(props: any) {
    
  
  const composer: any = use(props.composerCreditPromise);
  
    const tableTitle = (
      <div className="tableTitle">
        <strong>&nbsp;&nbsp;Written by {composer[0].composer}</strong>
    </div>
    );

    const threeColumnTable = 
    
       (
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Song</th> 
                <th scope="col">Artists</th>  
              </tr>
            </thead>
            <tbody>
              {composer.map((row: any) =>
              <tr key={row.id} 
                  id={row.id.toString()}>
                  <td onClick={(event) => props.handleYear(event, row.year)}
                  >{row.year}</td>
                  <td 
                  onClick={(event) => props.handleSongChange(event, row.id, row.song_id, row.title, row.year, row.artist_a, row.artist_a_id, row.artist_b, row.artist_b_id)}
                    >{row.title}</td>
                  <td>{row.artist_a} & {row.artist_b}</td>
              </tr>
              )} 
            </tbody>
          </table>
        </div>
      );  


    return (
        <>
        {tableTitle}
        {threeColumnTable}
        </>
    );
    
};