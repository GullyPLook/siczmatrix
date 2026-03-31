'use client'
import { use } from "react";

export default function SongTable(props: any) {
    
  const songs: any = use(props.songCreditPromise);
  const medleys: any = use(props.medleyCreditPromise);
  
  const amendedMedleys: any = medleys.map((m: { id: any; medley_id: any; title: any; year: any; artist_a: any; artist_a_id: any; artist_b: any; artist_b_id: any; }) => {
    
    return (
      {
        "id": m.id,
        "song_id": m.medley_id,
        "title": m.title,
        "year": m.year,
        "artist_a": m.artist_a,
        "artist_a_id": m.artist_a_id,
        "artist_b": m.artist_b,
        "artist_b_id": m.artist_b_id
      }
    )
  })

  const list: any = songs.concat(amendedMedleys)

  list.sort((a: { year: number; }, b: { year: number; }) => {
  if (a.year < b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
  }
  return 0;
});


    const twoColumnTable = (
        <div>
          
          <table>
            {/* <thead className="two">
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Artists</th>   
              </tr>
            </thead> */}
            <tbody className="two">
              {list.map((row: any) =>
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
        <strong className="songTable">{list[0].title}</strong>
        {twoColumnTable}
        </>
    );
    
};