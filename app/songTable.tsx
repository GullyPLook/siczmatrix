'use client'
import { use } from "react";

export default function SongTable(props: any) {
    
  const songs: any = use(props.songCreditPromise);

    const tableTitle = (
      <div className="tableTitle">
        <strong>&nbsp;&nbsp;{songs[0].title}</strong>
    </div>
    );

    const twoColumnTable = (
        <div className="tableContainer">
          <table>
            <thead className="two">
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Artists</th>   
              </tr>
            </thead>
            <tbody>
              {songs.map((row: any) =>
              <tr key={row.id} 
                  id={row.id.toString()}>
                  <td onClick={(event) => props.handleYear(event, row.year)}
                  >{row.year}</td>
                  <td
                  onClick={(event) => props.handleSongChange(event, row.id, row.song_id, row.title, row.year, row.artist_a, row.artist_a_id, row.artist_b, row.artist_b_id)}
                  >{row.artist_a} & {row.artist_b}</td>
              </tr>
              )} 
            </tbody>
          </table>
        </div>
      );  


    return (
        <>
        {tableTitle}
        {twoColumnTable}
        </>
    );
    
};