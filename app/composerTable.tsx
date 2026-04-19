'use client'
import { use } from "react";

export default function ComposerTable(props: any) {
    
  const medleyComposer: any = use(props.medleyComposerCreditPromise);
  const composerCredits: any = use(props.composerCreditPromise);
  
  const composerConcat = medleyComposer.concat(composerCredits)

  let composer = composerConcat.filter((item: { id: any; }, index: number, objects: { id: any; }[]) => {
            if (index === 0) {
                return item;
            } else if (item.id !== objects[index - 1].id) {
                return item;
            }

        });

  composer.sort((a: { year: number; }, b: { year: number; }) => {
  if (a.year < b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
  }
  return 0;
});

  
  const threeColumnTable = 
    
       (
        <div className="tableContainer">

          
          <table>
            {/* <thead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Song</th> 
                <th scope="col">Artists</th>  
              </tr>
            </thead> */}
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
        <span className="songTable"><i>Written by</i><strong>&nbsp;&nbsp;{composer[0].composer}</strong></span>
        {threeColumnTable}
        </>
    );
    
};