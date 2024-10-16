'use client'
import React, { useEffect, useState } from "react";
import selectorObjects from "./selectorObjects.json";
import Fuse from "fuse.js";
import records from './records.json';
import Search from "./search";
import Selector from "./selector";
import Information from "./information";
import data from "./data.json";
import Table from "./table";
import SongCard from "./songCard";
import Podcast from "./podcast";
import { DisplayGraph } from "./SigStarChart2";


export default function Home() {

  const [starChartData, setStarChartData] = useState<{}>({nodes:[], edges:[]});
  const [query, setQuery] = useState("");
  const [selections, setSelections] = useState(selectorObjects);
  const [tableData, setTableData] = useState<{}>({title: "", list: [], column: ""});
  const [swap, setSwap] = useState<boolean>();
  const [artistAOptions, setArtistAOptions] = useState<any>();
  const [artistBOptions, setArtistBOptions] = useState<any>();
  const [seeSearch, setSeeSearch] = useState(true);
  const [seeIntroduction, setSeeIntroduction] = useState(true);
  const [seeCongratulations, setSeeCongratulations] = useState(false);
  const [seeNiceTry, setSeeNiceTry] = useState(false);
  const [seeSongCard, setSeeSongCard] = useState(false);
  const [songCard, setSongCard] = useState<{}>();
  const [mediaSelect, setMediaSelect] = useState<string>();
  const [seeTable, setSeeTable] = useState(false);
  const [seePodcast, setSeePodcast] = useState(true);
  const [seeSongTags, setSeeSongTags] = useState(false);

  const fuse = new Fuse( records, {
    keys: [
      "title",
      "artist_a",
      "artist_b"
    ]
  });
  
  const results = fuse.search(query);
  const searchResults = results.map(result => result.item);

  const handleOnSearch = (event: any) => {
    const {value} = event.target;
    setQuery(value);
    setSeeSearch(true);
  };
  
  function selectionGenerator(id: number) {
      const selection: any = records.find(record => record.id === id);
      return selection
  };

  function optionGeneratorArtistA(id: number) {
      const selection: any = selectionGenerator(id);
      const artistAMatches = records.filter(record => record.artist_a === selection.artist_a || record.artist_b ===  selection.artist_a);
      const artistAMatchesMinusSelection = artistAMatches.filter(match => match.id !== id);
      const preSelected = selections.map(select => select.selected);
      const preDuo = records.filter(record => record.artist_a  === selection.artist_a && record.artist_b === selection.artist_b || record.artist_a  === selection.artist_b && record.artist_b === selection.artist_a);
      const avoid = preSelected.concat(preDuo);
      const finalMatches = artistAMatchesMinusSelection.filter(match => {
          return !avoid.includes(match);
         });
      return finalMatches
  };

  function optionGeneratorArtistB(id: number) {
    const selection: any = selectionGenerator(id);
    const artistBMatches = records.filter(record => record.artist_a === selection.artist_b || record.artist_b ===  selection.artist_b);
    const artistBMatchesMinusSelection = artistBMatches.filter(match => match.id !== id);
    const preSelected = selections.map(select => select.selected);
    const preDuo = records.filter(record => record.artist_a  === selection.artist_a && record.artist_b === selection.artist_b || record.artist_a  === selection.artist_b && record.artist_b === selection.artist_a);
    const avoid = preSelected.concat(preDuo);
    const finalMatches = artistBMatchesMinusSelection.filter(match => {
        return !avoid.includes(match);
       });
    return finalMatches
  };

  function optionGenerator(id: number, boxId: number) {
     
     const artist = whichArtistOptions(id, boxId);
     const artistBMatches = records.filter(record => record.artist_a === artist || record.artist_b === artist);
     const artistBMatchesMinusSelection = artistBMatches.filter(match => match.id !== id);
     const preSelected = selections.map(select => select.selected);
     const selection = selectionGenerator(id);
     const preDuo = records.filter(record => record.artist_a  === selection.artist_a && record.artist_b === selection.artist_b || record.artist_a  === selection.artist_b && record.artist_b === selection.artist_a);
      const avoid = preSelected.concat(preDuo);
      const finalMatches = artistBMatchesMinusSelection.filter(match => {
          return !avoid.includes(match);
         });
      return finalMatches    
  };
  
  function whichArtistOptions(id: number, boxId: number) {
      const selection: any = selectionGenerator(id); 
      let artist = "";
      if (boxId === 2) 
        if (selection.artist_a === selections[0].artistB) {
          return artist = selection.artist_b;
        } else {
        return artist = selection.artist_a;
      } else if (selection.artist_a === selections[boxId - 2].artistB) {
        return artist = selection.artist_b;
      } else {
      return artist = selection.artist_a;
      }
  };
  
  function whichArtistA(id: number, boxId: number) {
    const selection: any = selectionGenerator(id);
      if (selections[boxId - 2].artistB === selection.artist_a) {
          return selection.artist_a;
        } else {
          return selection.artist_b;
  }};

  function whichArtistB(id: number, boxId: number) {
    const selection: any = selectionGenerator(id);
      if (selections[boxId - 2].artistB === selection.artist_a) {
          return selection.artist_b;
        } else {
          return selection.artist_a;
  }};
  
  function chartDataGenerator() {
  
    const optionLists = selections.map(selection => {
    return selection.options;
  });
  const allOptions: any = optionLists[1].concat(optionLists[2], optionLists[3], optionLists[4], optionLists[5], optionLists[6], optionLists[7], optionLists[8], optionLists[9], optionLists[10], optionLists[11], optionLists[12], optionLists[13]);
  const artistAList = allOptions.map((option: { artist_a: any; }) => {
    return option.artist_a
  });
  const artistBList = allOptions.map((option: { artist_b: any; }) => {
    return option.artist_b
  });
  const allArtists = [selections[0].artistA].concat([selections[0].artistB], artistAList, artistBList);
  const uniqueArtists = Array.from(new Set(allArtists));  
 
  const nodes = data.nodes.filter(node => {
    return uniqueArtists.includes(node.label);
  });

    // set edges
    const nodeIds = nodes.map(node => {
      return node.id;
    });
    
    const linkList = data.edges.filter(edge => {
      return nodeIds.includes(edge.source) || nodeIds.includes(edge.target);
    });
     
    const unwantedLinks = linkList.filter(link => {
      return !nodeIds.includes(link.source) || !nodeIds.includes(link.target);
     });
  
    const edges = linkList.filter(link => {
      return !unwantedLinks.includes(link);
    });
  
    return {nodes, edges}
  };
  
  function handleOptionChange(event: any, id: number, boxId: number) {

    const selection: any = selectionGenerator(id); 
    const artistA: string = selection.artist_a;
    const artistB: string = selection.artist_b;
    const matches: any = selections.filter(selector => selector.boxId != boxId-1).filter(selector => selector.artistA === artistA || selector.artistB === artistB || selector.artistA === artistB || selector.artistB === artistA);
    const artistMatch: any = matches.length > 1 ? matches[1] : matches[0]
    
    

    const newSelections: any = selections.map(selector => {
      if (artistMatch == null)
         if (selector.boxId === boxId) {
            return {...selector, isBold: true, isSelected: true, selected: selectionGenerator(id), isOptions: false, artistA: whichArtistA(id, boxId), artistB: whichArtistB(id, boxId)}
         } else if (selector.boxId === boxId + 1) {
            return {...selector, isBold: true, isSelected: false, selected: {}, isOptions: true, options: optionGenerator(id, boxId), artistA: "", artistB: ""};
         } else if (selector.boxId > boxId + 1) {
            return {...selector, isBold: true, isSelected: false, selected: {}, isOptions: false, options: [], artistA: "", artistB: ""};
         } else {
         return selector;   
           
      } else {
         if (selector.boxId === boxId) {
          return {...selector, isBold: true, isSelected: true, selected: selectionGenerator(id), isOptions: false, artistA: whichArtistA(id, boxId), artistB: whichArtistB(id, boxId)};
         } else if (selector.boxId > boxId || selector.boxId < artistMatch.boxId) {
          return {...selector, isBold: false, options: [], artistA: "", artistB: ""};
        } else {
        return {...selector, isBold: true};
        }    
  }});
    setSelections(newSelections);
    

    if (artistMatch != null) {
      if (boxId > artistMatch.boxId + 5) {
        return setSeeNiceTry(true);
      } else if (boxId < artistMatch.boxId + 6) {
        return setSeeCongratulations(true);
      }
    };
  };

  function handleRevertToOptions(event: any, boxId: number) {
  
   const newSelections = selections.map(selector => {
      
    if (selector.boxId === boxId && selector.boxId !== 1) {
      return {...selector, isBold: true, isSelected: false, selected: {}, isOptions: true, artistA: "", artistB: "", seeDetails: false};
    } else if (selector.boxId > boxId && selector.boxId !==2) {
      return {...selector, isBold: true, isSelected: false, selected: {}, isOptions: false, options: [], artistA: "", artistB: "", seeDetails: false};
    }
    return {...selector, isBold: true};
   }   
   );
  setSelections(newSelections);
  setSeeCongratulations(false);
  setSeeNiceTry(false);
  };

  function handleSongDetails(event: any, boxId: number) {

    const newSelections: any = selections.map(selector => {
      if (selector.boxId === boxId) {
        return {...selector, isSelected: false, isOptions: false, seeDetails: true}
      }
      return selector;
    });
    setSelections(newSelections);
    setSeeSongTags(true);
  };

  function handleTag(event: any, tag: any) {
    
    const column: string = tag[0]
    let tagList = [];
    let tagTitle = "";
    tag[0] === "Cause" ? 
      (tagList = records.filter(record => record.Cause !== ""), tagTitle = tag[0])
    : (tagList = records.filter(record => record[column as keyof typeof record] === tag[1]), tagTitle = tag[1]);
    
    setTableData({title: tagTitle, list: tagList, column: column});
    setSeeTable(true);
    console.log(tableData)
  };
  
  function handleTableLink(event: any, name: any) {
    
    const tagList = records.filter(record => 
      record.artist_a === name 
      || record.artist_b ===  name 
      || record.year ===  name
      || record.Cause ===  name
      || record.programme_title ===  name
      || record.programme_title ===  name
    );
    
    setTableData({title: name, list: tagList});
    setSeeTable(true);
  };

  function handleComposers(event: any, composers: string) {
    
    const tagList = records.filter(record => 
      record.composer.includes(composers) 
    );
    
    setTableData({title: "Written by " + composers, list: tagList, column: "composer"});
    setSeeTable(true);
  }

  function handleSongCard(event: any, id: number) {
    
    const newSongCard = records.filter(record => record.id === id);

    const otherVersions = records.filter(record => record.title === newSongCard[0].title)
    otherVersions.length > 1 ? (setTableData({title: newSongCard[0].title, list: otherVersions}), setSeeTable(true))
    : null;
    
    const newMediaSelect = (
    newSongCard[0].Performance ? 
    newSongCard[0].Performance.replace(/(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?)?(?:.+)v=(.+)/g, 'https://www.youtube.com/embed/$1').slice(8)
    : newSongCard[0].Promo ? 
      newSongCard[0].Promo.replace(/(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?)?(?:.+)v=(.+)/g, 'https://www.youtube.com/embed/$1').slice(8)
      : newSongCard[0].Audio.replace(/(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?)?(?:.+)v=(.+)/g, 'https://www.youtube.com/embed/$1').slice(8)
    );

    setSongCard(newSongCard);
    setSeePodcast(false);
    setSeeSongCard(true);
    setSeeSongTags(true);
    setMediaSelect(newMediaSelect)
  };

  function handleMediaSelect(event: any, link: string) {
    
    const newMediaSelect = link.replace(/(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?)?(?:.+)v=(.+)/g, 'https://www.youtube.com/embed/$1').slice(8)
    setMediaSelect(newMediaSelect)
  };
  
  function handleRevertToSelected(event: any, boxId: number) {

    const newSelections: any = selections.map(selector => {
      if (selector.boxId === boxId) {
        return {...selector, isSelected: true, isOptions: false, seeDetails: false}
      }
      return selector;
    });
    setSelections(newSelections);

  };

  function handleSearchChange(event: any, id: number) {
  
    const newSelections: any = selections.map((selector, i) => {
      if (i === 0) {
        return {...selector, isBold: true, isSelected: true, selected: selectionGenerator(id), artistA: selectionGenerator(id).artist_a, artistB: selectionGenerator(id).artist_b};
      } else if (i === 1) {
        return {...selector, isBold: true, isSelected: false, selected: {}, isOptions: true, options: optionGeneratorArtistB(id), artistA: "", artistB: ""};
      }
      return {...selector, isBold: true, isOptions: false, isSelected: false, options: [], selected: {}, artistA: "", artistB: ""} 
    });
    setSelections(newSelections);

    setArtistAOptions(optionGeneratorArtistA(id));
    setArtistBOptions(optionGeneratorArtistB(id));
    setQuery("")
    setSeeCongratulations(false);
    setSeeNiceTry(false);
    setSeeIntroduction(false);
    setSeeSearch(false);
     
  };
  
  function handleSwapArtist(event: any, boxId: number) {
      
    const newSelections = selections.map(selector => {
      if (boxId === 1) {
        return {...selector, isBold: true, artistA: selections[0].artistB, artistB: selections[0].artistA};
      } else if (boxId === 2) {
        return {...selector, isBold: true, isSelected: false, selected: {}, isOptions: true, artistA: "", artistB: "", seeDetails: false};
      } 
      return {...selector, isBold: true, isSelected: false, selected: {}, isOptions: false, options: [], artistA: "", artistB: "", seeDetails: false};
    });
    setSelections(newSelections)
    setSwap(prevSwap => {
      if (prevSwap === true) {
        return false;
      } 
      return true;
    });
    setStarChartData(chartDataGenerator())
  };

  
  useEffect(() => {
    
    swap === true && setSelections(prevSelections => {
      return prevSelections.map(selection => {
        if (selection.boxId === 2) {
          return {...selection, isSelected: false, selected: {}, isOptions: true, options: artistAOptions, artistA: "", artistB: "", seeDetails: false};
        } else if (selection.boxId > 2) {
          return {...selection, isSelected: false, selected: {}, isOptions: false, options: [], artistA: "", artistB: "", seeDetails: false};
        } else {
        return selection  
        }
      }
      )}
      );
      
    swap === false && setSelections(prevSelections => {
        return prevSelections.map(selection => {
          if (selection.boxId === 2) {
            return {...selection, isSelected: false, selected: {}, isOptions: true, options: artistBOptions, artistA: "", artistB: "", seeDetails: false};
          } else if (selection.boxId > 2) {
            return {...selection, isSelected: false, selected: {}, isOptions: false, options: [], artistA: "", artistB: "", seeDetails: false};
          } else {
          return selection  
          }
        }
        )}
        );
    setSeeCongratulations(false);
    setSeeNiceTry(false);
  }, [swap, artistAOptions, artistBOptions]);

  
  useEffect(() => {
   
    seeNiceTry && setSelections(prevSelections => {
      return prevSelections.map(selection => {
        return {...selection, isOptions: false};
        }
      )}
      );

  }, [seeNiceTry]);


  useEffect(() => {

    seeCongratulations && setSelections(prevSelections => {
      return prevSelections.map(selection => {
        return {...selection, isOptions: false};
        }
      )}
      );

  }, [seeCongratulations]);

  useEffect(() => {
    setStarChartData(chartDataGenerator());
  }, [selections]);

  return (
  
  <div className="app">
    <div className="sidebar">
      <div className="search">
        <form id="search" >
          <label>
            <strong>Search artist or song</strong>
            <input className="searchField" type="text" value={query} onChange={handleOnSearch}></input>
          </label>
          <br />
        </form>
      </div>
      {seeSearch && <div className="searchResults">
        <Search 
        searchResults={searchResults}
        handleSearchChange={handleSearchChange}
        />
      </div>}
      <div className="select">
        <Selector 
        selections={selections}
        handleSwapArtist={handleSwapArtist}
        handleOptionChange={handleOptionChange}
        handleRevertToOptions={handleRevertToOptions}
        handleSongDetails={handleSongDetails}
        handleRevertToSelected={handleRevertToSelected}
        handleTag={handleTag}
        handleTableLink={handleTableLink}
        handleComposers={handleComposers}
        handleSongCard={handleSongCard}
        seeSongTags={seeSongTags}
        
        />
      </div>
      <div>
        <Information
        seeIntroduction={seeIntroduction}
        seeCongratulations={seeCongratulations}
        seeNiceTry={seeNiceTry}
        />
      </div>
    </div>
      
    <div className="main">
      {seePodcast && 
      <div>
        <Podcast />
      </div>}
      {/* {!seeIntroduction && <div className="sigmaContainer">
        <DisplayGraph starChartData={starChartData}/>
      </div>} */}
      {seeSongCard && 
      <div>
        <SongCard 
        selections={selections}
        songCard={songCard}
        mediaSelect={mediaSelect}
        handleMediaSelect={handleMediaSelect}
        handleTag={handleTag}
        seeSongTags={seeSongTags}
        handleTableLink={handleTableLink}
        handleComposers={handleComposers}
        />
      </div>}
      {seeTable && 
      <div>
        <Table 
        tableData={tableData}
        handleSongCard={handleSongCard}
        handleTableLink={handleTableLink}
        />
      </div>}
    </div>
  </div>
  )
}

  
    
      