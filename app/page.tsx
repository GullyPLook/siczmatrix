'use client'
import React, { useEffect, useState } from "react";
import Select from "react-dropdown-select";
import data from './nodes.json'
import edges from './edges.json'
import records from './records.json'



export default function Home() {
  
    const [artistA, setArtistA] = useState<any>('null');
    const [artistB, setArtistB] = useState<any>('null');
    const [artistC, setArtistC] = useState<any>('null');
    const [artistD, setArtistD] = useState<any>('null');
    const [artistE, setArtistE] = useState<any>('null');
    const [artistF, setArtistF] = useState<any>('null');
    const [artistG, setArtistG] = useState<any>('null');
    const [artistH, setArtistH] = useState<any>('null');
    const [artistI, setArtistI] = useState<any>('null');
    const [artistJ, setArtistJ] = useState<any>('null');
    const [artistK, setArtistK] = useState<any>('null');
    const [artistL, setArtistL] = useState<any>('null');
    const [artistM, setArtistM] = useState<any>('null');
    const [artistN, setArtistN] = useState<any>('null');

    const [seeSelectA, setSeeSelectA] = useState(true)
    const [seeSelectB, setSeeSelectB] = useState(false);
    const [seeSelectC, setSeeSelectC] = useState(false);
    const [seeSelectD, setSeeSelectD] = useState(false);
    const [seeSelectE, setSeeSelectE] = useState(false);
    const [seeSelectF, setSeeSelectF] = useState(false);
    const [seeSelectG, setSeeSelectG] = useState(false);
    const [seeSelectH, setSeeSelectH] = useState(false);
    const [seeSelectI, setSeeSelectI] = useState(false);
    const [seeSelectJ, setSeeSelectJ] = useState(false);
    const [seeSelectK, setSeeSelectK] = useState(false);
    const [seeSelectL, setSeeSelectL] = useState(false);
    const [seeSelectM, setSeeSelectM] = useState(false);
    const [seeSelectN, setSeeSelectN] = useState(false);
    const [seeInstructions, setSeeInstructions] = useState(true);
    const [seeCongrats, setSeeCongrats] = useState<number>(0);
    const [seeNiceTry, setSeeNiceTry] = useState<number>(0);

    const [liveA, setLiveA] = useState(true)
    // const [liveA, setLiveA = useState(true)]
    // const [liveA, setLiveA = useState(true)]
    // const [liveA, setLiveA = useState(true)]
    // const [liveA, setLiveA = useState(true)]
    // const [liveA, setLiveA = useState(true)]
    // const [liveA, setLiveA = useState(true)]
    // const [liveA, setLiveA = useState(true)]



    const [seePlayA, setSeePlayA] = useState(true)
    const [seePlayB, setSeePlayB] = useState(true)
    const [seePlayC, setSeePlayC] = useState(true)
    const [seePlayD, setSeePlayD] = useState(true)
    const [seePlayE, setSeePlayE] = useState(true)
    const [seePlayF, setSeePlayF] = useState(true)
    const [seePlayG, setSeePlayG] = useState(true)
    const [seePlayH, setSeePlayH] = useState(true)
    const [seePlayI, setSeePlayI] = useState(true)
    const [seePlayJ, setSeePlayJ] = useState(true)
    const [seePlayK, setSeePlayK] = useState(true)
    const [seePlayL, setSeePlayL] = useState(true)
    const [seePlayM, setSeePlayM] = useState(true)
    


    
    useEffect(() => {
      seeCongrats === 1 
      ? setSeeSelectE(false) : null;
      seeCongrats === 2 
      ? setSeeSelectF(false) : null;
      seeCongrats === 3 
      ? setSeeSelectG(false) : null;
      seeCongrats === 4 
      ? setSeeSelectH(false) : null;
      seeCongrats === 5 
      ? (setSeeSelectI(false)
      , setSeePlayA(false)
      ) : null;
      seeCongrats === 6 
      ? (setSeeSelectJ(false)
      , setSeePlayA(false)
      , setSeePlayB(false)) : null;
      seeCongrats === 7 
      ? (setSeeSelectK(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)) : null;
      seeCongrats === 8 
      ? (setSeeSelectL(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)) : null;
      seeCongrats === 9 
      ? (setSeeSelectM(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)
      , setSeePlayE(false)) : null;
      seeCongrats === 10 
      ? (setSeeSelectN(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)
      , setSeePlayE(false)
      , setSeePlayF(false)) : null;
      seeCongrats === 11 
      ? (setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)
      , setSeePlayE(false)
      , setSeePlayF(false)
      , setSeePlayG(false)) : null;
      seeCongrats === 12 
      ? (setSeeSelectF(false)
      , setSeePlayA(false)) : null;
      seeCongrats === 13 
      ? (setSeeSelectG(false)
      , setSeePlayA(false)) : null;
      seeCongrats === 14 
      ? (setSeeSelectG(false)
      , setSeePlayA(false)
      , setSeePlayB(false)) : null;
      seeCongrats === 15 
      ? (setSeeSelectH(false)
      , setSeePlayA(false)) : null;
      seeCongrats === 16 
      ? (setSeeSelectH(false)
      , setSeePlayA(false)
      , setSeePlayB(false)) : null;
      seeCongrats === 17 
      ? (setSeeSelectH(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)) : null;
      
      seeCongrats === 18 
      ? (setSeeSelectI(false)
      , setSeePlayA(false)
      , setSeePlayB(false)) : null;
      seeCongrats === 19 
      ? (setSeeSelectI(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)) : null;
      seeCongrats === 20 
      ? (setSeeSelectI(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)) : null;

      seeCongrats === 21 
      ? (setSeeSelectJ(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)) : null;
      seeCongrats === 22 
      ? (setSeeSelectJ(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)) : null;
      seeCongrats === 23 
      ? (setSeeSelectJ(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)
      , setSeePlayE(false)) : null;
    
      seeCongrats === 24 
      ? (setSeeSelectK(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)) : null;
      seeCongrats === 25 
      ? (setSeeSelectK(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)
      , setSeePlayE(false)) : null;
      seeCongrats === 26 
      ? (setSeeSelectK(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)
      , setSeePlayE(false)
      , setSeePlayF(false)) : null;
    
      seeCongrats === 27 
      ? (setSeeSelectL(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)
      , setSeePlayE(false)) : null;
      seeCongrats === 28 
      ? (setSeeSelectL(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)
      , setSeePlayE(false)
      , setSeePlayF(false)) : null;
      seeCongrats === 29 
      ? (setSeeSelectL(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)
      , setSeePlayE(false)
      , setSeePlayF(false)
      , setSeePlayG(false)) : null;
    
      seeCongrats === 30 
      ? (setSeeSelectM(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)
      , setSeePlayE(false)
      , setSeePlayF(false)) : null;
      seeCongrats === 31 
      ? (setSeeSelectM(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)
      , setSeePlayE(false)
      , setSeePlayF(false)
      , setSeePlayG(false)) : null;
      seeCongrats === 32 
      ? (setSeeSelectM(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)
      , setSeePlayE(false)
      , setSeePlayF(false)
      , setSeePlayG(false)
      , setSeePlayH(false)) : null;
    
      seeCongrats === 33 
      ? (setSeeSelectN(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)
      , setSeePlayE(false)
      , setSeePlayF(false)
      , setSeePlayG(false)) : null;
      seeCongrats === 34 
      ? (setSeeSelectN(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)
      , setSeePlayE(false)
      , setSeePlayF(false)
      , setSeePlayG(false)
      , setSeePlayH(false)) : null;
      seeCongrats === 35 
      ? (setSeeSelectN(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)
      , setSeePlayE(false)
      , setSeePlayF(false)
      , setSeePlayG(false)
      , setSeePlayH(false)
      , setSeePlayI(false)) : null;
      
      seeCongrats === 36 
      ? (setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)
      , setSeePlayE(false)
      , setSeePlayF(false)
      , setSeePlayG(false)
      , setSeePlayH(false)) : null;
      seeCongrats === 37 
      ? (setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)
      , setSeePlayE(false)
      , setSeePlayF(false)
      , setSeePlayG(false)
      , setSeePlayH(false)
      , setSeePlayI(false)) : null;
      seeCongrats === 38 
      ? (setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)
      , setSeePlayE(false)
      , setSeePlayF(false)
      , setSeePlayG(false)
      , setSeePlayH(false)
      , setSeePlayI(false)
      , setSeePlayJ(false)) : null;
    });
    
    useEffect(() => {

      seeNiceTry === 1 
      ? setSeeSelectI(false) : null;
      seeNiceTry === 2 
      ? setSeeSelectJ(false) : null;
      seeNiceTry === 3 
      ? setSeeSelectK(false) : null;
      seeNiceTry === 4 
      ? setSeeSelectL(false) : null;
      seeNiceTry === 5 
      ? setSeeSelectM(false) : null;
      seeNiceTry === 6 
      ? setSeeSelectN(false) : null;
      seeNiceTry === 7 
      ? (setSeeSelectJ(false)
      , setSeePlayA(false)) : null;
      
      seeNiceTry === 8 
      ? (setSeeSelectK(false)
      , setSeePlayA(false)) : null;
      seeNiceTry === 9 
      ? (setSeeSelectK(false)
      , setSeePlayA(false)
      , setSeePlayB(false)) : null;
      
      seeNiceTry === 10 
      ? (setSeeSelectL(false)
      , setSeePlayA(false)) : null;
      seeNiceTry === 11 
      ? (setSeeSelectL(false)
      , setSeePlayA(false)
      , setSeePlayB(false)) : null;
      seeNiceTry === 12 
      ? (setSeeSelectL(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)) : null;
    
      seeNiceTry === 13 
      ? (setSeeSelectM(false)
      , setSeePlayA(false)) : null;
      seeNiceTry === 14 
      ? (setSeeSelectM(false)
      , setSeePlayA(false)
      , setSeePlayB(false)) : null;
      seeNiceTry === 15 
      ? (setSeeSelectM(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)) : null;
      seeNiceTry === 16 
      ? (setSeeSelectM(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)) : null;
    
      seeNiceTry === 17 
      ? (setSeeSelectN(false)
      , setSeePlayA(false)) : null;
      seeNiceTry === 18 
      ? (setSeeSelectN(false)
      , setSeePlayA(false)
      , setSeePlayB(false)) : null;
      seeNiceTry === 19 
      ? (setSeeSelectN(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)) : null;
      seeNiceTry === 20 
      ? (setSeeSelectN(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)) : null;
      seeNiceTry === 21 
      ? (setSeeSelectN(false)
      , setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)
      , setSeePlayE(false)) : null;
    
      seeNiceTry === 17 
      ? setSeePlayA(false) : null;
      seeNiceTry === 18 
      ? (setSeePlayA(false)
      , setSeePlayB(false)) : null;
      seeNiceTry === 19 
      ? (setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)) : null;
      seeNiceTry === 20 
      ? (setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)) : null;
      seeNiceTry === 21 
      ? (setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)
      , setSeePlayE(false)) : null;
      seeNiceTry === 22 
      ? (setSeePlayA(false)
      , setSeePlayB(false)
      , setSeePlayC(false)
      , setSeePlayD(false)
      , setSeePlayE(false)
      , setSeePlayF(false)) : null;
    });
  
    

    // handle change event of #selectorA dropdown
    const handleArtistAChange = (artistA: any) => {
      setArtistA(artistA)
      setArtistB('null')
      setArtistC('null')
      setArtistD('null')
      setArtistE('null')
      setArtistF('null')
      setArtistG('null')
      setArtistH('null')
      setArtistI('null')
      setArtistJ('null')
      setArtistK('null')
      setArtistL('null')
      setArtistM('null')
      setArtistN('null')
      setSeeSelectB(false)
      setSeeSelectC(false)
      setSeeSelectD(false)
      setSeeSelectE(false)
      setSeeSelectF(false)
      setSeeSelectG(false)
      setSeeSelectH(false)
      setSeeSelectI(false)
      setSeeSelectJ(false)
      setSeeSelectK(false)
      setSeeSelectL(false)
      setSeeSelectM(false)
      setSeeSelectN(false)
      setSeeCongrats(0)
      setSeeNiceTry(0)
      setSeePlayA(true)
      setSeePlayB(true)
      setSeePlayC(true)
      setSeePlayD(true)
      setSeePlayE(true)
      setSeePlayF(true)
      setSeePlayG(true)
      setSeePlayH(true)
      setSeePlayI(true)
      setSeePlayJ(true)
      setSeePlayK(true)
      setSeePlayL(true)
      setSeePlayM(true)
    
      };

      useEffect(() => {
      artistA !== 'null' && artistB === 'null' 
      ? setSeeSelectB(true) : null
      });
    
    const artistAId = artistA[0].id;
    
    // match targets
    const sourceMatches = edges.filter(i => i.source === artistAId);
    const targetList = sourceMatches.map(i => i.target);
    // match sources
    const targetMatches = edges.filter(i => i.target === artistAId);
    const sourceList = targetMatches.map(i => i.source);
    // compile into one list
    const allMatches = targetList.concat(sourceList);
    
    const selectBOptions = data.filter(({ id }) => allMatches.includes(id));

    
    
    
    // handle change event of #selectorB dropdown
    const handleArtistBChange = (artistB: any) => {
      setArtistB(artistB)
      setArtistC('null')
      setArtistD('null')
      setArtistE('null')
      setArtistF('null')
      setArtistG('null')
      setArtistH('null')
      setArtistI('null')
      setArtistJ('null')
      setArtistK('null')
      setArtistL('null')
      setArtistM('null')
      setArtistN('null')
      setSeeSelectC(false)
      setSeeSelectD(false)
      setSeeSelectE(false)
      setSeeSelectF(false)
      setSeeSelectG(false)
      setSeeSelectH(false)
      setSeeSelectI(false)
      setSeeSelectJ(false)
      setSeeSelectK(false)
      setSeeSelectL(false)
      setSeeSelectM(false)
      setSeeSelectN(false)
      setSeeInstructions(false)
      setSeeCongrats(0)
      setSeeNiceTry(0)
      setSeePlayA(true)
      setSeePlayB(true)
      setSeePlayC(true)
      setSeePlayD(true)
      setSeePlayE(true)
      setSeePlayF(true)
      setSeePlayG(true)
      setSeePlayH(true)
      setSeePlayI(true)
      setSeePlayJ(true)
      setSeePlayK(true)
      setSeePlayL(true)
      setSeePlayM(true)
    };
    
    useEffect(() => {
      artistB !== 'null' && artistC === 'null' 
      ? setSeeSelectC(true) : null
      });

    const artistBId = artistB[0].id;
   
    const sourceBMatches = edges.filter(i => i.source === artistBId);
    const targetBList = sourceBMatches.map(i => i.target);
    // match sources
    const targetBMatches = edges.filter(i => i.target === artistBId);
    const sourceBList = targetBMatches.map(i => i.source);
    // compile into one list minus artist A
    const allBMatches = targetBList.concat(sourceBList).filter(function (number) {
      return number !== artistAId;
    });

    const selectCOptions = data.filter(({ id }) => allBMatches.includes(id));    
    
    // playlist entry
    const artistALabel = artistA[0].label;
    const artistBLabel = artistB[0].label;

    const filterA = records.filter(i => i.artist_a === artistALabel && i.artist_b === artistBLabel || i.artist_a === artistBLabel && i.artist_b === artistALabel);
    const recordA = filterA.slice(0, 1);

    // entries count
    const recordACount = filterA.length;

    function entryCount(e: number) {
      let result;
      if (e > 1) {
        result = (' ...+'+(e-1)+' more');
      } else {
        result = null;
      }
      return result;
    };

 
    
    // handle change event of #selectorC dropdown
    const handleArtistCChange = (artistC: any) => {
      setArtistC(artistC)
      setArtistD('null')
      setArtistE('null')
      setArtistF('null')
      setArtistG('null')
      setArtistH('null')
      setArtistI('null')
      setArtistJ('null')
      setArtistK('null')
      setArtistL('null')
      setArtistM('null')
      setArtistN('null')
      setSeeSelectD(false)
      setSeeSelectE(false)
      setSeeSelectF(false)
      setSeeSelectG(false)
      setSeeSelectH(false)
      setSeeSelectI(false)
      setSeeSelectJ(false)
      setSeeSelectK(false)
      setSeeSelectL(false)
      setSeeSelectM(false)
      setSeeSelectN(false)
      setSeeInstructions(false)
      setSeeCongrats(0)
      setSeeNiceTry(0)
      setSeePlayA(true)
      setSeePlayB(true)
      setSeePlayC(true)
      setSeePlayD(true)
      setSeePlayE(true)
      setSeePlayF(true)
      setSeePlayG(true)
      setSeePlayH(true)
      setSeePlayI(true)
      setSeePlayJ(true)
      setSeePlayK(true)
      setSeePlayL(true)
      setSeePlayM(true)
    };

    useEffect(() => {
      artistC !== 'null' && artistD === 'null' 
      ? setSeeSelectD(true) : null
      });

    const artistCId = artistC[0].id;

   
    const sourceCMatches = edges.filter(i => i.source === artistCId);
    const targetCList = sourceCMatches.map(i => i.target);
    // match sources
    const targetCMatches = edges.filter(i => i.target === artistCId);
    const sourceCList = targetCMatches.map(i => i.source);
    // compile into one list minus artist B
    const allCMatches = targetCList.concat(sourceCList).filter(function (number) {
      return number !== artistBId;
    });

    const selectDOptions = data.filter(({ id }) => allCMatches.includes(id));    
    

    // playlist entry
    
    const artistCLabel = artistC[0].label;

    const filterB = records.filter(i => i.artist_a === artistBLabel && i.artist_b === artistCLabel || i.artist_a === artistCLabel && i.artist_b === artistBLabel);
    const recordB = filterB.slice(0, 1);

    // entries count
    const recordBCount = filterB.length;

   



    // handle change event of #selectorD dropdown
    const handleArtistDChange = (artistD: any) => {
      setArtistD(artistD)
      setArtistE('null')
      setArtistF('null')
      setArtistG('null')
      setArtistH('null')
      setArtistI('null')
      setArtistJ('null')
      setArtistK('null')
      setArtistL('null')
      setArtistM('null')
      setArtistN('null')
      setSeeSelectE(false)
      setSeeSelectF(false)
      setSeeSelectG(false)
      setSeeSelectH(false)
      setSeeSelectI(false)
      setSeeSelectJ(false)
      setSeeSelectK(false)
      setSeeSelectL(false)
      setSeeSelectM(false)
      setSeeSelectN(false)
      setSeeInstructions(false)
      setSeeNiceTry(0)
      setSeePlayA(true)
      setSeePlayB(true)
      setSeePlayC(true)
      setSeePlayD(true)
      setSeePlayE(true)
      setSeePlayF(true)
      setSeePlayG(true)
      setSeePlayH(true)
      setSeePlayI(true)
      setSeePlayJ(true)
      setSeePlayK(true)
      setSeePlayL(true)
      setSeePlayM(true)
      if (artistD[0].label === artistA[0].label) {
        return setSeeCongrats(1);
      } else {
        return setSeeCongrats(0);
      };
    };

    useEffect(() => {
      artistD !== 'null' && artistE === 'null' && seeCongrats !== 1
      ? setSeeSelectE(true) : null
      });
      
    const artistDId = artistD[0].id;
    
    
   
    const sourceDMatches = edges.filter(i => i.source === artistDId);
    const targetDList = sourceDMatches.map(i => i.target);
    // match sources
    const targetDMatches = edges.filter(i => i.target === artistDId);
    const sourceDList = targetDMatches.map(i => i.source);
    // compile into one list minus artist C
    const allDMatches = targetDList.concat(sourceDList).filter(function (number) {
      return number !== artistCId;
    });

    const selectEOptions = data.filter(({ id }) => allDMatches.includes(id));    
    

      // playlist entry
    
    const artistDLabel = artistD[0].label;

    const filterC = records.filter(i => i.artist_a === artistCLabel && i.artist_b === artistDLabel || i.artist_a === artistDLabel && i.artist_b === artistCLabel)
    const recordC = filterC.slice(0, 1);

    // entries count
    const recordCCount = filterC.length;



    // handle change event of #selectorE dropdown
    const handleArtistEChange = (artistE: any) => {
      setArtistE(artistE)
      setArtistF('null')
      setArtistG('null')
      setArtistH('null')
      setArtistI('null')
      setArtistJ('null')
      setArtistK('null')
      setArtistL('null')
      setArtistM('null')
      setArtistN('null')
      setSeeSelectF(false)
      setSeeSelectG(false)
      setSeeSelectH(false)
      setSeeSelectI(false)
      setSeeSelectJ(false)
      setSeeSelectK(false)
      setSeeSelectL(false)
      setSeeSelectM(false)
      setSeeSelectN(false)
      setSeeInstructions(false)
      setSeeNiceTry(0)
      setSeePlayA(true)
      setSeePlayB(true)
      setSeePlayC(true)
      setSeePlayD(true)
      setSeePlayE(true)
      setSeePlayF(true)
      setSeePlayG(true)
      setSeePlayH(true)
      setSeePlayI(true)
      setSeePlayJ(true)
      setSeePlayK(true)
      setSeePlayL(true)
      setSeePlayM(true)
      if (artistE[0].label === artistA[0].label){
        return setSeeCongrats(2);
      } else if (artistE[0].label === artistB[0].label){
        return setSeeCongrats(12);
      } else {
        return setSeeCongrats(0);
      };
    };
    
    useEffect(() => {
      artistE !== 'null' && artistF === 'null' && seeCongrats !== 2 && seeCongrats !== 12
      ? setSeeSelectF(true) : null
      });

    const artistEId = artistE[0].id;
   
    const sourceEMatches = edges.filter(i => i.source === artistEId);
    const targetEList = sourceEMatches.map(i => i.target);
    // match sources
    const targetEMatches = edges.filter(i => i.target === artistEId);
    const sourceEList = targetEMatches.map(i => i.source);
    // compile into one list minus artist D
    const allEMatches = targetEList.concat(sourceEList).filter(function (number) {
      return number !== artistDId;
    });

    const selectFOptions = data.filter(({ id }) => allEMatches.includes(id));    
    

    // playlist entry
    
    const artistELabel = artistE[0].label;

    const filterD = records.filter(i => i.artist_a === artistDLabel && i.artist_b === artistELabel || i.artist_a === artistELabel && i.artist_b === artistDLabel);
    const recordD = filterD.slice(0, 1);

    // entries count
    const recordDCount = filterD.length;
    
    

    // handle change event of #selectorF dropdown
    const handleArtistFChange = (artistF: any) => {
      setArtistF(artistF)
      setArtistG('null')
      setArtistH('null')
      setArtistI('null')
      setArtistJ('null')
      setArtistK('null')
      setArtistL('null')
      setArtistM('null')
      setArtistN('null')
      setSeeSelectG(false)
      setSeeSelectH(false)
      setSeeSelectI(false)
      setSeeSelectJ(false)
      setSeeSelectK(false)
      setSeeSelectL(false)
      setSeeSelectM(false)
      setSeeSelectN(false)
      setSeeInstructions(false)
      setSeeNiceTry(0)
      setSeePlayA(true)
      setSeePlayB(true)
      setSeePlayC(true)
      setSeePlayD(true)
      setSeePlayE(true)
      setSeePlayF(true)
      setSeePlayG(true)
      setSeePlayH(true)
      setSeePlayI(true)
      setSeePlayJ(true)
      setSeePlayK(true)
      setSeePlayL(true)
      setSeePlayM(true)
      if (artistF[0].label === artistA[0].label){
      return setSeeCongrats(3); 
    } else if (artistF[0].label === artistB[0].label){
      return setSeeCongrats(13);
    } else if (artistF[0].label === artistC[0].label){
      return setSeeCongrats(14); 
    } else {
      return setSeeCongrats(0);
      };
    };
    
    useEffect(() => {
      artistF !== 'null' && artistG === 'null' && seeCongrats !== 3 && seeCongrats !== 13 && seeCongrats !== 14
      ? setSeeSelectG(true) : null
      });

    
    const artistFId = artistF[0].id;
   
    const sourceFMatches = edges.filter(i => i.source === artistFId);
    const targetFList = sourceFMatches.map(i => i.target);
    // match sources
    const targetFMatches = edges.filter(i => i.target === artistFId);
    const sourceFList = targetFMatches.map(i => i.source);
    // compile into one list minus artist E
    const allFMatches = targetFList.concat(sourceFList).filter(function (number) {
      return number !== artistEId;
    });

    const selectGOptions = data.filter(({ id }) => allFMatches.includes(id));   

    
    // playlist entry
    
    const artistFLabel = artistF[0].label;

    const filterE = records.filter(i => i.artist_a === artistELabel && i.artist_b === artistFLabel || i.artist_a === artistFLabel && i.artist_b === artistELabel);
    const recordE = filterE.slice(0, 1);

    // entries count
    const recordECount = filterE.length;



    // handle change event of #selectorG dropdown
    const handleArtistGChange = (artistG: any) => {
      setArtistG(artistG)
      setArtistH('null')
      setArtistI('null')
      setArtistJ('null')
      setArtistK('null')
      setArtistL('null')
      setArtistM('null')
      setArtistN('null')
      setSeeSelectH(false)
      setSeeSelectI(false)
      setSeeSelectJ(false)
      setSeeSelectK(false)
      setSeeSelectL(false)
      setSeeSelectM(false)
      setSeeSelectN(false)
      setSeeInstructions(false)
      setSeeNiceTry(0)
      setSeePlayA(true)
      setSeePlayB(true)
      setSeePlayC(true)
      setSeePlayD(true)
      setSeePlayE(true)
      setSeePlayF(true)
      setSeePlayG(true)
      setSeePlayH(true)
      setSeePlayI(true)
      setSeePlayJ(true)
      setSeePlayK(true)
      setSeePlayL(true)
      setSeePlayM(true)
      if (artistG[0].label === artistA[0].label) {
        return setSeeCongrats(4);
      } else if (artistG[0].label === artistB[0].label){
        return setSeeCongrats(15);
      } else if (artistG[0].label === artistC[0].label){
        return setSeeCongrats(16);
      } else if (artistG[0].label === artistD[0].label){
        return setSeeCongrats(17);
      } else {
        return setSeeCongrats(0);
      };
    };

    useEffect(() => {
      artistG !== 'null' && artistH === 'null' && seeCongrats !== 4 && seeCongrats !== 15 && seeCongrats !== 16 && seeCongrats !== 17
      ? setSeeSelectH(true) : null
      });


    const artistGId = artistG[0].id;
   
    const sourceGMatches = edges.filter(i => i.source === artistGId);
    const targetGList = sourceGMatches.map(i => i.target);
    // match sources
    const targetGMatches = edges.filter(i => i.target === artistGId);
    const sourceGList = targetGMatches.map(i => i.source);
    // compile into one list minus artist F
    const allGMatches = targetGList.concat(sourceGList).filter(function (number) {
      return number !== artistFId;
    });

    const selectHOptions = data.filter(({ id }) => allGMatches.includes(id));
    

    // playlist entry
    
    const artistGLabel = artistG[0].label;

    const filterF = records.filter(i => i.artist_a === artistFLabel && i.artist_b === artistGLabel || i.artist_a === artistGLabel && i.artist_b === artistFLabel);
    const recordF = filterF.slice(0, 1);

    // entries count
    const recordFCount = filterF.length;



    // handle change event of #selectorH dropdown
    const handleArtistHChange = (artistH: any) => {
      setArtistH(artistH)
      setArtistI('null')
      setArtistJ('null')
      setArtistK('null')
      setArtistL('null')
      setArtistM('null')
      setArtistN('null')
      setSeeSelectI(false)
      setSeeSelectJ(false)
      setSeeSelectK(false)
      setSeeSelectL(false)
      setSeeSelectM(false)
      setSeeSelectN(false)
      setSeeInstructions(false)
      setSeeCongrats(0)
      setSeePlayA(true)
      setSeePlayB(true)
      setSeePlayC(true)
      setSeePlayD(true)
      setSeePlayE(true)
      setSeePlayF(true)
      setSeePlayG(true)
      setSeePlayH(true)
      setSeePlayI(true)
      setSeePlayJ(true)
      setSeePlayK(true)
      setSeePlayL(true)
      setSeePlayM(true)
      if (artistH[0].label === artistA[0].label){
        return setSeeNiceTry(1);
      } else if (artistH[0].label === artistB[0].label){
         return setSeeCongrats(5);
        } else if (artistH[0].label === artistC[0].label){
          return setSeeCongrats(18);
        } else if (artistH[0].label === artistD[0].label){
          return setSeeCongrats(19);
        } else if (artistH[0].label === artistE[0].label){
          return setSeeCongrats(20);
      } else {
        return (setSeeNiceTry(0), setSeeCongrats(0));
      };
    };

    useEffect(() => {
      artistH !== 'null' && artistI === 'null' && seeNiceTry !== 1 && seeCongrats !== 5 && seeCongrats !== 18 && seeCongrats !== 19 && seeCongrats !== 20 
      ? setSeeSelectI(true) : null
      });

    const artistHId = artistH[0].id;
   
    const sourceHMatches = edges.filter(i => i.source === artistHId);
    const targetHList = sourceHMatches.map(i => i.target);
    // match sources
    const targetHMatches = edges.filter(i => i.target === artistHId);
    const sourceHList = targetHMatches.map(i => i.source);
    // compile into one list minus artist G
    const allHMatches = targetHList.concat(sourceHList).filter(function (number) {
      return number !== artistGId;
    });

    const selectIOptions = data.filter(({ id }) => allHMatches.includes(id));
    

    // playlist entry
    
    const artistHLabel = artistH[0].label;

    const filterG = records.filter(i => i.artist_a === artistGLabel && i.artist_b === artistHLabel || i.artist_a === artistHLabel && i.artist_b === artistGLabel);
    const recordG = filterG.slice(0, 1);

    // entries count
    const recordGCount = filterG.length;



    // handle change event of #selectorI dropdown
    const handleArtistIChange = (artistI: any) => {
      setArtistI(artistI)
      setArtistJ('null')
      setArtistK('null')
      setArtistL('null')
      setArtistM('null')
      setArtistN('null')
      setSeeSelectJ(false)
      setSeeSelectK(false)
      setSeeSelectL(false)
      setSeeSelectM(false)
      setSeeSelectN(false)
      setSeeInstructions(false)
      setSeeCongrats(0)
      setSeePlayA(true)
      setSeePlayB(true)
      setSeePlayC(true)
      setSeePlayD(true)
      setSeePlayE(true)
      setSeePlayF(true)
      setSeePlayG(true)
      setSeePlayH(true)
      setSeePlayI(true)
      setSeePlayJ(true)
      setSeePlayK(true)
      setSeePlayL(true)
      setSeePlayM(true)
      if (artistI[0].label === artistA[0].label){
        return setSeeNiceTry(2);
      } else if (artistI[0].label === artistB[0].label){
        return setSeeNiceTry(7);
      } else if (artistI[0].label === artistC[0].label){
        return setSeeCongrats(6);
      } else if (artistI[0].label === artistD[0].label){
        return setSeeCongrats(21);
      } else if (artistI[0].label === artistE[0].label){
        return setSeeCongrats(22);
      } else if (artistI[0].label === artistF[0].label){
        return setSeeCongrats(23);
      } else {
        return (setSeeNiceTry(0), setSeeCongrats(0));
      };
    };

    useEffect(() => {
      artistI !== 'null' && artistJ === 'null' && seeNiceTry !== 2 && seeNiceTry !== 7 && seeCongrats !== 6 && seeCongrats !== 21 && seeCongrats !== 22 && seeCongrats !== 23
      ? setSeeSelectJ(true) : null
      });


    const artistIId = artistI[0].id;
   
    const sourceIMatches = edges.filter(i => i.source === artistIId);
    const targetIList = sourceIMatches.map(i => i.target);
    // match sources
    const targetIMatches = edges.filter(i => i.target === artistIId);
    const sourceIList = targetIMatches.map(i => i.source);
    // compile into one list minus artist H
    const allIMatches = targetIList.concat(sourceIList).filter(function (number) {
      return number !== artistHId;
    });

    const selectJOptions = data.filter(({ id }) => allIMatches.includes(id));
    

    // playlist entry
    
    const artistILabel = artistI[0].label;

    const filterH = records.filter(i => i.artist_a === artistHLabel && i.artist_b === artistILabel || i.artist_a === artistILabel && i.artist_b === artistHLabel);
    const recordH = filterH.slice(0, 1);

    // entries count
    const recordHCount = filterH.length;


    // handle change event of #selectorJ dropdown
    const handleArtistJChange = (artistJ: any) => {
      setArtistJ(artistJ)
      setArtistK('null')
      setArtistL('null')
      setArtistM('null')
      setArtistN('null')
      setSeeSelectK(false)
      setSeeSelectL(false)
      setSeeSelectM(false)
      setSeeSelectN(false)
      setSeeInstructions(false)
      setSeePlayA(true)
      setSeePlayB(true)
      setSeePlayC(true)
      setSeePlayD(true)
      setSeePlayE(true)
      setSeePlayF(true)
      setSeePlayG(true)
      setSeePlayH(true)
      setSeePlayI(true)
      setSeePlayJ(true)
      setSeePlayK(true)
      setSeePlayL(true)
      setSeePlayM(true)
      if (artistJ[0].label === artistA[0].label){
        return setSeeNiceTry(3);
      } else if (artistJ[0].label === artistB[0].label){
        return setSeeNiceTry(8);
      } else if (artistJ[0].label === artistC[0].label){
        return setSeeNiceTry(9);

      } else if (artistJ[0].label === artistD[0].label){
        return setSeeCongrats(7);
      } else if (artistJ[0].label === artistE[0].label){
        return setSeeCongrats(24);
      } else if (artistJ[0].label === artistF[0].label){
        return setSeeCongrats(25); 
      } else if (artistJ[0].label === artistG[0].label){
        return setSeeCongrats(26); 
     } else {
        return (setSeeNiceTry(0), setSeeCongrats(0));
      };
    };

    useEffect(() => {
      artistJ !== 'null' && artistK === 'null' && seeNiceTry !== 3 && seeNiceTry !== 8 && seeNiceTry !== 9 && seeCongrats !== 7 && seeCongrats !== 24 && seeCongrats !== 25 && seeCongrats !== 26
      ? setSeeSelectK(true) : null
      });


    const artistJId = artistJ[0].id;
   
    const sourceJMatches = edges.filter(i => i.source === artistJId);
    const targetJList = sourceJMatches.map(i => i.target);
    // match sources
    const targetJMatches = edges.filter(i => i.target === artistJId);
    const sourceJList = targetJMatches.map(i => i.source);
    // compile into one list minus artist I
    const allJMatches = targetJList.concat(sourceJList).filter(function (number) {
      return number !== artistIId;
    });

    const selectKOptions = data.filter(({ id }) => allJMatches.includes(id));
    

    // playlist entry
    
    const artistJLabel = artistJ[0].label;

    const filterI = records.filter(i => i.artist_a === artistILabel && i.artist_b === artistJLabel || i.artist_a === artistJLabel && i.artist_b === artistILabel);
    const recordI = filterI.slice(0, 1);

    // entries count
    const recordICount = filterI.length;


    // handle change event of #selectorK dropdown
    const handleArtistKChange = (artistK: any) => {
      setArtistK(artistK)
      setArtistL('null')
      setArtistM('null')
      setArtistN('null')
      setSeeSelectL(false)
      setSeeSelectM(false)
      setSeeSelectN(false)
      setSeeInstructions(false)
      setSeeCongrats(0)
      setSeePlayA(true)
      setSeePlayB(true)
      setSeePlayC(true)
      setSeePlayD(true)
      setSeePlayE(true)
      setSeePlayF(true)
      setSeePlayG(true)
      setSeePlayH(true)
      setSeePlayI(true)
      setSeePlayJ(true)
      setSeePlayK(true)
      setSeePlayL(true)
      setSeePlayM(true)
      if (artistK[0].label === artistA[0].label){
        return setSeeNiceTry(4);
      } else if (artistK[0].label === artistB[0].label){
        return setSeeNiceTry(10);
      } else if (artistK[0].label === artistC[0].label){
        return setSeeNiceTry(11);
      } else if (artistK[0].label === artistD[0].label){
        return setSeeNiceTry(12);

      } else if (artistK[0].label === artistE[0].label){
        return setSeeCongrats(8);
      } else if (artistK[0].label === artistF[0].label){
        return setSeeCongrats(27);
      } else if (artistK[0].label === artistG[0].label){
        return setSeeCongrats(28); 
      } else if (artistK[0].label === artistH[0].label){
        return setSeeCongrats(29);  
      } else {
        return (setSeeNiceTry(0), setSeeCongrats(0));
      };
    };

    useEffect(() => {
      artistK !== 'null' && artistL === 'null' && seeNiceTry !== 4 && seeNiceTry !== 10 && seeNiceTry !== 11 && seeNiceTry !== 12 && seeCongrats !== 8 && seeCongrats !== 27 && seeCongrats !== 28 && seeCongrats !== 29
      ? setSeeSelectL(true) : null
      });


    const artistKId = artistK[0].id;
   
    const sourceKMatches = edges.filter(i => i.source === artistKId);
    const targetKList = sourceKMatches.map(i => i.target);
    // match sources
    const targetKMatches = edges.filter(i => i.target === artistKId);
    const sourceKList = targetKMatches.map(i => i.source);
    // compile into one list minus artist J
    const allKMatches = targetKList.concat(sourceKList).filter(function (number) {
      return number !== artistJId;
    });

    const selectLOptions = data.filter(({ id }) => allKMatches.includes(id));
    

    // playlist entry
    
    const artistKLabel = artistK[0].label;

    const filterJ = records.filter(i => i.artist_a === artistJLabel && i.artist_b === artistKLabel || i.artist_a === artistKLabel && i.artist_b === artistJLabel);
    const recordJ = filterJ.slice(0, 1);

    // entries count
    const recordJCount = filterJ.length;


     // handle change event of #selectorL dropdown
     const handleArtistLChange = (artistL: any) => {
      setArtistL(artistL)
      setArtistM('null')
      setArtistN('null')
      setSeeSelectM(false)
      setSeeSelectN(false)
      setSeeInstructions(false)
      setSeeCongrats(0)
      setSeePlayA(true)
      setSeePlayB(true)
      setSeePlayC(true)
      setSeePlayD(true)
      setSeePlayE(true)
      setSeePlayF(true)
      setSeePlayG(true)
      setSeePlayH(true)
      setSeePlayI(true)
      setSeePlayJ(true)
      setSeePlayK(true)
      setSeePlayL(true)
      setSeePlayM(true)
      if (artistL[0].label === artistA[0].label){
        return setSeeNiceTry(5);
      } else if (artistL[0].label === artistB[0].label){
        return setSeeNiceTry(13);
      } else if (artistL[0].label === artistC[0].label){
        return setSeeNiceTry(14);
      } else if (artistL[0].label === artistD[0].label){
        return setSeeNiceTry(15);
      } else if (artistL[0].label === artistE[0].label){
        return setSeeNiceTry(16);

      } else if (artistL[0].label === artistF[0].label){
        return setSeeCongrats(9);
      } else if (artistL[0].label === artistG[0].label){
        return setSeeCongrats(30);
      } else if (artistL[0].label === artistH[0].label){
        return setSeeCongrats(31); 
      } else if (artistL[0].label === artistI[0].label){
        return setSeeCongrats(32);  
      } else {
        return (setSeeNiceTry(0), setSeeCongrats(0));
      };
    };

    useEffect(() => {
      artistL !== 'null' && artistM === 'null' && seeNiceTry !== 5 && seeNiceTry !== 13 && seeNiceTry !== 14 && seeNiceTry !== 15 && seeNiceTry !== 16 && seeCongrats !== 9 && seeCongrats !== 30 && seeCongrats !== 31 && seeCongrats !== 32
      ? setSeeSelectM(true) : null
      });

     const artistLId = artistL[0].id;
    
     const sourceLMatches = edges.filter(i => i.source === artistLId);
     const targetLList = sourceLMatches.map(i => i.target);
     // match sources
     const targetLMatches = edges.filter(i => i.target === artistLId);
     const sourceLList = targetLMatches.map(i => i.source);
     // compile into one list minus artist K
     const allLMatches = targetLList.concat(sourceLList).filter(function (number) {
       return number !== artistKId;
     });
 
     const selectMOptions = data.filter(({ id }) => allLMatches.includes(id));
     
 
     // playlist entry
     
     const artistLLabel = artistL[0].label;
 
     const filterK = records.filter(i => i.artist_a === artistKLabel && i.artist_b === artistLLabel || i.artist_a === artistLLabel && i.artist_b === artistKLabel);
     const recordK = filterK.slice(0, 1);
 
     // entries count
     const recordKCount = filterK.length;



      // handle change event of #selectorM dropdown
      const handleArtistMChange = (artistM: any) => {
        setArtistM(artistM)
        setArtistN('null')
        setSeeSelectN(false)
        setSeeInstructions(false)
        setSeeCongrats(0)
        setSeePlayA(true)
        setSeePlayB(true)
        setSeePlayC(true)
        setSeePlayD(true)
        setSeePlayE(true)
        setSeePlayF(true)
        setSeePlayG(true)
        setSeePlayH(true)
        setSeePlayI(true)
        setSeePlayJ(true)
        setSeePlayK(true)
        setSeePlayL(true)
        setSeePlayM(true)
        if (artistM[0].label === artistA[0].label){
          return setSeeNiceTry(6);
        } else if (artistM[0].label === artistB[0].label){
          return setSeeNiceTry(17);
        } else if (artistM[0].label === artistC[0].label){
          return setSeeNiceTry(18);
        } else if (artistM[0].label === artistD[0].label){
          return setSeeNiceTry(19);
        } else if (artistM[0].label === artistE[0].label){
          return setSeeNiceTry(20);
        } else if (artistM[0].label === artistF[0].label){
          return setSeeNiceTry(21);
  
        } else if (artistM[0].label === artistG[0].label){
          return setSeeCongrats(10);
        } else if (artistM[0].label === artistH[0].label){
          return setSeeCongrats(33);
        } else if (artistM[0].label === artistI[0].label){
          return setSeeCongrats(34); 
        } else if (artistM[0].label === artistJ[0].label){
          return setSeeCongrats(35);
        } else {
          return (setSeeNiceTry(0), setSeeCongrats(0));
        };
      };

      useEffect(() => {
        artistM !== 'null' && artistN === 'null' && seeNiceTry !== 6 && seeNiceTry !== 17 && seeNiceTry !== 18 && seeNiceTry !== 19 && seeNiceTry !== 20 && seeNiceTry !== 21 && seeCongrats !== 10 && seeCongrats !== 33 && seeCongrats !== 34 && seeCongrats !== 35
        ? setSeeSelectN(true) : null
        });

      const artistMId = artistM[0].id;
     
      const sourceMMatches = edges.filter(i => i.source === artistMId);
      const targetMList = sourceMMatches.map(i => i.target);
      // match sources
      const targetMMatches = edges.filter(i => i.target === artistMId);
      const sourceMList = targetMMatches.map(i => i.source);
      // compile into one list minus artist L
      const allMMatches = targetMList.concat(sourceMList).filter(function (number) {
        return number !== artistLId;
      });
  
      const selectNOptions = data.filter(({ id }) => allMMatches.includes(id));
      
  
      // playlist entry
      
      const artistMLabel = artistM[0].label;
  
      const filterL = records.filter(i => i.artist_a === artistLLabel && i.artist_b === artistMLabel || i.artist_a === artistMLabel && i.artist_b === artistLLabel);
      const recordL = filterL.slice(0, 1);
  
      // entries count
      const recordLCount = filterL.length;


        // handle change event of #selectorN dropdown
        const handleArtistNChange = (artistN: any) => {
          setArtistN(artistN)
          setSeeInstructions(false)
          setSeeCongrats(0)
          if (artistN[0].label === artistA[0].label){
            return setSeeNiceTry(28);
          } else if (artistN[0].label === artistB[0].label){
            return setSeeNiceTry(22);
          } else if (artistN[0].label === artistC[0].label){
            return setSeeNiceTry(23);
          } else if (artistN[0].label === artistD[0].label){
            return setSeeNiceTry(24);
          } else if (artistN[0].label === artistE[0].label){
            return setSeeNiceTry(25);
          } else if (artistN[0].label === artistF[0].label){
            return setSeeNiceTry(26);
          } else if (artistN[0].label === artistG[0].label){
            return setSeeNiceTry(27);
    
          } else if (artistN[0].label === artistH[0].label){
            return setSeeCongrats(11);
          } else if (artistN[0].label === artistI[0].label){
            return setSeeCongrats(36);
          } else if (artistN[0].label === artistJ[0].label){
            return setSeeCongrats(37); 
          } else if (artistN[0].label === artistK[0].label){
            return setSeeCongrats(38);
          } else {
            return (setSeeNiceTry(0), setSeeCongrats(0));
          };
        };
        const artistNId = artistN[0].id;
       
        const sourceNMatches = edges.filter(i => i.source === artistNId);
        const targetNList = sourceNMatches.map(i => i.target);
        // match sources
        const targetNMatches = edges.filter(i => i.target === artistNId);
        const sourceNList = targetNMatches.map(i => i.source);
        // compile into one list minus artist M
        const allNMatches = targetNList.concat(sourceNList).filter(function (number) {
          return number !== artistMId;
        });
    
        // const selectNOptions = data.filter(({ id }) => allNMatches.includes(id));
        
    
        // playlist entry
        
        const artistNLabel = artistN[0].label;
    
        const filterM = records.filter(i => i.artist_a === artistMLabel && i.artist_b === artistNLabel || i.artist_a === artistNLabel && i.artist_b === artistMLabel);
        const recordM = filterM.slice(0, 1);
    
        // entries count
        const recordMCount = filterM.length;

        
  return (
    <div>
      <div className="drop-titles" >
      {seeSelectA && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayA ? { border: "none",  width: 200} : {opacity: 0.5, color: "#D1206A", border: "none",  width: 200}}
      placeholder="Search artists"
      options={data}
      labelField="label" valueField="id"
      searchable={true}
      onChange={handleArtistAChange} 
      values={[]}      />}
      {seeSelectB && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayB ? { border: "none",  width: 200} : {opacity: 0.5, color: "#D1206A", border: "none",  width: 200}}
      placeholder="Choose duet partner"
      options={selectBOptions}
      labelField="label" valueField="id"
      searchable={false}
      onChange={handleArtistBChange} 
      values={artistB.value}      />}
      {seeSelectC && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayC ? { border: "none",  width: 200} : {opacity: 0.5, color: "#D1206A", border: "none",  width: 200}}
      placeholder="Choose duet partner"
      options={selectCOptions}
      labelField="label" valueField="id"
      searchable={false}
      onChange={handleArtistCChange} 
      values={[]}      />}
      {seeSelectD && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayD ? { border: "none",  width: 200} : {opacity: 0.5, color: "#D1206A", border: "none",  width: 200}}
      placeholder="Choose duet partner"
      options={selectDOptions}
      labelField="label" valueField="id"
      searchable={false}
      onChange={handleArtistDChange} 
      values={[]}      />}
      {seeSelectE && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayE ? { border: "none",  width: 200} : {opacity: 0.5, color: "#D1206A", border: "none",  width: 200}}
      placeholder="Choose duet partner"
      options={selectEOptions}
      labelField="label" valueField="id"
      searchable={false}
      onChange={handleArtistEChange} 
      values={[]}      />}
      {seeSelectF && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayF ? { border: "none",  width: 200} : {opacity: 0.5, color: "#D1206A", border: "none",  width: 200}}
      placeholder="Choose duet partner"
      options={selectFOptions}
      labelField="label" valueField="id"
      searchable={false}
      onChange={handleArtistFChange} 
      values={[]}      />}
      {seeSelectG && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayG ? { border: "none",  width: 200} : {opacity: 0.5, color: "#D1206A", border: "none",  width: 200}}
      placeholder="Choose duet partner"
      options={selectGOptions}
      labelField="label" valueField="id"
      searchable={false}
      onChange={handleArtistGChange} 
      values={[]}      />}

      {seeSelectH && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayH ? { border: "none",  width: 200} : {opacity: 0.5, color: "#D1206A", border: "none",  width: 200}}
      placeholder="Choose duet partner"
      options={selectHOptions}
      labelField="label" valueField="id"
      searchable={false}
      onChange={handleArtistHChange} 
      values={[]}      />}
      {seeSelectI && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayI ? { border: "none",  width: 200} : {opacity: 0.5, color: "#D1206A", border: "none",  width: 200}}
      placeholder="Choose duet partner"
      options={selectIOptions}
      labelField="label" valueField="id"
      searchable={false}
      onChange={handleArtistIChange} 
      values={[]}      />}
      {seeSelectJ && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayJ ? { border: "none",  width: 200} : {opacity: 0.5, color: "#D1206A", border: "none",  width: 200}}
      placeholder="Choose duet partner"
      options={selectJOptions}
      labelField="label" valueField="id"
      searchable={false}
      onChange={handleArtistJChange} 
      values={[]}      />}
      {seeSelectK && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayK ? { border: "none",  width: 200} : {opacity: 0.5, color: "#D1206A", border: "none",  width: 200}}
      placeholder="Choose duet partner"
      options={selectKOptions}
      labelField="label" valueField="id"
      searchable={false}
      onChange={handleArtistKChange} 
      values={[]}      />}
      {seeSelectL && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayL ? { border: "none",  width: 200} : {opacity: 0.5, color: "#D1206A", border: "none",  width: 200}}
      placeholder="Choose duet partner"
      options={selectLOptions}
      labelField="label" valueField="id"
      searchable={false}
      onChange={handleArtistLChange} 
      values={[]}      />}
      {seeSelectM && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayM ? { border: "none",  width: 200} : {opacity: 0.5, color: "#D1206A", border: "none",  width: 200}}
      placeholder="Choose duet partner"
      options={selectMOptions}
      labelField="label" valueField="id"
      searchable={false}
      onChange={handleArtistMChange} 
      values={[]}      />}
      {seeSelectN && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={{ border: "none",  width: 200}}
      placeholder="Choose duet partner"
      options={selectNOptions}
      labelField="label" valueField="id"
      searchable={false}
      onChange={handleArtistNChange} 
      values={[]}      />}
      </div>
      {seeInstructions && <div className="playlist">
        <ul>
        <li className="playlistSongs">{'Welcome to the Duet Matrix.'}</li>
        <li>{'See if you can create a circular playlist within 6 duets...'}</li>
        </ul>
      </div>}
      {seeCongrats !== 0 && <ul>
        <li className="congrats">{'Congratulations!'}</li>
      <li className="congratMessage">{'You made a circular playlist within 6 degrees of separation.'}</li>
        </ul>}
        {seeNiceTry !== 0 && <ul>
        <li className="niceTry">{'Nice try!'}</li>
      <li><span className="congratMessage">{'You made a circular playlist! Now try to do it within 6 degrees of separation.'}</span></li>
        </ul>}
      <div className="playlist">
        <ul>
        <li className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayA ? {}: {opacity: 0.5, color: "#D1206A"}}>
    { recordA.map((i) => {
    return <span key={i.id}>{i.artist_a +' & '+i.artist_b+' - '}</span>})}
    { recordA.map((i) => {
      return <span key={i.id} className="playlistSongs">{i.title+' '}</span>})}
    { recordA.map((i) => {
      return <span key={i.id} className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordACount)}</span>
  </li>
  <li className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayB ? {}: {opacity: 0.5, color: "#D1206A"}}>
    { recordB.map((i) => {
    return <span key={i.id}>{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordB.map((i) => {
      return <span key={i.id} className="playlistSongs">{i.title+' '}</span>})}
    { recordB.map((i) => {
      return <span key={i.id} className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordBCount)}</span>
  </li>
  <li className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayC ? {}: {opacity: 0.5, color: "#D1206A"}}>
    { recordC.map((i) => {
    return <span key={i.id}>{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordC.map((i) => {
      return <span key={i.id} className="playlistSongs">{i.title+' '}</span>})}
    { recordC.map((i) => {
      return <span key={i.id} className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordCCount)}</span>
  </li>
  <li className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayD ? {}: {opacity: 0.5, color: "#D1206A"}}>
    { recordD.map((i) => {
    return <span key={i.id} >{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordD.map((i) => {
      return <span key={i.id} className="playlistSongs">{i.title+' '}</span>})}
    { recordD.map((i) => {
      return <span key={i.id} className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordDCount)}</span>
  </li>
  <li className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayE ? {}: {opacity: 0.5, color: "#D1206A"}}>
    { recordE.map((i) => {
    return <span key={i.id}>{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordE.map((i) => {
      return <span key={i.id} className="playlistSongs">{i.title+' '}</span>})}
    { recordE.map((i) => {
      return <span key={i.id} className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordECount)}</span>
  </li>
  <li className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayF ? {}: {opacity: 0.5, color: "#D1206A"}}>
    { recordF.map((i) => {
    return <span key={i.id}>{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordF.map((i) => {
      return <span key={i.id} className="playlistSongs">{i.title+' '}</span>})}
    { recordF.map((i) => {
      return <span key={i.id} className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordFCount)}</span>
  </li>
  <li className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayG ? {}: {opacity: 0.5, color: "#D1206A"}}>
    { recordG.map((i) => {
    return <span key={i.id}>{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordG.map((i) => {
      return <span key={i.id} className="playlistSongs">{i.title+' '}</span>})}
    { recordG.map((i) => {
      return <span key={i.id} className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordGCount)}</span>
  </li>
  <li className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayH ? {}: {opacity: 0.5, color: "#D1206A"}}>
    { recordH.map((i) => {
    return <span key={i.id}>{i.artist_a +' & '+i.artist_b+' - '}</span>})}
    { recordH.map((i) => {
      return <span key={i.id} className="playlistSongs">{i.title+' '}</span>})}
    { recordH.map((i) => {
      return <span key={i.id} className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordHCount)}</span>
  </li>
  <li className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayI ? {}: {opacity: 0.5, color: "#D1206A"}}>
    { recordI.map((i) => {
    return <span key={i.id}>{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordI.map((i) => {
      return <span key={i.id} className="playlistSongs">{i.title+' '}</span>})}
    { recordI.map((i) => {
      return <span key={i.id} className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordICount)}</span>
  </li>
  <li className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayJ ? {}: {opacity: 0.5, color: "#D1206A"}}>
    { recordJ.map((i) => {
    return <span key={i.id}>{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordJ.map((i) => {
      return <span key={i.id} className="playlistSongs">{i.title+' '}</span>})}
    { recordJ.map((i) => {
      return <span key={i.id} className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordJCount)}</span>
  </li>
  <li className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayK ? {}: {opacity: 0.5, color: "#D1206A"}}>
    { recordK.map((i) => {
    return <span key={i.id}>{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordK.map((i) => {
      return <span key={i.id} className="playlistSongs">{i.title+' '}</span>})}
    { recordK.map((i) => {
      return <span key={i.id} className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordKCount)}</span>
  </li>
  <li className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayL ? {}: {opacity: 0.5, color: "#D1206A"}}>
    { recordL.map((i) => {
    return <span key={i.id}>{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordL.map((i) => {
      return <span key={i.id} className="playlistSongs">{i.title+' '}</span>})}
    { recordL.map((i) => {
      return <span key={i.id} className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordLCount)}</span>
  </li>
  <li className="transition ease-in-out hover:shadow-xl duration-400 ..." style={ seePlayM ? {}: {opacity: 0.5, color: "#D1206A"}}>
    { recordM.map((i) => {
    return <span key={i.id}>{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordM.map((i) => {
      return <span key={i.id} className="playlistSongs">{i.title+' '}</span>})}
    { recordM.map((i) => {
      return <span key={i.id} className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordMCount)}</span>
  </li>
      </ul>
      </div>
    </div>
  );
};



  