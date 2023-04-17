import { useState } from "react";
import React from "react";
import useAllProducts from "../hooks/useAllProducts";
import { ProductContext } from "../contexts/ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@fortawesome/fontawesome-svg-core";

export default function SearchBar ({placeholder, products}) {
  
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
   const searchWord = e.target.value
   const newFilter = products.products.filter((value) => {
    return value.model.toLowerCase().includes(searchWord.toLowerCase());
   });
   if(searchWord === "")
   {
    setFilteredData([]);
   }else {
     
     setFilteredData(newFilter);
   }
  }

  return (
    <div className="search">
      <div className="searchInputs  mt-40">
        <input type="text" placeholder={placeholder} onChange={handleFilter}/>
          <div className="searchIcon">
            <FontAwesomeIcon icon={faSearch}/>
          </div>
      </div>
      { filteredData.length !== 0 && (
      <div className="dataResults overflow-y-auto h-32 bg-white" >
        {filteredData.slice(0,5).map((value, key) => {
          return <a className = "dataItem">
            <p>{value.model}</p>
            </a>
        })}
      </div>
      )} 
    </div>
    
  )
}