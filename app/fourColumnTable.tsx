import { use } from "react";

export default function FourColumnTable(props: any) {
    
  const tags: any = use(props.fourColTagPromise);
  
    const tableTitle = (
      <div className="tableTitle">
        <strong>&nbsp;&nbsp;{tags[0].type}</strong>
    </div>
    );

    const fourColumnTable = (
        <div className="tableContainer">
          <table>
            <thead className="four">
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Song</th> 
                <th scope="col">Artists</th>
                <th scope="col">{tags[0].type}</th>  
              </tr>
            </thead>
            <tbody>
              {tags.map((row: any, index: any) =>
              <tr key={index} 
                  id={row.id.toString()}>
                  <td onClick={(event) => props.handleYear(event, row.year)}
                  >{row.year}</td>
                  <td 
                  onClick={(event) => props.handleSongChange(event, row.id, row.song_id, row.title, row.year, row.artist_a, row.artist_a_id, row.artist_b, row.artist_b_id)}
                    >{row.title}</td>
                  <td>{row.artist_a} & {row.artist_b}</td>
                  <td
                  onClick={(event) => props.handleTag(event, row.tag_id)}
                  >{row.tag}</td>
              </tr>
              )} 
            </tbody>
          </table>
        </div>
      );  


    return (
        <>
        {tableTitle}
        {fourColumnTable}
        </>
    );
    
};