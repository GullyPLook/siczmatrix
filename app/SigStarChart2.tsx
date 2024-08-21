import { FC, useEffect } from "react";
import Graph from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import { useWorkerLayoutForceAtlas2 } from "@react-sigma/layout-forceatlas2";
import "@react-sigma/core/lib/react-sigma.min.css";
import { Settings } from "sigma/settings";


const sigmaStyle = { background: "none", height: "100%", width: "100%" };
const sigmaSettings: Partial<Settings> = {
    // defaultDrawNodeLabel: drawLabel,
    // defaultDrawNodeHover: drawHover,
    defaultNodeType: "circle",
    // defaultEdgeType: "arrow",
    // labelDensity: 0.07,
    // labelGridCellSize: 60,
    labelRenderedSizeThreshold: 3,
    // labelFont: "Lato, sans-serif",
    labelColor: { attribute: "null" , color: "#27b33a"},
    labelSize: 14,
    labelWeight: "bold",
    allowInvalidContainer: true
    // zIndex: true,
  };
  
// Component that load the graph
export const LoadGraph = (props: any) => {
  
  const loadGraph = useLoadGraph();

  useEffect(() => {
    const graph = new Graph();
    props.starChartData.nodes.forEach((node: { id: any; label: any; }) => {
      const n = ({
        ...node,
        size: 6,
        color: "gold",
        x: Math.random(),
        y: Math.random(),
        id: node.id,
        label: node.label 
      });
      // console.log('n', n)
      graph.addNode(n.id, n);
    });

    props.starChartData.edges.forEach((edge: { attributes: { type: any; }; source: unknown; target: unknown; }) => {
      const props = {
        label: edge.attributes?.type,
        size: 2,
        color: "#9f38d6"
      };
      // console.log('edge', edge)
      graph.addEdge(edge.source, edge.target, props);
    });
   
    loadGraph(graph);
    
    }, [loadGraph, props.starChartData]);

  return null;
};

const Fa2: FC = () => {
  const { start, kill } = useWorkerLayoutForceAtlas2({ settings: { slowDown: 10 } });

  useEffect(() => {
    // start FA2
    start();

    // Kill FA2 on unmount
    return () => {
      kill();
    };
  }, [start, kill]);

  return null;
};
// Component that display the graph
export const DisplayGraph = (props: any) => {
  return (
    <SigmaContainer style={sigmaStyle} settings={sigmaSettings}>
      <LoadGraph starChartData={props.starChartData}/>
      <Fa2 />
    </SigmaContainer>
  );
};