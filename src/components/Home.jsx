import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, getMoreVideogames} from '../actions';
import InfiniteScroll from 'react-infinite-scroll-component';
import './Home.css'
//import { Link } from 'react-router-dom';
import Card from './Card';
import Pagination from './Pagination';

export default function Home(){
    const dispatch = useDispatch();
    const allVideogames = useSelector((state) => state.allVideogames);
    //PAGINATION
    const [currentPage, setCurrentPage] = useState(1);
    const [videogamesPerPage, setVideogamesPerPage] = useState(6);
    const indexOfLastVideogame = currentPage * videogamesPerPage;
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
    const currentVideogames = allVideogames.slice(indexOfFirstVideogame, indexOfLastVideogame);
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    
    useEffect(() => {
        dispatch(getVideogames());
    }, []);

    function handleReset(e){
        e.preventDefault();
        dispatch(getVideogames());
        setCurrentPage(1)
    }

    function handleNext(e){
        e.preventDefault();
        setCurrentPage(currentPage + 1)
    }

    function handlePrev(e){
        e.preventDefault();
        setCurrentPage(currentPage - 1)
    }
    
    function handleMore(e){
        //e.preventDefault();
        dispatch(getMoreVideogames());
    }
    
    
    return (
        <div className='home-container'>
            <h1>HOME</h1>
            <button onClick={e =>{ handleReset(e)}}>RESET</button>
            
            <div className='home-cards'>
            {   
                currentVideogames.length > 0 ?
                currentVideogames.map(el =>{
                    return(
                    
                    <Card
                        key={el.id}
                        name={el.name}
                        genres={el.createdInDb?el.genres.map(g => g.name + " ") : el.genres.map(g => g + " ")}
                        image={el.image}
                    />
                    ) 
                })          
                : <button className='button-more' onClick={ e => {handleMore(e)}}><h1>MORE</h1></button>
                

            }
            </div>
            <div className='home-page-numbers'>
                <button onClick={ e => {handlePrev(e)}}>Prev</button>
                <Pagination
                    videogamesPerPage={videogamesPerPage}
                    allVideogames={allVideogames.length}
                    pagination={pagination}
                    />
                <button onClick={ e => {handleNext(e)}}>Next</button>
            </div>
            
            
        </div>
    )
}