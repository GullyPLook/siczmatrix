'use client'
import { use, useEffect, useRef } from "react";
import { Network } from "vis-network";

export default function NetworkGraph(props: any) {

	const selected = props.selections.filter((selection: { isSelected: boolean; }) => selection.isSelected);
	
	const resolvedAA = selected.map((selection: { artistA: { matches: [Promise<{}>, Promise<{}>]; }; }) => {
		return (
			use(selection.artistA.matches[0])
		)
	});

	const resolvedAB = selected.map((selection: { artistA: { matches: [Promise<{}>, Promise<{}>]; }; }) => {
		return (
			use(selection.artistA.matches[1])
		)
	});

	const resolvedBA = selected.map((selection: { artistB: { matches: [Promise<{}>, Promise<{}>]; }; }) => {
		return (
			use(selection.artistB.matches[0])
		)
	});

	const resolvedBB = selected.map((selection: { artistB: { matches: [Promise<{}>, Promise<{}>]; }; }) => {
		return (
			use(selection.artistB.matches[1])
		)
	});

	const preresolvedMatches = resolvedAA.concat(resolvedAB, resolvedBA, resolvedBB).flat(1);
	
	const key = "id"

	const resolvedMatches = [...new Map(preresolvedMatches.map((item: { [x: string]: any; }) => [item[key], item])).values()];
    
    const nodePairs = resolvedMatches.map((match: any) => {
       return (
				[
					{ id: match.artist_a_id, label: match.artist_a },
					{ id: match.artist_b_id, label: match.artist_b }
				]
			)
	}).flat(2);	 

	
	const nodes = [...new Map(nodePairs.map((item: { [x: string]: any; }) => [item[key], item])).values()];

	const edges = resolvedMatches.map((match: any) => {
		return (
			{from: match.artist_a_id, to: match.artist_b_id }
		)
	});

	const options = {
		autoResize: true,
        height: '600px',
        width: '100%',
		 nodes:{
			shape: 'dot',
			size: 6,
            color: 'rgb(236, 151, 23)',
            fixed: false,
            font:{
				size: 16,
				face: 'inter',
				color: 'rgb(39, 179, 58)'
			},
            scaling: {
              label: true
            },
		
         shadow: true
         }, 
	     edges:{
			color: '#9f38d6'
		 }

	};

	const visJsRef = useRef<HTMLDivElement>(null);
    
	useEffect(() => {
		const network =
			visJsRef.current &&
			new Network(visJsRef.current, { nodes, edges }, options);
		
	}, [visJsRef, nodes, edges]);

	return <div ref={visJsRef} />;
};