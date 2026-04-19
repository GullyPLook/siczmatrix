'use client'
import { use } from "react";
import clsx from "clsx";

export default function ThreeColumnTable(props: any) {
    
  const releasetags: any = use(props.threeColTagPromise);
  const perftags: any = use(props.perfThreeColTagPromise);

  const tags = releasetags.concat(perftags);

  tags.sort((a: { year: number; }, b: { year: number; }) => {
  if (a.year < b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
  }
  return 0;
});


  function title() {
    if ((tags[0].type_id === 7) || (tags[0].type_id === 8) || (tags[0].type_id === 9) || (tags[0].type_id === 10) || (tags[0].type_id === 12)) {
      return <><i>{tags[0].type}</i><strong> - {tags[0].tag}</strong></>
    } else {
      return <strong>{tags[0].tag}</strong>
    }
  };

    const threeColumnTable = (
    
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
              {tags.map((row: any) =>
              <tr key={row.id} 
                  id={row.id.toString()}>
                  <td scope="col" onClick={(event) => props.handleYear(event, row.year)}
                  >{row.year}</td>
                  <td scope="col"
                  onClick={(event) => props.handleSongChange(event, row.id, row.song_id, row.title, row.year, row.artist_a, row.artist_a_id, row.artist_b, row.artist_b_id)}
                    >{row.title}</td>
                  <td scope="col">{row.artist_a} & {row.artist_b}</td>
              </tr>
              )} 
            </tbody>
          </table>
        </div>
      
      );  
      
    return (
        <>
        <span className={clsx(
          [
            (tags[0].type_id === 5
              || tags[0].tag_id === 20
            || tags[0].type_id === 11
            || tags[0].type_id === 12) && 'crossoverTable',
            (tags[0].type_id === 2
              ||  tags[0].type_id === 26 
              || tags[0].type_id === 32
              || tags[0].type_id === 54
              || tags[0].type_id === 62
              || tags[0].type_id === 63) && 'releaseTable',
            tags[0].type_id === 3 && 'genreTable',
            tags[0].type_id === 7 && 'songFormTable',
            tags[0].type_id === 8 && 'subjectTable',
            tags[0].type_id === 9 && 'approachTable',
            tags[0].type_id === 10 && 'dynamicTable',
            ( tags[0].type_id === 4  
            || tags[0].type_id === 6
            || tags[0].type_id === 67)  && 'specialTable'
          ]
          )}>{title()}</span>
        {threeColumnTable}
        </>
    );
    
};