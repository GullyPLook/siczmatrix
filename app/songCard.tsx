'use client'
import { use, useEffect } from "react";

export default function SongCard(props: any) {

  const composers: any = use(props.composerPromise);
  const adaptations: any = use(props.adaptationPromise);
  const performances: any= use(props.performancePromise);
  const personalTags: any = use(props.personalTagPromise);
  const releaseTags: any = use(props.releaseTagPromise);
  const styleTags: any = use(props.styleTagPromise);
  const specialTags: any = use(props.specialTagPromise);
  const performanceTags: any = use(props.performanceTagPromise);
  
  const allVersions: any =
  adaptations.length > 0 ? use(props.versionPromise): null;

  function mediaSwitches() {

    const switches = performances.map((vid: {id: number; tag: any[]; link: string}) => {
      
      if (vid.tag.length === 0) {
        return (
          <button 
            key={vid.id}
            className="crossoverTags"
            style={props.mediaSwitch === vid.id ? { opacity: 1} : {opacity: 0.3}}
            onClick={(event) => props.handleMediaSelect(event, vid.link, vid.id)}><strong><i>Audio</i></strong>
          </button>
        )
      } else if (vid.tag.some(id => id.id === 1214)) {
        return (
          <button 
            key={vid.id}
            className="crossoverTags"
            style={props.mediaSwitch === vid.id ? { opacity: 1} : {opacity: 0.3}}
            onClick={(event) => props.handleMediaSelect(event, vid.link, vid.id)}><strong><i>Promo</i></strong>
          </button>
        )
      } else {
      return (
        <span key={vid.id}>
          {performanceTags.map((tag: { id: number; type_id: number; tag_id: number; type: string; tag: string }) => {
            if ((tag.id === vid.id) && (tag.type_id === 67)) {
              return (
                  <span key={tag.tag_id} className="splitTagWrapper"
                        style={props.mediaSwitch === vid.id ? { opacity: 1} : {opacity: 0.3}}>
                     <button className="crossoverLeft"
                          onClick={(event) => props.handlePerfFourTag(event, tag.type_id)}><strong><i>{tag.type}</i></strong></button>
                     <button className="crossoverRight"
                          onClick={(event) => [props.handleMediaSelect(event, vid.link, vid.id), props.handlePerfThreeTag(event, tag.tag_id)]}><strong><i>{tag.tag}</i></strong>
                     </button>
                  </span>
                  )
                  } else if ((tag.id === vid.id) && (tag.type_id !== 2) && (tag.type_id !== 21)) {
              return (
                  <span key={tag.tag_id} className="splitTagWrapper"
                        style={props.mediaSwitch === vid.id ? { opacity: 1} : {opacity: 0.3}}>
                     <button className="crossoverLeft"
                          onClick={(event) => props.handlePerfFourTag(event, tag.type_id)}><strong><i>{tag.type}</i></strong></button>
                     <button className="crossoverRight"
                          onClick={(event) => [props.handleMediaSelect(event, vid.link, vid.id), props.handlePerfThreeTag(event, tag.tag_id)]}><strong><i>{tag.tag}</i></strong>
                     </button>
                  </span>
                  )
                  } else if ((tag.id === vid.id) && (tag.type_id === 21)) {
              return (
                      <button 
                        key={tag.tag_id}
                        className="crossoverTags"
                        style={props.mediaSwitch === vid.id ? { opacity: 1} : {opacity: 0.3}}
                        onClick={(event) => props.handleYear(event, tag.tag)}><strong><i>{tag.tag}</i></strong>
                      </button>
                      )
                  } else if ((tag.id === vid.id) && (tag.type_id === 2) && (tag.tag_id !== 1216) && (tag.tag_id !== 1214)) {
              return (
                      <button 
                        key={tag.tag_id}
                        className="crossoverTags"
                        style={props.mediaSwitch === vid.id ? { opacity: 1} : {opacity: 0.3}}
                        onClick={(event) => props.handleReleaseFourTag(event, tag.tag_id)}><strong><i>{tag.tag}</i></strong>
                      </button>
                      )
            } else {

            }
          })}
        </span>
      )
    }})
    return switches 
  };

  
   const card = (
        <div className="songCard">
            <div className="videoContainer">
              <iframe 
                // width="560" 
                // height="315" 
                src={props.mediaSelect}
                title="YouTube video player" 
                // frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                // referrerpolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
              </iframe>
              <div className="mediaSwitches">
                {mediaSwitches()}
              </div>
            </div>
            <div className="songInfoContainer">
              <div className="scSongInfo">
                <div>
                  <button 
                    onClick={(event) => props.handleArtist(event, props.version.artist_a_id)}>
                    <strong>{props.version.artist_a}</strong>
                  </button>
                  <strong> & </strong> 
                  <button 
                    onClick={(event) => props.handleArtist(event, props.version.artist_b_id)}>
                    <strong>{props.version.artist_b}</strong>
                  </button>
                  <span>&nbsp;&nbsp;
                  {personalTags.map((tag: any) => {
                    if (tag.type_id === 12) {
                      return (
                        <span key={tag.tag_id} className="splitTagWrapper">
                          <button className="crossoverLeft"
                              onClick={(event) => props.handleFourTag(event, tag.type_id)}><strong><i>Crossover</i></strong></button>
                          <button className="crossoverRight"
                              onClick={(event) => props.handleTag(event, tag.tag_id)}><strong><i>{tag.tag}</i></strong>
                          </button>
                        </span>
                    )} else { 
                      return (
                        <button 
                          key={tag.tag_id}
                          className="crossoverTags"
                          onClick={(event) => props.handleTag(event, tag.tag_id)}><strong><i>{tag.tag}</i></strong>
                        </button>
                    )}    
                  })}
                  </span>
                  <br />
                  <button
                    onClick={(event) => props.handleSong(event, props.version.song_id)}>
                    <i style={{ color: "white", fontSize: "x-large"}}>{props.version.title}&nbsp;&nbsp;</i>
                  </button>
                  {adaptations.length > 0 ?
                  
                  <span style={{ fontSize: "smaller"}}><br />incl.&nbsp;
                  {adaptations.map((ad: { song_id: number; title: string; }) => {
                    if ((ad === adaptations[adaptations.length -1]) && (allVersions.some((version: { song_id: number; }) => version.song_id === ad.song_id))) {
                      return (
                      <button style={{ color: "#ffffffff", display: "inline-block"}}
                      key={ad.song_id}
                       onClick={(event) => props.handleSong(event, ad.song_id)} 
                      >{ad.title}</button>
                    )} else if (allVersions.some((version: { song_id: number; }) => version.song_id === ad.song_id)) {
                      return (
                      <button style={{ color: "#ffffffff", display: "inline-block"}}
                      key={ad.song_id}
                       onClick={(event) => props.handleSong(event, ad.song_id)} 
                      >{ad.title},&nbsp;</button>
                    )} else if (ad === adaptations[adaptations.length -1]) {
                      return (
                      <span style={{ color: "#acacac", display: "inline-block"}}
                      key={ad.song_id}
                      >{ad.title}</span>
                    )} else{
                      return (
                      <span style={{ color: "#acacac", display: "inline-block"}}
                      key={ad.song_id}
                      
                      >{ad.title},&nbsp;</span>
                    )}
                  })}</span>
                  : <span style={{ color: "white", fontSize: "smaller", display: "inline-block"}}>(
                  {composers.map((composer: { a_id: number; id: number; artist: string; }) => {
                    if (composer === composers[composers.length - 1]) {
                    return (
                    <button 
                      key={composer.a_id}
                      className="composerTag"
                      onClick={(event) => props.handleComposers(event, composer.a_id)}>{composer.artist}</button>
                  )} else {
                    return (
                    <button 
                      key={composer.a_id}
                      className="composerTag"
                      onClick={(event) => props.handleComposers(event, composer.a_id)}>{composer.artist},&nbsp;</button>
                    )
                  };
                  })})</span>}
                  <br />
                  <button
                  style={{ color: "white" }} 
                    onClick={(event) => props.handleYear(event, props.version.year)}>
                    <i>{props.version.year}</i>
                  </button>
                  <br />
                </div>
                <br />
                <div className="scRelease">
                  {releaseTags.map((tag: any) => {
                    if (tag.type_id === 32) {
                      return (
                        <span key={tag.tag_id} className="splitTagWrapper">
                          <button className="releaseLeft"
                              onClick={(event) => props.handleFourTag(event, tag.type_id)}><strong><i>Duo LP</i></strong></button>
                          <button className="releaseRight"
                              onClick={(event) => props.handleTag(event, tag.tag_id)}><strong><i>{tag.tag}</i></strong>
                          </button>
                        </span>
                    )} else if (tag.type_id === 54) { 
                      return (
                        <span key={tag.tag_id} className="splitTagWrapper">
                          <button className="releaseLeft"
                              onClick={(event) => props.handleFourTag(event, tag.type_id)}><strong><i>Soundtrack</i></strong></button>
                          <button className="releaseRight"
                              onClick={(event) => props.handleTag(event, tag.tag_id)}><strong><i>{tag.tag}</i></strong>
                          </button>
                        </span>
                    )} else if (tag.type_id === 62) { 
                      return (
                        <span key={tag.tag_id} className="splitTagWrapper">
                          <button className="releaseLeft"
                              onClick={(event) => props.handleFourTag(event, tag.type_id)}><strong><i>Various artists LP</i></strong></button>
                          <button className="releaseRight"
                              onClick={(event) => props.handleTag(event, tag.tag_id)}><strong><i>{tag.tag}</i></strong>
                          </button>
                        </span>
                    )} else if (tag.type_id === 63) { 
                      return (
                        <span key={tag.tag_id} className="splitTagWrapper">
                          <button className="releaseLeft"
                              onClick={(event) => props.handleFourTag(event, tag.type_id)}><strong><i>Duets LP</i></strong></button>
                          <button className="releaseRight"
                              onClick={(event) => props.handleTag(event, tag.tag_id)}><strong><i>{tag.tag}</i></strong>
                          </button>
                        </span>
                    )} else if (tag.type_id === 26) { 
                      return (
                        <span key={tag.tag_id} className="splitTagWrapper">
                          <button className="releaseLeft"
                              onClick={(event) => props.handleFourTag(event, tag.type_id)}><strong><i>Compilation</i></strong></button>
                          <button className="releaseRight"
                              onClick={(event) => props.handleTag(event, tag.tag_id)}><strong><i>{tag.tag}</i></strong>
                          </button>
                        </span>
                    )} else { 
                      return (
                        <button 
                          key={tag.tag_id}
                          className="releaseTags"
                          onClick={(event) => props.handleTag(event, tag.tag_id)}><strong><i>{tag.tag}</i></strong>
                        </button>
                    )}    
                  })}
                </div>
                <div className="scSong">
                  {styleTags.map((tag: any) => {
                    if (tag.type_id === 3) {
                      return (
                      <button 
                          key={tag.tag_id}
                          className="genreTags"
                          onClick={(event) => props.handleTag(event, tag.tag_id)}><strong><i>{tag.tag}</i></strong>
                        </button>
                    )} else
                      return 
                    })}
                    {styleTags.map((tag: any) => {
                    if (tag.type_id === 7) {
                      return (
                      <button 
                          key={tag.tag_id}
                          className="songFormTags"
                          onClick={(event) => props.handleTag(event, tag.tag_id)}><strong><i>{tag.tag}</i></strong>
                        </button>
                    )} else
                      return 
                    })}
                    {styleTags.map((tag: any) => {
                    if (tag.type_id === 8) {
                      return (
                      <button 
                          key={tag.tag_id}
                          className="subjectTags"
                          onClick={(event) => props.handleTag(event, tag.tag_id)}><strong><i>{tag.tag}</i></strong>
                        </button>
                    )} else
                      return 
                    })}
                    {styleTags.map((tag: any) => {
                    if (tag.type_id === 9) {
                      return (
                      <button 
                          key={tag.tag_id}
                          className="approachTags"
                          onClick={(event) => props.handleTag(event, tag.tag_id)}><strong><i>{tag.tag}</i></strong>
                        </button>
                    )} else
                      return 
                    })}
                    {styleTags.map((tag: any) => {
                    if (tag.type_id === 10) {
                      return (
                      <button 
                          key={tag.tag_id}
                          className="dynamicTags"
                          onClick={(event) => props.handleTag(event, tag.tag_id)}><strong><i>{tag.tag}</i></strong>
                        </button>
                    )} else
                      return 
                    })}
                </div>
                <div className="scSpecial">
                  {specialTags.map((tag: any) => {
                    if (tag.type_id === 67) {
                      return (
                        <span key={tag.tag_id} className="splitTagWrapper">
                          <button className="specialLeft"
                              onClick={(event) => props.handleFourTag(event, tag.type_id)}><strong><i>Cause</i></strong></button>
                          <button className="specialRight"
                              onClick={(event) => props.handleTag(event, tag.tag_id)}><strong><i>{tag.tag}</i></strong>
                          </button>
                        </span>
                    )} else { 
                      return (
                        <button 
                          key={tag.tag_id}
                          className="specialTags"
                          onClick={(event) => props.handleTag(event, tag.tag_id)}><strong><i>{tag.tag}</i></strong>
                        </button>
                    )}    
                  })}
                </div>
              </div>
            </div>
        </div>
    );

  console.log(props.mediaSelect)
  console.log(performances)

  useEffect(() => {
    setTimeout(() => props.handleMediaSelect(event, performances[performances.length - 1].link, performances[performances.length - 1].id), 100)
  }, [performances])
    
    return (
        <>
        {card}
        </>
    );
};