'use client'
import React from "react";

export default function Playlist(props) {

  const entries = props.recordState.map(record => 
    record.isShown && (
    <li className="transition ease-in-out hover:shadow-xl duration-400 ..." 
        key={record.id} 
        id={record.id}
        style={record.isBold ? {} : {opacity: 0.5, color: "#D1206A"}}>{record.entry.map((i) => {
           return <span key={i.id}>{i.artist_a +' & '+i.artist_b+' - '}</span>})}
           {record.entry.map((i) => {
             return <span key={i.id} className="playlistSongs">{i.title+' '}</span>})}
           {record.entry.map((i) => {
             return <span key={i.id} className="year">({i.year})</span>
         }) }
         {record.count !== 1 && <span className="entryCount">{record.count}</span>}
         </li> 
    ))
    return (
        <>
        {entries}
        </>
    )
}