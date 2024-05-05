'use client'
import React, { useEffect, useState } from "react";
import dropObjects from "./dropObjects.json";
import nodesData from './nodes.json';
import linksData from './links.json';
import records from './records.json';
import Dropdown from './dropdown';
import playlistObjects from "./playlistObjects.json";
import Playlist from "./playlist";
import Information from "./information";
import StarMap from "./starMap"

export default function Home() {


  const [nodes, setNodes] = useState([])
  const [links, setLinks] = useState([])
  const [dropState, setDropState] = useState(dropObjects)
  const [playlistState, setPlaylistState] = useState(playlistObjects)
  const [seeIntroduction, setSeeIntroduction] = useState(true)
  const [seeCongratulations, setSeeCongratulations] = useState(false)
  const [seeNiceTry, setSeeNiceTry] = useState(false)

  // set first dropdown
  useEffect(() => {
    const newDropState = dropState.map((drop, i) => {
      if (i === 0) {
        return {...drop, isShown: true, options: nodesData};
      }
      return drop 
    });
    setDropState(newDropState);
  },[])

  function optionGenerator(artist: any) {
      
      const artistLinks = linksData.filter(link => link.source === artist[0].id || link.target === artist[0].id);
      const sourceIds = artistLinks.filter(link => link.source !== artist[0].id).map(link => link.source);
      const targetIds = artistLinks.filter(link => link.target !== artist[0].id).map(link => link.target);
      const neighbourIds = sourceIds.concat(targetIds);
      const neighbourNodes = neighbourIds.map(id => ({ id, ...nodesData.find(node => node.id == id)}));
      return neighbourNodes
  } 
  
  
  function handleChange(event: any, id: number) {
  
    // get artist name
    const artist: string = event[0].label;
    
    // check for artist match
    const artistMatch: any = dropState.filter(drop => drop.id != id+1).find(drop => drop.selected === artist);
    
    // set congratulations/nice try message on match
    setSeeCongratulations(() => {
      if (artistMatch != null) {
          if (id < (artistMatch.id +6)) {
            return true;
          }
          return false;
      } 
      return false;
    });
    
    setSeeNiceTry(() => {
      if (artistMatch != null) {
          if (id >= (artistMatch.id + 6)) {
            return true;
          }
          return false;
      } 
      return false;
    });

    // next dropdown options
    const select = dropState.filter(drop => drop.id === id);
    const generated = optionGenerator(event);
    const finalOptions = generated.filter(ops => ops.label !== select[0].selected);
    
    // set dropdowns state
    setDropState(prevDropState => {
      return prevDropState.map(drop => {
        if (artistMatch == null) {
          if (drop.id === id) {
            return {...drop, isBold: true};
          } else if (drop.id > id+1) {
              return {...drop, isShown: false, selected: null, options: null};
          } else if (drop.id === id+1) {
              return {...drop, isShown: true, isBold: true, selected: artist, options: finalOptions};
              }
              return {...drop, isBold: true};
        } else {
          if (drop.id > id || drop.id < artistMatch.id) {
            return {...drop, isBold: false};
          }
          return {...drop, isBold: true};
        } 
      })
    });

    // playlist entry
    const artistALabel = select[0].selected;
    const artistBLabel = event[0].label;
    const entryFilter = records.filter(record => record.artist_a === artistALabel && record.artist_b === artistBLabel || record.artist_a === artistBLabel && record.artist_b === artistALabel);
    const recordEntry = entryFilter.slice(0, 1);
    
     // entry count
    const entryCount = entryFilter.length;
    function count(e: number) {
      let result;
      if (e > 1) {
        result = (' ...+'+(e-1)+' more');
      } else {
        result = null;
      }
      return result;
    };

    // set playlist 
    setPlaylistState(prevPlaylistState => {
      return prevPlaylistState.map(entry => {
        if (artistMatch == null) {
          if (entry.id > id) {
              return {...entry, isShown: false};
              }  else if (entry.id === id) {
              return {...entry, isShown: true, isBold: true, entry: recordEntry, count: count(entryCount)};
              }
              return {...entry, isBold: true};
        } else {
          if (entry.id < artistMatch.id) {
              return {...entry, isBold: false};
          } else if (entry.id === id) {
            return {...entry, isShown: true, isBold: true, entry: recordEntry, count: count(entryCount)};
          }
          return {...entry, isBold: true};
        }    
      })
    });
    
    // clear introduction
    id === 2 ? setSeeIntroduction(false) : null;
    
    // set first node
    id === 1 ? setNodes([event[0]]) : null;
  };

  useEffect(() => {
    // set nodes
    const optionLists = dropState.map(drop => {
      return drop.options;
    });
    const nodeList = optionLists[1].concat(optionLists[2], optionLists[3], optionLists[4], optionLists[5], optionLists[6], optionLists[7], optionLists[8], optionLists[9], optionLists[10], optionLists[11], optionLists[12], optionLists[13]);
    const uniqueNodes = [...new Set(nodeList)];
    const firstNode = [nodes[0]];
    
    const primaryNodes = firstNode.concat(uniqueNodes).slice(0, -1);
    setNodes(primaryNodes);

    // set links 
    
    const nodeIds = primaryNodes.map(node => {
      return node.id;
    });
    
    // PROBLEM: linkList doesn't include node ids of the selected values in the filter after the second dropdown is selected
    // even though these node ids are present in the 'nodeIds' variable above.
    // I suspect updating of DropState is causing the problem
    const linkList = linksData.filter(link => {
      return nodeIds.includes(link.source || link.target);
    });
     
    // my aim is to ONLY set the links that coincide with the nodes selected AND the nodes within the options of the dropdowns.
    // but my method used below is only returning the links of the last selected node. 
    const unwantedLinks = linkList.filter(link => {
      return !nodeIds.includes(link.target);
     });
  
    const finalLinks = linkList.filter(link => {
      return !unwantedLinks.includes(link);
    });
    
    setLinks(finalLinks);

  }, [dropState])
 
  // PROBLEM: i want to restore the dropdowns colour(isBold) after a loop is found and the user starts again. 
  // but this method is changing dropState, therefore triggering the set nodes useEffect and rerendering the map everytime a dropdown is opened. 
  function handleOpen(id: number) {
    setDropState(prevDropState => {
      return prevDropState.map(drop => {
        if (drop.id === id) {
        return {...drop, isBold: true}
        }
        return drop;
      })
  })};
    
  return (
  <div className="app">
    <div className="dropdowns">
      <Dropdown 
      dropState={dropState}
      handleChange={handleChange}
      handleOpen={handleOpen}
      />
    </div>
    <ul className="list">
      <Information
      seeIntroduction={seeIntroduction}
      seeCongratulations={seeCongratulations}
      seeNiceTry={seeNiceTry}/>
      <Playlist 
      recordState={playlistState}/>
    </ul>
    <div className="starMap">
      {!seeIntroduction && <StarMap
      nodes={nodes}
      links={links} />}
    </div>
  </div>
  )
}

  
    
      