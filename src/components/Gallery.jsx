import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, getMoreVideogames, filterByOrigin, orderByName, orderByRating, getGenres, filterByGenre} from '../actions';
//import InfiniteScroll from 'react-infinite-scroll-component';
import './Gallery.css'
import { Link } from 'react-router-dom';
import Card from './Card';
import Pagination from './Pagination';
import SearchBar from './SearchBar';


export default function Gallery(){
    const dispatch = useDispatch();
    const allVideogames = useSelector((state) => state.allVideogames);
    const genres = useSelector((state) => state.genres);
    //PAGINATION
    const [currentPage, setCurrentPage] = useState(1);
    const [videogamesPerPage, /*setVideogamesPerPage*/] = useState(9);
    const [/*orden*/, setOrden] = useState("");
    const indexOfLastVideogame = currentPage * videogamesPerPage;
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
    const currentVideogames = allVideogames.slice(indexOfFirstVideogame, indexOfLastVideogame);
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    
    useEffect(() => {
        dispatch(getVideogames());
        dispatch(getGenres());
    }, [dispatch]);

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
        e.preventDefault();
        dispatch(getMoreVideogames());
    }

    function handleOriginFilter(e){
        dispatch(filterByOrigin(e.target.value));
        setCurrentPage(1);                          
    }

    function handleGenreFilter(e){
        dispatch(filterByGenre(e.target.value));
        setCurrentPage(1)
    }

    function handleSortName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));  
        setCurrentPage(1);                      
        setOrden(`Ordenado ${e.target.value}`)
    }

    function handleSortRating(e){
        e.preventDefault();
        dispatch(orderByRating(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    return (
        <div className='gallery-container'>
            
        <div className='gallery-middle'>
            <div>     
                {/* Order */}
                <h2>SORT</h2>
                <h4>Title: 
                <select className='filter' onChange={e => handleSortName(e)}>
                    <option value='default'> - </option>
                    <option value='asc'>A → Z</option>
                    <option value='desc'>Z → A</option>
                </select>
                </h4>
                <h4>Rating: 
                <select className='filter' onChange={ e => handleSortRating(e)}>
                    <option value='default'> - </option>
                    <option value='max'>+ RATING</option>
                    <option value='min'>- RATING</option>
                </select>
                </h4>
                {/* Filters */}
                <h2>FILTER</h2>
                <h4>Origin: 
                <select className='filter' onChange={e => handleOriginFilter(e)}>
                    <option value='default'> - </option>
                    <option value='all'>ALL</option>
                    <option value='created'>TVGS</option>
                    <option value='api'>RAWG</option> 
                </select>
                </h4>
                <h4>Genre: 
                <select className='filter' onChange={e => handleGenreFilter(e)}>
                    <option value='default'> - </option>
                    {genres.map(el => (
                        <option value={el.name} key={el.name}>{el.name.toUpperCase()}</option>
                    ))}

                </select>
                </h4>
                <SearchBar
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <button onClick={e =>{ handleReset(e)}}>Reset Filters</button>
            </div>
            <div>
            <div className='gallery-cards'>
            {   
                currentVideogames.length > 0 ?
                currentVideogames.map(el =>{
                    return(
                    <Link to={"/videogames/" + el.id} key={el.id} className='home-link'>
                    
                    <Card
                        key={el.id}
                        name={el.name}
                        genres={el.createdInDb?el.genres.map(g => g.name + " ") : el.genres.map(g => g + " ")}
                        image={el.image}
                    />
                    </Link>
                    ) 
                })          
                : <button className='button-more' onClick={ e => {handleMore(e)}}><h1>MORE</h1></button>
                

            }
            </div>
            <div className='gallery-page-numbers'>
                <button onClick={ e => {handlePrev(e)}}>Prev</button>
                <Pagination
                    videogamesPerPage={videogamesPerPage}
                    currentPage={currentPage}
                    allVideogames={allVideogames.length}
                    pagination={pagination}
                    />
                <button onClick={ e => {handleNext(e)}}>Next</button>
            </div>
            </div>
        </div>
            
        </div>
    )
}