'use client'
import { use } from "react";

export default function ThreeColumnTable(props: any) {
    
  const tags: any = use(props.threeColTagPromise);

  function title() {
    if ((tags[0].type_id === 7) || (tags[0].type_id === 8) || (tags[0].type_id === 9) || (tags[0].type_id === 10) || (tags[0].type_id === 12)) {
      return <><i>&nbsp;&nbsp;{tags[0].type}</i><strong> - {tags[0].tag}</strong></>
    } else {
      return <strong>&nbsp;&nbsp;{tags[0].tag}</strong>
    }
  };

    const tableTitle = (
      <div className="tableTitle">
        {title()}
    </div>
    );

    const threeColumnTable = (
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
              {tags.map((row: any) =>
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