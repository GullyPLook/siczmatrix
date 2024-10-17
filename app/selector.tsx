'use client'
import React from "react"

export default function Selector(props: any) {

  function composerSplit(name: string) {

    const regex = /\s*(?:,|$)\s*/;
    const seperates = name.split(regex);

    const composers = seperates.map((composer, index) => {
      if (composer === seperates[seperates.length - 1]) {
        return (
        <button key={index}
          className="composerTag"
          onClick={(event) => props.handleComposers(event, composer)}>{composer}</button>
      )} else {
        return (
        <button key={index}
          className="composerTag"
          onClick={(event) => props.handleComposers(event, composer)}>{composer},&nbsp;</button>
        )
      };  
    });
    return composers
  };

    const selectors = props.selections.map((selector: { boxId: React.Key | number | number; isSelected: any; isBold: any; artistA: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined; artistB: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined; selected: any; seeDetails: any; isOptions: any; options: any[]; }) => 
        selector.boxId === 1 && selector.isSelected && (
        <div 
          className="selectedContainerA"
          key={selector.boxId} 
          id={selector.boxId.toString()}
          style={selector.isBold ? { opacity: 1} : {opacity: 0.3}}>
            <button 
             className="buttonSwap"
             onClick={(event) => props.handleSwapArtist(event, selector.boxId)}><strong style={{fontSize: "x-large"}}>↕</strong>
            </button>
            <div className="artists">
              <button onClick={(event) => props.handleTableLink(event, selector.artistA)}><strong>{selector.artistA}</strong></button>
              <br />
              <button onClick={(event) => props.handleTableLink(event, selector.artistB)}><strong>{selector.artistB}</strong></button>
            </div>
            <div className="containerButtons">
              <br />
              <button 
                onClick={(event) => props.handleSongDetails(event, selector.boxId)}><strong>...</strong>
              </button>
            </div>
            <div className="song">
              <button 
                className="song"
                onClick={(event) => props.handleSongCard(event, selector.selected.id)}>{selector.selected.title}</button>
              <br />
              <button 
                style={{color: "#27B33A"}}
                onClick={(event) => props.handleTableLink(event, selector.selected.year)}><i>{selector.selected.year}</i></button>
          </div> 
        </div>
        ) || 
        selector.boxId === 1 && selector.seeDetails && (
        <div 
          className="selectedContainerA"
          key={selector.boxId} 
          id={selector.boxId.toString()}
          style={selector.isBold ? { opacity: 1} : {opacity: 0.3}}>
          <button 
            className="buttonSwap"
            onClick={(event) => props.handleSwapArtist(event, selector.boxId)}><strong>↕</strong>
          </button>
          <div className="artists">
            <button onClick={(event) => props.handleTableLink(event, selector.artistA)}><strong>{selector.artistA}</strong></button>
            <br />
            <button onClick={(event) => props.handleTableLink(event, selector.artistB)}><strong>{selector.artistB}</strong></button>
          </div>
          <div className="containerButtons">
            <br />
            <button
                 onClick={(event) => props.handleRevertToSelected(event, selector.boxId)}><strong>...</strong>
            </button>
          </div>
          <div className="song">
            <button 
              className="song"
              onClick={(event) => props.handleSongCard(event, selector.selected.id)}>{selector.selected.title}</button>
            <br />
            <button 
              style={{color: "#27B33A"}}
              onClick={(event) => props.handleTableLink(event, selector.selected.year)}><i>{selector.selected.year}</i></button>
          </div> 
          <div className="selectedABlocker"></div>
          <div>
          {Object.entries(props.songCard[0]).slice(12, 18).map(tag  => {
                     if (tag[1] !== "" && tag[0] !== "Cause") {
                     return (
                       <button 
                         className="songTags" 
                         id={tag[0]} 
                         key={tag[0]}
                         onClick={(event) => props.handleTag(event, tag)}>
                       <strong><i>{props.seeSongTags && tag[1]}</i></strong>
                       </button>
                     )} else if (tag[1] !== "" && tag[0] === "Cause") {
                     return (
                       <button 
                         className="songTags" 
                         id={tag[0]} 
                         key={tag[0]}
                         onClick={(event) => props.handleTag(event, tag)}>
                         <strong><i>{props.seeSongTags && tag[0]}</i></strong>
                       </button>    
                      )} else { return null }
                   })}
          </div>
          <div className="songDetailsRight">
              <span>({composerSplit(selector.selected.composer)})</span>
          </div>
        </div>
        ) ||
        selector.isOptions && (
        <div 
          className="optionsContainer" 
          key={selector.boxId} 
          id={selector.boxId.toString()}>
          {selector.options.length > 0 ? selector.options.map((option: { id: React.Key | number | number; title: any; year: any; artist_a: any; artist_b: any; }) => 
          (
           <button 
             className="buttonOption"
             key={option.id} 
             id={option.id.toString()}
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
          id={selector.boxId.toString()}
          style={selector.isBold ? { opacity: 1} : {opacity: 0.3}}>
            <div className="artists">
            <button onClick={(event) => props.handleTableLink(event, selector.artistA)}><strong>{selector.artistA}</strong></button>
            <br />
            <button onClick={(event) => props.handleTableLink(event, selector.artistB)}><strong>{selector.artistB}</strong></button>
          </div>
          <div className="containerButtons">
            <button 
              onClick={(event) => props.handleRevertToOptions(event, selector.boxId)}><strong>↖</strong>
            </button>
            <br />
            <button 
              onClick={(event) => props.handleSongDetails(event, selector.boxId)}><strong>...</strong>
            </button>
          </div>
          <div className="song">
              <button 
                className="song"
                onClick={(event) => props.handleSongCard(event, selector.selected.id)}>{selector.selected.title}</button>
              <br />
              <button 
                style={{color: "#27B33A"}}
                onClick={(event) => props.handleTableLink(event, selector.selected.year)}><i>{selector.selected.year}</i></button>
          </div>
        </div> 
       )
       || 
        selector.seeDetails && (
        <div 
          className="selectedContainer"
          key={selector.boxId} 
          id={selector.boxId.toString()}
          style={selector.isBold ? { opacity: 1} : {opacity: 0.3}}>
          <div className="artists">
            <button onClick={(event) => props.handleTableLink(event, selector.artistA)}><strong>{selector.artistA}</strong></button>
            <br />
            <button onClick={(event) => props.handleTableLink(event, selector.artistB)}><strong>{selector.artistB}</strong></button>
          </div>
          <div className="containerButtons">
            <button 
              onClick={(event) => props.handleRevertToOptions(event, selector.boxId)}><strong>↖</strong>
            </button>
            <br />
            <button 
              onClick={(event) => props.handleRevertToSelected(event, selector.boxId)}><strong>...</strong>
            </button>
          </div>
          <div className="song">
              <button 
                className="song"
                onClick={(event) => props.handleSongCard(event, selector.selected.id)}>{selector.selected.title}</button>
              <br />
              <button 
                style={{color: "#27B33A"}}
                onClick={(event) => props.handleTableLink(event, selector.selected.year)}><i>{selector.selected.year}</i></button>
          </div> 
          <div>
          {Object.entries(props.songCard[0]).slice(12, 18).map(tag  => {
                     if (tag[1] !== "" && tag[0] !== "Cause") {
                     return (
                       <button 
                         className="songTags" 
                         id={tag[0]} 
                         key={tag[0]}
                         onClick={(event) => props.handleTag(event, tag)}>
                       <strong><i>{props.seeSongTags && tag[1]}</i></strong>
                       </button>
                     )} else if (tag[1] !== "" && tag[0] === "Cause") {
                     return (
                       <button 
                         className="songTags" 
                         id={tag[0]} 
                         key={tag[0]}
                         onClick={(event) => props.handleTag(event, tag)}>
                         <strong><i>{props.seeSongTags && tag[0]}</i></strong>
                       </button>    
                      )} else { return null }
                   })}
          </div>
          <div className="songDetailsRight">
              <span>({composerSplit(selector.selected.composer)})</span>
          </div>
        </div>
       )
      );   

    return (
        <>
        {selectors}
        </>
        
    );
}