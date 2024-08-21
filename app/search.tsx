'use client'
import React from "react";

export default function Search(props: any) {

    return (
       <>
        <ul>
          {props.searchResults.map((result: { id: any; title: any; year: any; artist_a: any; artist_b: any; }) => {
            return (
              <button 
                key={result.id} 
                id={result.id}
                onClick={(event) => props.handleSearchChange(event, result.id)} 
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