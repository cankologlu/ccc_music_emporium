import { useState } from "react";
import React from "react";
import useAllProducts from "../hooks/useAllProducts";
import { ProductContext } from "../contexts/ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@fortawesome/fontawesome-svg-core";

export default function SearchBar ({placeholder, products}) {
  
  console.log(products.products)
  

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder}/>
          <div className="searchIcon">
            <FontAwesomeIcon icon={faSearch}/>
          </div>
      </div>
      <div className="dataResults">
        {products.products.map((value, key) => {
          return <a className = "dataItem">{value.model}</a>
        })}
      </div>

    </div>
    
  )
}