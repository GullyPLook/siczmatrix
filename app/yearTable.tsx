'use client'
import { use } from "react";

export default function YearTable(props: any) {
    
  const year: any = use(props.yearCreditPromise);

    const tableTitle = (
      <div className="tableTitle">
        <strong>&nbsp;&nbsp;{year[0].year}</strong>
    </div>
    );

    const twoColumnTable = (
        <div className="tableContainer">
          <table>
            <thead className="two">
              <tr>
                <th scope="col">Song</th> 
                <th scope="col">Artists</th>  
              </tr>
            </thead>
            <tbody>
              {year.map((row: any) =>
              <tr key={row.id} 
                  id={row.id.toString()}>
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
        {twoColumnTable}
        </>
    );
    
};