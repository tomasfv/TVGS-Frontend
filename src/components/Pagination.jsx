import React from "react";
import './Pagination.css'

export default function Pagination({videogamesPerPage, allVideogames, currentPage}){
    const pageNumbers = [];

    for( let i = 0; i <= Math.ceil(allVideogames/videogamesPerPage) -1; i++){
        pageNumbers.push(i+1)
    }


    
    return (
        <nav>
            
            <button>{currentPage} of {pageNumbers.length}</button>
        </nav>
    )
}