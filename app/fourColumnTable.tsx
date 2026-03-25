import { use } from "react";
import clsx from "clsx";

export default function FourColumnTable(props: any) {
    
  const releasetags: any = use(props.fourColTagPromise);
  const perftags: any = use(props.perfFourColTagPromise);

  const tags: any = releasetags.concat(perftags)

  tags.sort((a: { year: number; }, b: { year: number; }) => {
  if (a.year < b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
  }
  return 0;
});

    const fourColumnTable = (
        
        <div className="tableContainer">
          
          <table>
            {/* <thead className="four">
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Song</th> 
                <th scope="col">Artists</th>
                <th scope="col">{tags[0].type}</th>  
              </tr>
            </thead> */}
            <tbody className="four">
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
        <strong className={clsx(
                    [
                      tags[0].type_id === 12 && 'crossoverLeftTable',
                      (tags[0].type_id === 26 
                        || tags[0].type_id === 32
                        || tags[0].type_id === 54
                        || tags[0].type_id === 62
                        || tags[0].type_id === 63) && 'releaseLeftTable',
                      (tags[0].type_id === 1
                      || tags[0].type_id === 4
                      || tags[0].type_id === 6
                      || tags[0].type_id === 67)  && 'specialLeftTable'
          
          
                    ]
                    )}>{tags[0].type}</strong>
        {fourColumnTable}
        </>
    );
    
};