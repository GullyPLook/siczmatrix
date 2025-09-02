'use client'
import { use } from "react"
import Fuse from "fuse.js";;

export default function Search(props: any) {

  const records: any = use(props.versionPromise)

  const fuse = new Fuse( records, {
      keys: [
        "year",
        "title",
        "artist_a",
        "artist_b"
      ]
    });
    
    const results = fuse.search(props.query);
    const searchResults: any = results.map(result => result.item);

    return (
       <>
        <ul>
          {searchResults.map((result: { id: number; song_id: number, title: any; year: any; artist_a: any; artist_a_id: number; artist_b: any; artist_b_id: number; }) => {
            return (
              <button 
                key={result.id} 
                id={result.id.toString()}
                onClick={(event) => props.handleSearchChange(event, result.id, result.song_id, result.title, result.year, result.artist_a, result.artist_a_id, result.artist_b, result.artist_b_id)} 
                className="buttonSearch"
                >
                <span className="song">{`${result.title}`}</span><i>{` (${result.year})`}</i>
                <br />
                <strong>{`${result.artist_a} & ${result.artist_b}`}</strong>
                </button>
              )
          }
          )}
        </ul>
       </>
    )
}