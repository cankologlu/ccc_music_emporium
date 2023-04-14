import { useState } from "react";
import React from "react";
import useAllProducts from "../hooks/useAllProducts";
import { ProductContext } from "../contexts/ProductContext";

export default function SearchBar ({placeholder, products}) {


  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text"/>
        <div className="searchIcon"></div>
      </div>
      <div className="dataResults"></div>

    </div>
    
  )
}