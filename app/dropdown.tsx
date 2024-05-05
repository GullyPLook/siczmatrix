'use client'
import React from "react";
import Select from "react-dropdown-select";

export default function Dropdown(props: { dropState: any[]; handleOpen: (arg0: any) => void; handleChange: (arg0: never[], arg1: any) => void; }) {
   
    const dropdowns = props.dropState.map(drop => 
        drop.isShown && (
        <Select className="transition ease-in-out hover:shadow-xl duration-400 ..."
        style={ drop.isBold ? { border: "none",  width: 200} : {opacity: 0.5, color: "#D1206A", border: "none",  width: 200}}
        key={drop.id} 
        id={drop.id}
        placeholder="Select..."
        options={drop.options}
        labelField="label" valueField="id"
        onDropdownOpen={() => props.handleOpen(drop.id)}
        onChange={(event) => props.handleChange(event, drop.id)}
        values={[]}
        />
      ));
    
    return (
        <>
        {dropdowns}
        </>
        
    )
}