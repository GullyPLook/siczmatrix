'use client'
import React from "react";

export default function Table(props: any) {
    
    const tableTitle = (
      <div className="tableTitle"><strong>&nbsp;&nbsp;{props.tableData.title}</strong></div>
    );

    const threeColumnTable = 
    
       (
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
              {props.tableData.list.map((row: { id: React.Key | string ; year: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; artist_a: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; artist_b: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) =>
              <tr key={row.id} 
                  id={row.id.toString()}>
                  <td>{row.year}</td>
                  <td onClick={(event) => props.handleSongCard(event, row.id)}>{row.title}</td>
                  <td>{row.artist_a} & {row.artist_b}</td>
              </tr>
              )} 
            </tbody>
            {/* <tfoot>
              <tr>
                <th scope="row" colspan="2">Total albums</th>
                <td colspan="2">77</td>
              </tr>
            </tfoot> */}
          </table>
        </div>
      );  
    
      const fourColumnTable = 
    
       (
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Song</th> 
                <th scope="col">Artists</th> 
                <th scope="col">
                  {props.tableData.title === "Cause" && `${"Cause"}`}
                  {props.tableData.title === "Soundtrack" && `${"Soundtrack"}`}
                  {props.tableData.title === "Televised performance" && `${"TV Show"}`}
                  {props.tableData.title === "Film performance" && `${"Film"}`}
                  {props.tableData.column === "programme_genre" && `${props.tableData.title}`}
                  {props.tableData.column === "composer" && `${"Songwriters"}`}</th> 
              </tr>
            </thead>
            <tbody>
              {props.tableData.list.map((row: { id: React.Key | string ; year: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; artist_a: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; artist_b: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; Cause: any; album_or_film_title: any; programme_title: any; composer: any; }) =>
              <tr key={row.id} 
                  id={row.id.toString()}>
                  <td>{row.year}</td>
                  <td onClick={(event) => props.handleSongCard(event, row.id)}>{row.title}</td>
                  <td>{row.artist_a} & {row.artist_b}</td>
                  {props.tableData.title === "Cause" &&
                  <td onClick={(event) => props.handleTableLink(event, row.Cause)}>
                     {`${row.Cause}`}</td>}
                  {props.tableData.title === "Soundtrack" &&
                  <td onClick={(event) => props.handleTableLink(event, row.album_or_film_title)}>
                     {`${row.album_or_film_title}`}</td>}
                  {props.tableData.title === "Televised performance" &&
                  <td onClick={(event) => props.handleTableLink(event, row.programme_title)}>
                     {`${row.programme_title}`}</td>}
                  {props.tableData.title === "Film performance" &&
                  <td onClick={(event) => props.handleTableLink(event, row.programme_title)}>
                     {`${row.programme_title}`}</td>}
                  {props.tableData.column === "programme_genre" &&
                  <td onClick={(event) => props.handleTableLink(event, row.programme_title)}>
                     {`${row.programme_title}`}</td>}
                  {props.tableData.column === "composer" &&
                  <td>{`${row.composer}`}</td>}
              </tr>
              )} 
            </tbody>
            {/* <tfoot>
              <tr>
                <th scope="row" colspan="2">Total albums</th>
                <td colspan="2">77</td>
              </tr>
            </tfoot> */}
          </table>
        </div>
      ); 


    return (
        <>
        {tableTitle}
        {props.tableData.title !== "Cause" 
          && props.tableData.title !== "Soundtrack" 
          && props.tableData.title !== "Televised performance"
          && props.tableData.title !== "Film performance" 
          && props.tableData.column !== "programme_genre" 
          && props.tableData.column !== "composer" && threeColumnTable}
        {props.tableData.title === "Cause" && fourColumnTable} 
        {props.tableData.title === "Soundtrack" && fourColumnTable}
        {props.tableData.title === "Televised performance" && fourColumnTable}
        {props.tableData.title === "Film performance" && fourColumnTable}
        {props.tableData.column === "programme_genre" && fourColumnTable}
        {props.tableData.column === "composer" && fourColumnTable}
        </>
    );
    
};