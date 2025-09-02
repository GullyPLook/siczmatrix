import { use } from "react";

export default function ReleaseFourColumnTable(props: any) {
    
  const relTags: any = use(props.releaseFourColTagPromise);
  const yearTags: any = use(props.releaseYearFourTagPromise);

  const transYears = yearTags.map((obj: { year_tag: any; }) => {
    return {
      ...obj, year: obj.year_tag
    };
  });

transYears.map((x: { id: any; }) => {
    let index = relTags.findIndex((d: { id: any; })=> d.id === x.id)
  relTags[index] = x  
})


const tags: any = relTags
  .sort((a: { year: number; }, b: { year: number; }) => {
  if (a.year < b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
  }
  return 0;
});
      
    const tableTitle = (
      <div className="tableTitle">
        <strong>&nbsp;&nbsp;{tags[0].release_tag}</strong>
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
                <th scope="col">{tags[0].release_tag}</th>  
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
                  onClick={(event) => props.handlePerfThreeTag(event, row.performance_tag_id)}
                  >{row.performance_tag}</td>
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