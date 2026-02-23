'use client'
import { useEffect, useState, useRef } from "react";
import versionObject from "./versionObject.json";
import selectorObjects from "./selectorObjects.json";
import Logo from './logo'
import Welcome from "./welcome";
import Search from "./search";
import Selector from "./selector";
import Information from "./information";
import SongCard from "./songCard";
import Podcast from "./podcast";
import episodes from "./episodes.json";
import { latest, versions, composers, adaptations, personalTags, releaseTags, releaseFourColTags, releaseFourColTagsYear, threeColTags, fourColTags, perfThreeColTags, perfFourColTags, songCredits, styleTags, specialTags, performances, performanceTags, composerCredits, artistCreditsA, artistCreditsB, getArtist, yearCredits } from "./actions";
import ArtistTable from "./artistTable";
import ComposerTable from "./composerTable";
import YearTable from "./yearTable";
import SongTable from "./songTable";
import ThreeColumnTable from "./threeColumnTable";
import FourColumnTable from "./fourColumnTable";
import PerfThreeColumnTable from "./perfThreeTable";
import PerfFourColumnTable from "./perfFourTable";
import ReleaseFourColumnTable from "./releaseFourColumnTable";
import NetworkGraph from "./network"
import Latest from "./latest";

export default function Home() {

  const [selections, setSelections] = useState<any>(selectorObjects);
  const [swap, setSwap] = useState<boolean>();
  const [seePodcastDetails, setSeePodcastDetails] = useState(false)
  const [seeIntroduction, setSeeIntroduction] = useState(true);
  const [seeInstructions, setSeeInstructions] = useState(false);
  const [seeCongratulations, setSeeCongratulations] = useState(false);
  const [seeNiceTry, setSeeNiceTry] = useState(false);
  const [latestSwitch, setLatestSwitch] = useState(0);
  const [latestSelect, setLatestSelect] = useState<string>();
  const [seeSongCard, setSeeSongCard] = useState(false);
  const [mediaSelect, setMediaSelect] = useState<string>();
  const [episode, setEpisode] = useState<{}>();
  const [seePodcast, setSeePodcast] = useState(true);
  const [seeApp, setSeeApp] = useState(false);
  const [seeLogo, setSeeLogo] = useState(true);
  const [seeSearch, setSeeSearch] = useState(true);
  const [query, setQuery] = useState("");
  const [version, setVersion] = useState<any>([versionObject]);
  const [latestPromise, setLatestPromise] = useState<any>([]);
  const [versionPromise, setVersionPromise] = useState<any>([]);
  const [composerPromise, setComposerPromise] = useState<any>([]);
  const [personalTagPromise, setPersonalTagPromise] = useState<any>([]);
  const [releaseTagPromise, setReleaseTagPromise] = useState<any>([]);
  const [styleTagPromise, setStyleTagPromise] = useState<any>([]);
  const [specialTagPromise, setSpecialTagPromise] = useState<any>([]);
  const [performanceTagPromise, setPerformanceTagPromise] = useState<any>([]);
  const [performancePromise, setPerformancePromise] = useState<any>([]);
  const [mediaSwitch, setMediaSwitch] = useState(0);
  const [seeSelector, setSeeSelector] = useState(false);
  const [seeArtistTable, setSeeArtistTable] = useState(false);
  const [artistCreditPromiseA, setArtistCreditPromiseA] = useState<any>([]);
  const [artistCreditPromiseB, setArtistCreditPromiseB] = useState<any>([]); 
  const [tableArtistPromise, setTableArtistPromise] = useState<any>([]);
  const [seeComposerTable, setSeeComposerTable] = useState(false);
  const [composerCreditPromise, setComposerCreditPromise] = useState<any>([]);
  const [adaptationPromise, setAdaptationPromise] = useState<any>([]);
  const [seeYearTable, setSeeYearTable] = useState(false);
  const [yearCreditPromise, setYearCreditPromise] = useState<any>([]);
  const [seeSongTable, setSeeSongTable] = useState(false);
  const [songCreditPromise, setSongCreditPromise] = useState<any>([]);
  const [seeThreeColTable, setSeeThreeColTable] = useState(false);
  const [threeColTagPromise, setThreeColTagPromise] = useState<any>([]);
  const [seeFourColTable, setSeeFourColTable] = useState(false);
  const [fourColTagPromise, setFourColTagPromise] = useState<any>([]);
  const [seePerfThreeColTable, setSeePerfThreeColTable] = useState(false);
  const [perfThreeColTagPromise, setPerfThreeColTagPromise] = useState<any>([]);
  const [seePerfFourColTable, setSeePerfFourColTable] = useState(false);
  const [perfFourColTagPromise, setPerfFourColTagPromise] = useState<any>([]);
  const [seeReleaseFourColTable, setSeeReleaseFourColTable] = useState(false);
  const [releaseFourColTagPromise, setReleaseFourColTagPromise] = useState<any>([]);
  const [releaseYearFourTagPromise, setReleaseYearFourTagPromise] = useState<any>([]);
  const [seeNetwork, setSeeNetwork] = useState(false);

  const tableRef = useRef<HTMLDivElement>(null);
  const songCardRef = useRef<HTMLDivElement>(null);
  
  const handleOnSearch = (event: any) => {
    const {value} = event.target;
    setQuery(value);
    setSeeSearch(true);
  };

  function optionGenerator(id: number) {

    const creditPromiseA = (artistCreditsA(id));
    const creditPromiseB = (artistCreditsB(id));
    
    return [creditPromiseA, creditPromiseB]
  };
  
  function whichArtistA(boxId: number, option: any) {
    
      if (selections[boxId - 2].artistB.id === option.artist_a_id) {
          return { "id": option.artist_a_id, "artist": option.artist_a, "matches": optionGenerator(option.artist_a_id) }
        } else {
          return { "id": option.artist_b_id, "artist": option.artist_b, "matches": optionGenerator(option.artist_b_id) };
  }};

  function whichArtistB(boxId: number, option: any) {
    
      if (selections[boxId - 2].artistB.id === option.artist_a_id) {
          return { "id": option.artist_b_id, "artist": option.artist_b, "matches": optionGenerator(option.artist_b_id) }
        } else {
          return { "id": option.artist_a_id, "artist": option.artist_a, "matches": optionGenerator(option.artist_a_id) };
  }};

  function handleOptionChange(event: any, option: any, boxId: number) {

    const matches: any = selections.filter((selector: { boxId: number; }) => selector.boxId !== boxId -1).filter((selector: { artistA: { id: any; }; artistB: { id: any; }; }) => selector.artistA.id === option.artist_a_id || selector.artistB.id === option.artist_b_id || selector.artistA.id === option.artist_b_id || selector.artistB.id === option.artist_a_id);
    const artistMatch: any = matches.length > 1 ? matches[1] : matches[0]
    
    const newSelections: any = selections.map((selector: { boxId: number; }) => {
      if (artistMatch == null)
         if (selector.boxId === boxId) {
            return {...selector, isBold: true, isSelected: true, selected: option, isOptions: false, artistA: whichArtistA(boxId, option), artistB: whichArtistB(boxId, option)}
         } else if (selector.boxId === boxId + 1) {
            return {...selector, isBold: true, isSelected: false, selected: {}, isOptions: true, options: optionGenerator(whichArtistB(boxId, option).id), artistA: {}, artistB: {}};
         } else if (selector.boxId > boxId + 1) {
            return {...selector, isBold: true, isSelected: false, selected: {}, isOptions: false, options: {}, artistA: {}, artistB: {}};
         } else {
         return selector;   
           
      } else {
         if (selector.boxId === boxId) {
          return {...selector, isBold: true, isSelected: true, selected: option, isOptions: false, artistA: whichArtistA(boxId, option), artistB: whichArtistB(boxId, option)};
         } else if (selector.boxId > boxId || selector.boxId < artistMatch.boxId) {
          return {...selector, isBold: false, options: {}};
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
  
   const newSelections = selections.map((selector: { boxId: number; }) => {
      
    if (selector.boxId === boxId && selector.boxId !== 1) {
      return {...selector, isBold: true, isSelected: false, selected: {}, isOptions: true, options: optionGenerator(selections[boxId - 2].artistB.id), artistA: {}, artistB: {}};
    } else if (selector.boxId > boxId && selector.boxId !==2) {
      return {...selector, isBold: true, isSelected: false, selected: {}, isOptions: false, options: {}, artistA: {}, artistB: {}};
    }
    return {...selector, isBold: true};
   }   
   );
  setSelections(newSelections);
  setSeeCongratulations(false);
  setSeeNiceTry(false);
  };

  function handlePerfThreeTag(event: any, id: number) {
    
    setPerfThreeColTagPromise(perfThreeColTags(id))
  
    setSeePerfThreeColTable(true);
    setSeeThreeColTable(false);
    setSeeSongTable(false);
    setSeeArtistTable(false);
    setSeeYearTable(false);
    setSeeComposerTable(false);
    setSeePerfFourColTable(false);
    setSeeFourColTable(false);
    setSeeReleaseFourColTable(false);

    if (tableRef.current != null) {
      tableRef.current.scrollIntoView({ behavior: "smooth" });
    }; 
  };

  function handlePerfFourTag(event: any, id: number) {

    setPerfFourColTagPromise(perfFourColTags(id))
    
    setSeePerfFourColTable(true)
    setSeeThreeColTable(false);
    setSeeSongTable(false);
    setSeeArtistTable(false);
    setSeeYearTable(false);
    setSeeComposerTable(false);
    setSeePerfThreeColTable(false);
    setSeeFourColTable(false);
    setSeeReleaseFourColTable(false);

    if (tableRef.current != null) {
      tableRef.current.scrollIntoView({ behavior: "smooth" });
    }; 
  };

  function handleReleaseFourTag(event: any, id: number) {

    setReleaseFourColTagPromise(releaseFourColTags(id));
    setReleaseYearFourTagPromise(releaseFourColTagsYear(id))
    
    setSeeReleaseFourColTable(true);
    setSeePerfFourColTable(false);
    setSeeThreeColTable(false);
    setSeeSongTable(false);
    setSeeArtistTable(false);
    setSeeYearTable(false);
    setSeeComposerTable(false);
    setSeePerfThreeColTable(false);
    setSeeFourColTable(false);

    if (tableRef.current != null) {
      tableRef.current.scrollIntoView({ behavior: "smooth" });
    }; 
  }; 

  function handleFourTag(event: any, id: number) {
    
    setFourColTagPromise(fourColTags(id))

    setSeeFourColTable(true);
    setSeePerfFourColTable(false);
    setSeeThreeColTable(false);
    setSeeSongTable(false);
    setSeeArtistTable(false);
    setSeeYearTable(false);
    setSeeComposerTable(false);
    setSeePerfThreeColTable(false);
    setSeeReleaseFourColTable(false);

    if (tableRef.current != null) {
      tableRef.current.scrollIntoView({ behavior: "smooth" });
    }; 
  };

  function handleTag(event: any, id: number) {
    
    setThreeColTagPromise(threeColTags(id))
    
    setSeeThreeColTable(true);
    setSeeSongTable(false);
    setSeeArtistTable(false);
    setSeeYearTable(false);
    setSeeComposerTable(false);
    setSeePerfThreeColTable(false);
    setSeePerfFourColTable(false);
    setSeeFourColTable(false);
    setSeeReleaseFourColTable(false);

    if (tableRef.current != null) {
      tableRef.current.scrollIntoView({ behavior: "smooth" });
    }; 
  };

  function handleSong(event: any, id: number) {
    
    setSongCreditPromise(songCredits(id))

    setSeeSongTable(true);
    setSeeArtistTable(false);
    setSeeYearTable(false);
    setSeeComposerTable(false);
    setSeeThreeColTable(false);
    setSeePerfThreeColTable(false);
    setSeePerfFourColTable(false);
     setSeeFourColTable(false);
     setSeeReleaseFourColTable(false);

     if (tableRef.current != null) {
      tableRef.current.scrollIntoView({ behavior: "smooth" });
    }; 
  };

  function handleArtist(event: any, id: number) {
    
    setArtistCreditPromiseA(artistCreditsA(id));
    setArtistCreditPromiseB(artistCreditsB(id));
    setTableArtistPromise(getArtist(id));

    setSeeArtistTable(true);
    setSeeYearTable(false);
    setSeeComposerTable(false);
    setSeeSongTable(false);
    setSeeThreeColTable(false);
    setSeePerfThreeColTable(false);
    setSeePerfFourColTable(false);
     setSeeFourColTable(false);
     setSeeReleaseFourColTable(false);

    if (tableRef.current != null) {
      tableRef.current.scrollIntoView({ behavior: "smooth" });
    }; 
  };

  function handleComposers(event: any, id: number) {
    
    setComposerCreditPromise(composerCredits(id));

    setSeeComposerTable(true);
    setSeeArtistTable(false);
    setSeeYearTable(false);
    setSeeSongTable(false);
    setSeeThreeColTable(false);
    setSeePerfThreeColTable(false);
    setSeePerfFourColTable(false);
     setSeeFourColTable(false);
     setSeeReleaseFourColTable(false);

    if (tableRef.current != null) {
      tableRef.current.scrollIntoView({ behavior: "smooth" });
    }; 
  };

  function handleYear(event: any, year: any) {

    setYearCreditPromise(yearCredits(year));
    
    setSeeYearTable(true);
    setSeeArtistTable(false);
    setSeeComposerTable(false);
    setSeeSongTable(false);
    setSeeThreeColTable(false);
    setSeePerfThreeColTable(false);
    setSeePerfFourColTable(false);
     setSeeFourColTable(false);
     setSeeReleaseFourColTable(false);

    if (tableRef.current != null) {
      tableRef.current.scrollIntoView({ behavior: "smooth" });
    }; 
  };

  function handleMediaSelect(event: any, link: string, id: number) {

    setMediaSwitch(id)
  
    const ep = episodes.filter(ep => ep.id === id)
    
   /*  link.indexOf("embed") ?
      (setMediaSelect(link), setEpisode(ep[0]))
    : setMediaSelect(link.replace(/(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?)?(?:.+)v=(.+)/g, 'https://www.youtube.com/embed/$1').slice(8));
 */
    if (link.includes("videoseries")) {
      return (setMediaSelect(link), setEpisode(ep[0]))
    } else {
      return setMediaSelect(link.replace(/(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?)?(?:.+)v=(.+)/g, 'https://www.youtube.com/embed/$1').slice(8));
    };
  };

  function handleLatestSelect(event: any, link: string, id: number) {

    setLatestSwitch(id)
    setLatestSelect(link.replace(/(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?)?(?:.+)v=(.+)/g, 'https://www.youtube.com/embed/$1').slice(8));
    
  };

  function handleSongChange(event: any, id: number, song_id: number, title: any, year: any, artist_a: any, artist_a_id: number, artist_b: any, artist_b_id: number ) {
   
     setVersion({... version,  "id": id,
     "song_id": song_id,
     "title": title,
     "year": year,
     "artist_a": artist_a,
     "artist_a_id": artist_a_id,
     "artist_b": artist_b,
     "artist_b_id": artist_b_id
     });
  
     setComposerPromise(composers(id));
     setAdaptationPromise(adaptations(song_id));
     setPersonalTagPromise(personalTags(id));
     setReleaseTagPromise(releaseTags(id));
     setStyleTagPromise(styleTags(id));
     setSpecialTagPromise(specialTags(id));
     setPerformancePromise(performances(id));
     setPerformanceTagPromise(performanceTags(id));

     if (songCardRef.current != null) {
      songCardRef.current.scrollIntoView({ behavior: "smooth" });
    }; 
  };

  function handleSearchChange(event: any, id: number, song_id: number, title: any, year: any, artist_a: any, artist_a_id: number, artist_b: any, artist_b_id: number ) {
  
    setVersion({... version,  "id": id,
    "song_id": song_id,
    "title": title,
    "year": year,
    "artist_a": artist_a,
    "artist_a_id": artist_a_id,
    "artist_b": artist_b,
    "artist_b_id": artist_b_id
    });
    
    setAdaptationPromise(adaptations(song_id));
    setComposerPromise(composers(id));
    setPersonalTagPromise(personalTags(id));
    setReleaseTagPromise(releaseTags(id));
    setStyleTagPromise(styleTags(id));
    setSpecialTagPromise(specialTags(id));
    setPerformancePromise(performances(id));
    setPerformanceTagPromise(performanceTags(id));
    
    
    const newSelections: any = selections.map((selector: any, i: number) => {
      if (i === 0) {
        return {...selector, isBold: true, isSelected: true, selected: { 
    "id": id,
    "song_id": song_id,
    "title": title,
    "year": year,
    "artist_a": artist_a,
    "artist_a_id": artist_a_id,
    "artist_b": artist_b,
    "artist_b_id": artist_b_id
    }, artistA: { "id": artist_a_id, "artist": artist_a, "matches": optionGenerator(artist_a_id)}, artistB: { "id": artist_b_id, "artist": artist_b, "matches": optionGenerator(artist_b_id) }};
      } else if (i === 1) {
        return {...selector, isBold: true, isSelected: false, selected: {}, isOptions: true, options: optionGenerator(artist_b_id), artistA: {}, artistB: {}};
      }
      return {...selector, isBold: true, isOptions: false, isSelected: false, options: {}, selected: {}, artistA: {}, artistB: {}} 
    });

    setSelections(newSelections);
    setSeeInstructions(true);
    setQuery("")
    setSeeSelector(true);
    setSeeCongratulations(false);
    setSeeNiceTry(false);
    setSeeIntroduction(false);
    setSeeSearch(false);
    setSwap(false);
    setSeePodcast(false);
    setSeeSongCard(true);   
    setSeeNetwork(true);
  };
  
  function handleSwapArtist(event: any, boxId: number) {

    if (seeCongratulations || seeNiceTry) {
      setSeeCongratulations(false);
      setSeeNiceTry(false);

      const newSelections = selections.map((selector: { boxId: number; }) => {
      if (selector.boxId === 1) {
        return {...selector, isBold: true, artistA: selections[0].artistB, artistB: selections[0].artistA};
      } else if (selector.boxId === 2) {
        return {...selector, isBold: true, isSelected: false, selected: {}, isOptions: true, options: optionGenerator(selections[0].artistA.id), artistA: {}, artistB: {}};
      } 
      return {...selector, isBold: true, isSelected: false, selected: {}, isOptions: false, options: {}, artistA: {}, artistB: {}};
    });
    setSelections(newSelections)
    setSwap(prevSwap => {
      if (prevSwap === true) {
        return false;
      } 
      return true;
    });
    } else {
      
    const newSelections = selections.map((selector: { boxId: number; }) => {
      if (selector.boxId === 1) {
        return {...selector, isBold: true, artistA: selections[0].artistB, artistB: selections[0].artistA};
      } else if (selector.boxId === 2) {
        return {...selector, isBold: true, isSelected: false, selected: {}, isOptions: true, options: optionGenerator(selections[0].artistA.id), artistA: {}, artistB: {}};
      } 
      return {...selector, isBold: true, isSelected: false, selected: {}, isOptions: false, options: {}, artistA: {}, artistB: {}};
    });
    setSelections(newSelections)
    setSwap(prevSwap => {
      if (prevSwap === true) {
        return false;
      } 
      return true;
    });}
  };

  function handlePodcastDetails(event: any) {
    
    setSeePodcastDetails(prevDetails => {
      if (prevDetails === true) {
        return false;
      } 
      return true;
    });
  };
  
  useEffect(() => {
    
    setTimeout(() => setSeeApp(true), 1500);
    setTimeout(() => setSeeLogo(false), 1500)
  }, []);

  useEffect(() => {
    handleMediaSelect(event, "https://www.youtube.com/embed/videoseries?si=JF7tEqEDOGLlWPk8&amp;list=PL3fAq4OrBzWB3F3fbxSZrywuUgHwBqsbl", 5)
  }, [])

  useEffect(() => {
  setVersionPromise(versions());
  setLatestPromise(latest());
  }, [])

  useEffect(() => {
   
    seeNiceTry && setSelections((prevSelections: any[]) => {
      return prevSelections.map(selection => {
        return {...selection, isOptions: false};
        }
      )}
      );

  }, [seeNiceTry]);

  useEffect(() => {

    seeCongratulations && setSelections((prevSelections: any[]) => {
      return prevSelections.map(selection => {
        return {...selection, isOptions: false};
        }
      )}
      );

  }, [seeCongratulations]);




  return (
  
  <div>
    <Logo 
    seeLogo={seeLogo}/>
  {seeApp && 
    <div className="app">
      <div className="sidebar"> 
        <div className="search">
          <form id="search" >
            <label>
              <input className="searchField" type="text" placeholder="Search artist or song" 
                value={query} 
                onChange={handleOnSearch}>
              </input>
            </label>
            <br />
          </form>
        </div>
        {seeSearch && <div className="searchResults">
          <Search 
          versionPromise={versionPromise}
          query={query}
          handleSearchChange={handleSearchChange}
          />
        </div>}
        {seeIntroduction &&
        <Welcome 
        seePodcastDetails={seePodcastDetails}
        handlePodcastDetails={handlePodcastDetails}/>
        }
        {seeInstructions &&
        <div className="instructions">
          <span>
            Below you can build a playlist from the songs in the matrix 
            following the rules of the SICZ podcast. 
            See if you can get back to one of your original artists within six duets.
          </span>
        </div>}
        {seeSelector && 
        <div>
          <Selector 
          selections={selections}
          handleSwapArtist={handleSwapArtist}
          handleOptionChange={handleOptionChange}
          handleRevertToOptions={handleRevertToOptions}
          handleSong={handleSong}
          handleYear={handleYear}
          handleSongChange={handleSongChange}
          handleArtist={handleArtist}
          />
          <Information
          seeIntroduction={seeIntroduction}
          seeCongratulations={seeCongratulations}
          seeNiceTry={seeNiceTry}
          />
        </div>}       
      </div>
      <div 
        className="main">
        {/* {seeNetwork &&
        <div className="network">
         <TotalNetworkGraph
         versionPromise={versionPromise}
         />
        </div> } */}

          {seeNetwork &&
        <div className="network">
          <NetworkGraph 
          selections={selections}
          />
        </div>}
        {seePodcast && 
        <div>
          <Podcast 
          episode={episode}
          handleMediaSelect={handleMediaSelect}
          mediaSelect={mediaSelect}
          mediaSwitch={mediaSwitch}/>
        </div>}
        {seeSongCard && 
        <div ref={songCardRef}>
          <SongCard
          version={version}
          versionPromise={versionPromise}
          composerPromise={composerPromise}
          adaptationPromise={adaptationPromise}
          personalTagPromise={personalTagPromise}
          releaseTagPromise={releaseTagPromise}
          styleTagPromise={styleTagPromise}
          specialTagPromise={specialTagPromise}
          performanceTagPromise={performanceTagPromise}
          performancePromise={performancePromise}
          mediaSwitch={mediaSwitch}
          mediaSelect={mediaSelect}
          handleArtist={handleArtist}
          handleComposers={handleComposers}
          handleYear={handleYear}
          handleSongChange={handleSongChange}
          handleSong={handleSong}
          handleTag={handleTag}
          handleMediaSelect={handleMediaSelect}
          handlePerfThreeTag={handlePerfThreeTag}
          handlePerfFourTag={handlePerfFourTag}
          handleFourTag={handleFourTag}
          handleReleaseFourTag={handleReleaseFourTag}
          />
        </div>}
         <div ref={tableRef}>
         {seeArtistTable && <ArtistTable 
         artistCreditPromiseA={artistCreditPromiseA}
         artistCreditPromiseB={artistCreditPromiseB}
         tableArtistPromise={tableArtistPromise}
         handleSongChange={handleSongChange}
         handleYear={handleYear}
         handleArtist={handleArtist}
         />}
         {seeComposerTable && <ComposerTable 
         composerCreditPromise={composerCreditPromise}
         handleSongChange={handleSongChange}
         handleYear={handleYear}
         />}
         {seeYearTable && <YearTable 
         yearCreditPromise={yearCreditPromise}
         handleSongChange={handleSongChange}
         />}
         {seeSongTable && <SongTable
         songCreditPromise={songCreditPromise}
         handleSongChange={handleSongChange}
         handleYear={handleYear}
         />}
         {seeThreeColTable && <ThreeColumnTable 
         threeColTagPromise={threeColTagPromise}
         handleSongChange={handleSongChange}
         handleYear={handleYear}
         />}
         {seeFourColTable && <FourColumnTable 
         fourColTagPromise={fourColTagPromise}
         handleSongChange={handleSongChange}
         handleYear={handleYear}
         handleTag={handleTag}
         />}
         {seePerfThreeColTable && <PerfThreeColumnTable
         perfThreeColTagPromise={perfThreeColTagPromise}
         handleSongChange={handleSongChange}
         handleYear={handleYear}
         />}
         {seePerfFourColTable && <PerfFourColumnTable 
         perfFourColTagPromise={perfFourColTagPromise}
         handleSongChange={handleSongChange}
         handleYear={handleYear}
         handlePerfThreeTag={handlePerfThreeTag}
         />}
         {seeReleaseFourColTable && <ReleaseFourColumnTable
         releaseFourColTagPromise={releaseFourColTagPromise}
         releaseYearFourTagPromise={releaseYearFourTagPromise}
         handleSongChange={handleSongChange}
         handleYear={handleYear}
         handlePerfThreeTag={handlePerfThreeTag}
         />}
         <div>
          <Latest 
          latestPromise={latestPromise}
          latestSwitch={latestSwitch}
          latestSelect={latestSelect}
          handleLatestSelect={handleLatestSelect}
         />
        </div>
        </div>
      </div>
    </div>}
  </div>
  )
}

  
    
      