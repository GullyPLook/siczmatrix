'use client'
import { use } from "react"

export default function Selector(props: any) {

  function optionResolve(d: {boxId: number; isSelected: boolean; isBold: boolean; artistA: any; artistB: any; selected: any; isOptions: boolean; options: [Promise<{}>, Promise<{}>] }) {
  
  const resolvedA: any = use(d.options[0]); 
  const resolvedB: any = use(d.options[1]);
  const resolvedOptions: any = resolvedA.concat(resolvedB).filter((op: { id: number; artist_a_id: number; artist_b_id: number; }) => {
   return (op.id !== props.selections[d.boxId-2].selected.id 
   && op.artist_a_id !== props.selections[d.boxId-2].artistA.id 
   && op.artist_b_id !== props.selections[d.boxId-2].artistA.id)
  });

  resolvedOptions.sort((a: any, b: any) => {
  if (a.year < b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
  }
  return 0;})

  const list: any = resolvedOptions.length > 0 ? resolvedOptions.map((option: { id: number; title: string; year: string; artist_a: string; artist_b: string;})  => 
          (
           <button 
             className="buttonOption"
             key={option.id} 
             id={option.id.toString()}
             onClick={(event) => props.handleOptionChange(event, option, d.boxId)}>
             <span className="song"><i>{`${option.title}`}</i></span><i>{` (${option.year})`}</i>
             <br />
             <i>{`${option.artist_a} & ${option.artist_b}`}</i>
           </button>
         )) : <div className="noMatches">
            <i>...No matches found</i>
            </div> 
            
    return list
  };

    const selectors = props.selections.map((selector: { boxId: number; isSelected: boolean; isBold: boolean; artistA: any; artistB: any; selected: any; isOptions: boolean; options: [Promise<{}>, Promise<{}>] }) => 
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
            <div>
              <button className="artists" onClick={(event) => props.handleArtist(event, selector.artistA.id)}><strong>{selector.artistA.artist}</strong></button>
              <br />
              <button className="artists" onClick={(event) => props.handleArtist(event, selector.artistB.id)}><strong>{selector.artistB.artist}</strong></button>
            </div>
            <div className="song">
              <button 
                className="song"
                onClick={(event) => props.handleSongChange(event, selector.selected.id, selector.selected.song_id, selector.selected.title, selector.selected.year, selector.selected.artist_a, selector.selected.artist_a_id, selector.selected.artist_b, selector.selected.artist_b_id)}>{selector.selected.title}</button>
              <br />
              <button 
                style={{color: "#27B33A"}}
                onClick={(event) => props.handleYear(event, selector.selected.year)}><i>{selector.selected.year}</i></button>
          </div> 
        </div>
        ) 
        ||
        selector.isOptions && (
        <div 
          className="optionsContainer" 
          key={selector.boxId} 
          id={selector.boxId.toString()}>
            {optionResolve(selector)}
         </div>
       ) 
         || 
       selector.isSelected && (
        <div 
          className="selectedContainer"
          key={selector.boxId} 
          id={selector.boxId.toString()}
          style={selector.isBold ? { opacity: 1} : {opacity: 0.3}}>
            <div>
            <button className="artists" onClick={(event) => props.handleArtist(event, selector.artistA.id)}><strong>{selector.artistA.artist}</strong></button>
            <br />
            <button className="artists" onClick={(event) => props.handleArtist(event, selector.artistB.id)}><strong>{selector.artistB.artist}</strong></button>
          </div>
          <div className="containerButtons">
            <button className="containerButtons"
              onClick={(event) => props.handleRevertToOptions(event, selector.boxId)}><strong>↖</strong>
            </button>
            <br />
          </div>
          <div className="song">
              <button 
                className="song"
                onClick={(event) => props.handleSongChange(event, selector.selected.id, selector.selected.song_id, selector.selected.title, selector.selected.year, selector.selected.artist_a, selector.selected.artist_a_id, selector.selected.artist_b, selector.selected.artist_b_id)}>{selector.selected.title}</button>
              <br />
              <button 
                style={{color: "#27B33A"}}
                onClick={(event) => props.handleYear(event, selector.selected.year)}><i>{selector.selected.year}</i></button>
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