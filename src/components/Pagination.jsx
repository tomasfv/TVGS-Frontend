import React from "react";
import './Pagination.css'

export default function Pagination({videogamesPerPage, allVideogames, pagination}){
    const pageNumbers = [];

    for( let i = 0; i <= Math.ceil(allVideogames/videogamesPerPage) -1; i++){
        pageNumbers.push(i+1)
    }

    return (
        <nav>
            <ul className="pagination" key='pag'> 
                { pageNumbers &&              
                    pageNumbers.map(n => (
                
                        <button className="number" key={n} onClick={() => pagination(n)}>{n}</button>
                    
                ))}

            </ul>
        </nav>
    )
}