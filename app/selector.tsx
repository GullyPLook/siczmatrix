'use client'
import React from "react";

export default function Selector(props: any) {

   
    const selectors = props.selections.map((selector: { boxId: React.Key | null | undefined; isSelected: any; isBold: any; artistA: any; artistB: any; selected: { title: any; year: any; relationship: any; duo_lp: any; presentation: any; programme_title: any; writer_a: any; writer_b: any; writer_c: any; release: any; soundtrack: any; promotional_video: any; }; isOptions: any; options: any[]; seeDetails: any; }) => 
        selector.boxId === 1 && selector.isSelected && (
        <div 
          className="selectedContainerA"
          key={selector.boxId} 
          id={selector.boxId}
          style={selector.isBold ? { opacity: 1} : {opacity: 0.3}}>
          <div>
            <strong className="artista">{`${selector.artistA}`}</strong>
            <br />
            <strong className="artistb">{`${selector.artistB}`}</strong>
          </div>
          <button 
            className="buttonSwap"
            onClick={(event) => props.handleSwapArtist(event, selector.boxId)}>
          <svg width="16" height="30" viewBox="0 0 16 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.7942 13.5L8 0L0.205765 13.5H15.7942ZM0.20578 23.5L8 37L15.7942 23.5H0.20578Z" fill="#27B33A"/>
          </svg>
          </button>
          <div 
            className="song">
            <span>{`${selector.selected.title}`}</span>
            <br/>
            <span style={{color: "#27B33A"}}><i>{` (${selector.selected.year})`}</i></span>
          </div>
        </div>
        ) || 
       selector.isOptions && (
        <div 
          className="optionsContainer" 
          key={selector.boxId} 
          id={selector.boxId}>
          {selector.options.length > 0 ? selector.options.map(option => 
          (
           <button 
             className="buttonOption"
             key={option.id} 
             id={option.id}
             onClick={(event) => props.handleOptionChange(event, option.id, selector.boxId)}>
             <span className="song"><i>{`${option.title}`}</i></span><i>{` (${option.year})`}</i>
             <br />
             <i>{`${option.artist_a} & ${option.artist_b}`}</i>
           </button>
         )) : <div className="noMatches">
            <i>...No matches found</i>
            </div>}
         </div>
       ) || 
       selector.isSelected && (
        <div 
          className="selectedContainer"
          key={selector.boxId} 
          id={selector.boxId}
          style={selector.isBold ? { opacity: 1} : {opacity: 0.3}}>
          <button 
            className="buttonRevertToOptions"
            onClick={(event) => props.handleRevertToOptions(event, selector.boxId)}>
            <div>
              <strong>{`${selector.artistA}`}</strong>
              <br />
              <strong>{`${selector.artistB}`}</strong>
            </div>
          </button>
          <button 
            className="buttonDetails"
            onClick={(event) => props.handleSongDetails(event, selector.boxId)}>
            <div className="song">
              <span>{`${selector.selected.title}`}</span>
              <br />
              <span style={{color: "#27B33A"}}><i>{` (${selector.selected.year})`}</i></span>
            </div> 
          </button>
        </div> 
       )
      //  || 
      //   selector.seeDetails && (
      //   <div 
      //     className="selectedContainer"
      //     key={selector.boxId} 
      //     id={selector.boxId}
      //     style={selector.isBold ? { opacity: 1} : {opacity: 0.3}}>
      //     <button 
      //       className="buttonRevertToOptions"
      //       onClick={(event) => props.handleRevertToOptions(event, selector.boxId)}>
      //       <div>
      //         <strong>{`${selector.artistA}`}</strong>
      //         <br />
      //         <strong>{`${selector.artistB}`}</strong>
      //       </div>
      //       <div className="songDetailsLeft">
      //         <span>{`${selector.selected.relationship} ${selector.selected.duo_lp}`}</span>
      //         <br />
      //         <span style={{color: "#27B33A"}}>{`${selector.selected.presentation}`}</span>
      //         <br />
      //         <span>{`${selector.selected.programme_title}`}</span>
      //         <br />
      //       </div>
      //     </button>
      //     <button 
      //       className="buttonDetails"
      //       onClick={(event) => props.handleRevertToSelected(event, selector.boxId)}>
      //       <div className="song">
      //         <span>{`${selector.selected.title}`}</span>
      //         <br />
      //         <span style={{color: "#27B33A"}}><i>{` (${selector.selected.year})`}</i></span>
      //         <div className="songDetailsRight">
      //           <span>{`(${selector.selected.writer_a}, ${selector.selected.writer_b}, ${selector.selected.writer_c})`}</span>
      //           <br />
      //           <span>{`${selector.selected.release}`}</span>
      //           <br />
      //           <span>{`${selector.selected.soundtrack}`}</span>
      //           <br />
      //           <span>{`${selector.selected.promotional_video}`}</span>
      //           <br />
      //         </div>
      //       </div> 
      //     </button>
      //   </div>
      //  )
      );   

    return (
        <>
        {selectors}
        </>
        
    );
}