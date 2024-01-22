'use client'
import React, { useEffect, useState } from "react";
import Select from "react-dropdown-select";
import data from './nodes.json'
import edges from './edges.json'
import records from './records.json'



export default function Home() {
  
    const [artistA, setArtistA] = useState('null');
    const [artistB, setArtistB] = useState('null');
    const [artistC, setArtistC] = useState('null');
    const [artistD, setArtistD] = useState('null');
    const [artistE, setArtistE] = useState('null');
    const [artistF, setArtistF] = useState('null');
    const [artistG, setArtistG] = useState('null');
    const [artistH, setArtistH] = useState('null');
    const [artistI, setArtistI] = useState('null');
    const [artistJ, setArtistJ] = useState('null');
    const [artistK, setArtistK] = useState('null');
    const [artistL, setArtistL] = useState('null');
    const [artistM, setArtistM] = useState('null');
    const [artistN, setArtistN] = useState('null');
    
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

    const [playlist, setPlaylist] = useState(false);

    const handleDropCloseA = () => {
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
    };
    const handleDropCloseB = () => {
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
    };
    const handleDropCloseC = () => {
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
    };
    const handleDropCloseD = () => {
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
    };
    const handleDropCloseE = () => {
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
    };
    const handleDropCloseF = () => {
      setArtistG('null')
      setArtistH('null')
      setArtistI('null')
      setArtistJ('null')
      setArtistK('null')
      setArtistL('null')
      setArtistM('null')
      setArtistN('null')
      setSeeSelectG(false)
    };
    const handleDropCloseG = () => {
      setArtistH('null')
      setArtistI('null')
      setArtistJ('null')
      setArtistK('null')
      setArtistL('null')
      setArtistM('null')
      setArtistN('null')
      setSeeSelectH(false)
    };
    const handleDropCloseH = () => {
      setArtistI('null')
      setArtistJ('null')
      setArtistK('null')
      setArtistL('null')
      setArtistM('null')
      setArtistN('null')
      setSeeSelectI(false)
    };
    const handleDropCloseI = () => {
      setArtistJ('null')
      setArtistK('null')
      setArtistL('null')
      setArtistM('null')
      setArtistN('null')
      setSeeSelectJ(false)
    };
    const handleDropCloseJ = () => {
      setArtistK('null')
      setArtistL('null')
      setArtistM('null')
      setArtistN('null')
      setSeeSelectK(false)
    };
    const handleDropCloseK = () => {
      setArtistL('null')
      setArtistM('null')
      setArtistN('null')
      setSeeSelectL(false)
    };
    const handleDropCloseL = () => {
      setArtistM('null')
      setArtistN('null')
      setSeeSelectM(false)
    };
    const handleDropCloseM = () => {
      setArtistN('null')
      setSeeSelectN(false)
    };
    

    
    
    
    useEffect(() => {
      artistA !== 'null'
      ? setSeeSelectB(true)
      : setSeeSelectB(false);
      artistB !== 'null'
      ? setSeeSelectC(true)
      : setSeeSelectC(false);
      artistC !== 'null'
      ? setSeeSelectD(true)
      : setSeeSelectD(false);
      artistD !== 'null'
      ? setSeeSelectE(true)
      : setSeeSelectE(false);
      artistE !== 'null'
      ? setSeeSelectF(true)
      : setSeeSelectF(false);
      artistF !== 'null'
      ? setSeeSelectG(true)
      : setSeeSelectG(false);
      artistG !== 'null'
      ? setSeeSelectH(true)
      : setSeeSelectH(false);
      artistH !== 'null'
      ? setSeeSelectI(true)
      : setSeeSelectI(false);
      artistI !== 'null'
      ? setSeeSelectJ(true)
      : setSeeSelectJ(false);
      artistJ !== 'null'
      ? setSeeSelectK(true)
      : setSeeSelectK(false);
      artistK !== 'null'
      ? setSeeSelectL(true)
      : setSeeSelectL(false);
      artistL !== 'null'
      ? setSeeSelectM(true)
      : setSeeSelectM(false);
      artistM !== 'null'
      ? setSeeSelectN(true)
      : setSeeSelectN(false);
    }, [artistA, artistB, artistC, 
      artistD, artistE, artistF, 
      artistG, artistH, artistI, 
      artistJ, artistK, artistL, 
      artistM, artistN, seeSelectB, 
      seeSelectC, seeSelectD, seeSelectE, 
      seeSelectF, seeSelectG, seeSelectH, 
      seeSelectI, seeSelectJ, seeSelectK, 
      seeSelectL, seeSelectM, seeSelectN]);
    
    
    
  
    // handle change event of #selectorA dropdown
    const handleArtistAChange = (artistA) => setArtistA(artistA);
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
    const handleArtistBChange = (artistB) => setArtistB(artistB);
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

    function entryCount(e) {
      let result;
      if (e > 1) {
        result = (' ...+'+(e-1)+' more');
      } else {
        result = null;
      }
      return result;
    };

 
    
    // handle change event of #selectorC dropdown
    const handleArtistCChange = (artistC) => setArtistC(artistC);
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

    console.log(recordA)



    // handle change event of #selectorD dropdown
    const handleArtistDChange = (artistD) => setArtistD(artistD);
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
    const handleArtistEChange = (artistE) => setArtistE(artistE);
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
    const handleArtistFChange = (artistF) => setArtistF(artistF);
    const artistFId = artistF[0].id;
   
    const sourceFMatches = edges.filter(i => i.source === artistFId);
    const targetFList = sourceFMatches.map(i => i.target);
    // match sources
    const targetFMatches = edges.filter(i => i.target === artistFId);
    const sourceFList = targetFMatches.map(i => i.source);
    // compile into one list minus artist D
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
    const handleArtistGChange = (artistG) => setArtistG(artistG);
    const artistGId = artistG[0].id;
   
    const sourceGMatches = edges.filter(i => i.source === artistGId);
    const targetGList = sourceGMatches.map(i => i.target);
    // match sources
    const targetGMatches = edges.filter(i => i.target === artistGId);
    const sourceGList = targetGMatches.map(i => i.source);
    // compile into one list minus artist D
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
    const handleArtistHChange = (artistH) => setArtistH(artistH);
    const artistHId = artistH[0].id;
   
    const sourceHMatches = edges.filter(i => i.source === artistHId);
    const targetHList = sourceHMatches.map(i => i.target);
    // match sources
    const targetHMatches = edges.filter(i => i.target === artistHId);
    const sourceHList = targetHMatches.map(i => i.source);
    // compile into one list minus artist D
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
    const handleArtistIChange = (artistI) => setArtistI(artistI);
    const artistIId = artistI[0].id;
   
    const sourceIMatches = edges.filter(i => i.source === artistIId);
    const targetIList = sourceIMatches.map(i => i.target);
    // match sources
    const targetIMatches = edges.filter(i => i.target === artistIId);
    const sourceIList = targetIMatches.map(i => i.source);
    // compile into one list minus artist D
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
    const handleArtistJChange = (artistJ) => setArtistJ(artistJ);
    const artistJId = artistJ[0].id;
   
    const sourceJMatches = edges.filter(i => i.source === artistJId);
    const targetJList = sourceJMatches.map(i => i.target);
    // match sources
    const targetJMatches = edges.filter(i => i.target === artistJId);
    const sourceJList = targetJMatches.map(i => i.source);
    // compile into one list minus artist D
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
    const handleArtistKChange = (artistK) => setArtistK(artistK);
    const artistKId = artistK[0].id;
   
    const sourceKMatches = edges.filter(i => i.source === artistKId);
    const targetKList = sourceKMatches.map(i => i.target);
    // match sources
    const targetKMatches = edges.filter(i => i.target === artistKId);
    const sourceKList = targetKMatches.map(i => i.source);
    // compile into one list minus artist D
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
     const handleArtistLChange = (artistL) => setArtistL(artistL);
     const artistLId = artistL[0].id;
    
     const sourceLMatches = edges.filter(i => i.source === artistLId);
     const targetLList = sourceLMatches.map(i => i.target);
     // match sources
     const targetLMatches = edges.filter(i => i.target === artistLId);
     const sourceLList = targetLMatches.map(i => i.source);
     // compile into one list minus artist D
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
      const handleArtistMChange = (artistM) => setArtistM(artistM);
      const artistMId = artistM[0].id;
     
      const sourceMMatches = edges.filter(i => i.source === artistMId);
      const targetMList = sourceMMatches.map(i => i.target);
      // match sources
      const targetMMatches = edges.filter(i => i.target === artistMId);
      const sourceMList = targetMMatches.map(i => i.source);
      // compile into one list minus artist D
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
        const handleArtistNChange = (artistN) => setArtistN(artistN);
        const artistNId = artistN[0].id;
       
        const sourceNMatches = edges.filter(i => i.source === artistNId);
        const targetNList = sourceNMatches.map(i => i.target);
        // match sources
        const targetNMatches = edges.filter(i => i.target === artistNId);
        const sourceNList = targetNMatches.map(i => i.source);
        // compile into one list minus artist D
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
      <div className="Drop-titles" >
      <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={{ border: "none",  width: 200, marginRight: 10, marginBottom: 20 }}
      
      placeholder="Choose artist"
      options={data}
      labelField="label" valueField="id"
      searchable={true}
      onDropdownClose={handleDropCloseA}
      onChange={handleArtistAChange} 
      values={[]}      />
      {seeSelectB && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={{ border: "none", width: 200, marginRight: 10, marginBottom: 20 }}
      placeholder="Choose partner"
      options={selectBOptions}
      labelField="label" valueField="id"
      searchable={false}
      onDropdownClose={handleDropCloseB}
      onChange={handleArtistBChange} 
      values={[]}      />}
      {seeSelectC && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={{ border: "none", width: 200, marginRight: 10, marginBottom: 20 }}
      placeholder="Choose partner"
      options={selectCOptions}
      labelField="label" valueField="id"
      searchable={false}
      onDropdownClose={handleDropCloseC}
      onChange={handleArtistCChange} 
      values={[]}      />}
      {seeSelectD && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={{ border: "none", width: 200, marginRight: 10, marginBottom: 20 }}
      placeholder="Choose partner"
      options={selectDOptions}
      labelField="label" valueField="id"
      searchable={false}
      onDropdownClose={handleDropCloseD}
      onChange={handleArtistDChange} 
      values={[]}      />}
      {seeSelectE && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={{ border: "none", width: 200, marginRight: 10, marginBottom: 20 }}
      placeholder="Choose partner"
      options={selectEOptions}
      labelField="label" valueField="id"
      searchable={false}
      onDropdownClose={handleDropCloseE}
      onChange={handleArtistEChange} 
      values={[]}      />}
      {seeSelectF && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={{ border: "none", width: 200, marginRight: 10, marginBottom: 20 }}
      placeholder="Choose partner"
      options={selectFOptions}
      labelField="label" valueField="id"
      searchable={false}
      onDropdownClose={handleDropCloseF}
      onChange={handleArtistFChange} 
      values={[]}      />}
      {seeSelectG && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={{ border: "none", width: 200, marginRight: 10, marginBottom: 20 }}
      placeholder="Choose partner"
      options={selectGOptions}
      labelField="label" valueField="id"
      searchable={false}
      onDropdownClose={handleDropCloseG}
      onChange={handleArtistGChange} 
      values={[]}      />}
      </div>
      <div className="Drop-titles-second-row">
      {seeSelectH && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={{ border: "none", width: 200, marginRight: 10, marginBottom: 20 }}
      placeholder="Choose partner"
      options={selectHOptions}
      labelField="label" valueField="id"
      searchable={false}
      onDropdownClose={handleDropCloseH}
      onChange={handleArtistHChange} 
      values={[]}      />}
      {seeSelectI && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={{ border: "none", width: 200, marginRight: 10, marginBottom: 20 }}
      placeholder="Choose partner"
      options={selectIOptions}
      labelField="label" valueField="id"
      searchable={false}
      onDropdownClose={handleDropCloseI}
      onChange={handleArtistIChange} 
      values={[]}      />}
      {seeSelectJ && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={{ border: "none", width: 200, marginRight: 10, marginBottom: 20 }}
      placeholder="Choose partner"
      options={selectJOptions}
      labelField="label" valueField="id"
      searchable={false}
      onDropdownClose={handleDropCloseJ}
      onChange={handleArtistJChange} 
      values={[]}      />}
      {seeSelectK && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={{ border: "none", width: 200, marginRight: 10, marginBottom: 20 }}
      placeholder="Choose partner"
      options={selectKOptions}
      labelField="label" valueField="id"
      searchable={false}
      onDropdownClose={handleDropCloseK}
      onChange={handleArtistKChange} 
      values={[]}      />}
      {seeSelectL && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={{ border: "none", width: 200, marginRight: 10, marginBottom: 20 }}
      placeholder="Choose partner"
      options={selectLOptions}
      labelField="label" valueField="id"
      searchable={false}
      onDropdownClose={handleDropCloseL}
      onChange={handleArtistLChange} 
      values={[]}      />}
      {seeSelectM && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={{ border: "none", width: 200, marginRight: 10, marginBottom: 20 }}
      placeholder="Choose partner"
      options={selectMOptions}
      labelField="label" valueField="id"
      searchable={false}
      onDropdownClose={handleDropCloseM}
      onChange={handleArtistMChange} 
      values={[]}      />}
      {seeSelectN && <Select className="transition ease-in-out hover:shadow-xl duration-400 ..." style={{ border: "none", width: 200, marginRight: 10, marginBottom: 20 }}
      placeholder="Choose partner"
      options={selectNOptions}
      labelField="label" valueField="id"
      searchable={false}
      //onDropdownClose={handleDropCloseN}
      onChange={handleArtistNChange} 
      values={[]}      />}
      </div>
      <div className="playlist">
        {/* {playlist &&  */}
        <ul>
          {/* <li>{JSON.stringify(singleRecordA.artist_a)}</li> */}
        <li>
    { recordA.map((i) => {
    return <span key={i.title}>{i.artist_a +' & '+i.artist_b+' - '}</span>})}
    { recordA.map((i) => {
      return <span key={i.title} className="playlistSongs">{i.title+' '}</span>})}
    { recordA.map((i) => {
      return <span key={i.title} className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordACount)}</span>
  </li>
  <li>{ recordB.map((i) => {
    return <span>{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordB.map((i) => {
      return <span className="playlistSongs">{i.title+' '}</span>})}
    { recordB.map((i) => {
      return <span className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordBCount)}</span>
  </li>
  <li>{ recordC.map((i) => {
    return <span>{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordC.map((i) => {
      return <span className="playlistSongs">{i.title+' '}</span>})}
    { recordC.map((i) => {
      return <span className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordCCount)}</span>
  </li>
  <li>{ recordD.map((i) => {
    return <span>{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordD.map((i) => {
      return <span className="playlistSongs">{i.title+' '}</span>})}
    { recordD.map((i) => {
      return <span className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordDCount)}</span>
  </li>
  <li>{ recordE.map((i) => {
    return <span>{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordE.map((i) => {
      return <span className="playlistSongs">{i.title+' '}</span>})}
    { recordE.map((i) => {
      return <span className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordECount)}</span>
  </li>
  <li>{ recordF.map((i) => {
    return <span>{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordF.map((i) => {
      return <span className="playlistSongs">{i.title+' '}</span>})}
    { recordF.map((i) => {
      return <span className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordFCount)}</span>
  </li>
  <li className="playlist-plusSix">{ recordG.map((i) => {
    return <span>{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordG.map((i) => {
      return <span className="playlistSongs">{i.title+' '}</span>})}
    { recordG.map((i) => {
      return <span className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordGCount)}</span>
  </li>
  <li className="playlist-plusSix">
    { recordH.map((i) => {
    return <span>{i.artist_a +' & '+i.artist_b+' - '}</span>})}
    { recordH.map((i) => {
      return <span className="playlistSongs">{i.title+' '}</span>})}
    { recordH.map((i) => {
      return <span className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordHCount)}</span>
  </li>
  <li className="playlist-plusSix">{ recordI.map((i) => {
    return <span>{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordI.map((i) => {
      return <span className="playlistSongs">{i.title+' '}</span>})}
    { recordI.map((i) => {
      return <span className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordICount)}</span>
  </li>
  <li className="playlist-plusSix">{ recordJ.map((i) => {
    return <span>{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordJ.map((i) => {
      return <span className="playlistSongs">{i.title+' '}</span>})}
    { recordJ.map((i) => {
      return <span className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordJCount)}</span>
  </li>
  <li className="playlist-plusSix">{ recordK.map((i) => {
    return <span>{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordK.map((i) => {
      return <span className="playlistSongs">{i.title+' '}</span>})}
    { recordK.map((i) => {
      return <span className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordKCount)}</span>
  </li>
  <li className="playlist-plusSix">{ recordL.map((i) => {
    return <span>{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordL.map((i) => {
      return <span className="playlistSongs">{i.title+' '}</span>})}
    { recordL.map((i) => {
      return <span className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordLCount)}</span>
  </li>
  <li className="playlist-plusSix">{ recordM.map((i) => {
    return <span>{i.artist_a+' & '+i.artist_b+' - '}</span>})}
    { recordM.map((i) => {
      return <span className="playlistSongs">{i.title+' '}</span>})}
    { recordM.map((i) => {
      return <span className="year">({i.year})</span>
  }) }<span className="entryCount">{entryCount(recordMCount)}</span>
  </li>
      </ul>
      </div>
    </div>
  );
};



  