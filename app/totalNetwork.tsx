'use client'
import { use, useEffect, useRef } from "react";
import { Network } from "vis-network";

export default function TotalNetworkGraph(props: any) {

    const resolvedVersions = use(props.versionPromise)


    const artistA = resolvedVersions.map((node: any) => {
        return (
            { id: node.artist_a_id, label: node.artist_a }
        )
    })

    const artistB = resolvedVersions.map((node: any) => {
        return (
            { id: node.artist_b_id, label: node.artist_b }
        )
    })
    
    const artists = artistA.concat(artistB)

    const uniqueArtists = Array.from(new Set(artists.map(a => a.id)))
    .map(id => {
      return artists.find(a => a.id === id)
    })

    const key = "id"
  
    const nodes = [...new Map(uniqueArtists.map((item: { [x: string]: any; }) => [item[key], item])).values()];

    const edges = resolvedVersions.map((match: any) => {
        return (
            {from: match.artist_a_id, to: match.artist_b_id }
        )
    });


     console.log(edges)

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