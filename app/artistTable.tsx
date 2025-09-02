'use client'
import { use } from "react";

export default function ArtistTable(props: any) {
      
 const artistA: any = use(props.artistCreditPromiseA);
 const artistB: any = use(props.artistCreditPromiseB);
 const artist: any = artistA.concat(artistB);

artist.sort((a: { year: number; }, b: { year: number; }) => {
  if (a.year < b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
  }
  return 0;
});
 
 const artistName: any = use(props.tableArtistPromise);

    const tableTitle = (
      <div className="tableTitle">
        <strong>&nbsp;&nbsp;{artistName[0].artist}</strong>
    </div>
    );

    const threeColumnTable = (
        <div className="tableContainer">
          <table className="three">
            <thead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Song</th> 
                <th scope="col">With</th>  
              </tr>
            </thead>
            <tbody>
              {artist.map((row: any) =>
              <tr key={row.id}
                  id={row.id.toString()}>
                  <td
                  onClick={(event) => props.handleYear(event, row.year)}>{row.year}</td>
                  <td 
                  onClick={(event) => props.handleSongChange(event, row.id, row.song_id, row.title, row.year, row.artist_a, row.artist_a_id, row.artist_b, row.artist_b_id)}
                    >{row.title}</td>
                  <td>{row.artist_a === artistName[0].artist
                    ? row.artist_b : row.artist_a}</td>
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