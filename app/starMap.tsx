'use client'
import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

export default function StarMap({nodes, links}) {

    const chartRef = useRef();
    const [width, setWidth] = useState(1400);
    const [height, setHeight] = useState(900);

    interface FDGNode extends d3.SimulationNodeDatum {
      id: number;
      label: string
    };
    
    interface FDGLink extends d3.SimulationLinkDatum<FDGNode> {
      source: number;
      target: number;
      year: number
    };
    
    const svg = d3.select(chartRef.current)
        .attr("viewBox", [0, 0, width, height]);

  useEffect(() => {
    
    svg.selectAll("*").remove();

    const simulation = d3.forceSimulation<FDGNode, FDGLink>(nodes)
        .force("link", d3.forceLink<FDGNode, FDGLink>(links).id(d => d.id))
        .force("collide", d3.forceCollide().radius(15))
        .force("charge", d3.forceManyBody().strength(-500))
        .force("center", d3.forceCenter(width / 2, height / 2).strength(0.5));

    
    const link = svg.append("g")
        .attr("stroke", "purple")
        .attr("stroke-opacity", 0.6)
        .selectAll<SVGLineElement, FDGLink>("line")
        .data(links)
        .join("line")
        .attr("stroke-width", 1)
  

  const node = svg.append("g")
        .selectAll<SVGCircleElement, FDGNode>("circle")
        .data(nodes)
        .join("circle")
        .attr("r", 5)
        .attr("fill", "orange")
    
  const textElems = svg.append("g")
        .selectAll<SVGTextElement, FDGNode>('text')
        .data(nodes)
        .join('text')
        .text(d => d.label)
        .attr('x', 8)
        .attr('y', 1)
        .style('fill', "green")
        .style('font-size', '10px')
        .style('font-weight', 'bold') 
    

    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);
    
        node
            .attr("transform", d => `translate(${d.x}, ${d.y})`);
            
        textElems
            .attr("transform", d => `translate(${d.x}, ${d.y})`);
   
    node.call(d3.drag<SVGCircleElement, FDGNode>()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));


    node.on("mouseover", function(event, d) {

              const connectedNodeIds = 
              links
                .filter(x => x.source.id == d.id || x.target.id == d.id)
                .map(x => x.source.id == d.id ? x.target.id : x.source.id);
            
              node.style("opacity", function(c) {
                  if (connectedNodeIds.indexOf(c.id) > -1 || c.id == d.id) return 1;
                  else return 0.2;
                  
              });

              textElems.style("opacity", function(c) {
                  if (connectedNodeIds.indexOf(c.id) > -1 || c.id == d.id) return 1;
                  else return 0.2;
                  
              }); 

              link.style("stroke-opacity", function(o) {
                  return o.source.id === d.id || o.target.id === d.id ? 1 : 0.2;
                  
              });

                
    });
            
            
    node.on("mouseout", function(event, d) {
              node.style("opacity", function(c) { return 1; });
              textElems.style("opacity", function(c) { return 1; });
              link.style("stroke-opacity", function(o) { return 0.6; });
    });

    function dragstarted(event: { active: any; subject: { fx: any; x: any; fy: any; y: any; }; }) {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                event.subject.fx = event.subject.x;
                event.subject.fy = event.subject.y;
    }
            
              // Update the subject (dragged node) position during drag.
    function dragged(event: { subject: { fx: any; fy: any; }; x: any; y: any; }) {
                event.subject.fx = event.x;
                event.subject.fy = event.y;
    }
            
              // Restore the target alpha so the simulation cools after dragging ends.
              // Unfix the subject position now that it’s no longer being dragged.
    function dragended(event: { active: any; subject: { fx: null; fy: null; }; }) {
                if (!event.active) simulation.alphaTarget(0);
                event.subject.fx = null;
                event.subject.fy = null;
    } 

    });
  }, [nodes]);
  
    return (
        <svg
          ref={chartRef}
          height="100%" width="100%" viewBox="0 0 100 100"
        />
      )
};
