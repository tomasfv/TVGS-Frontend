import React from 'react';
import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { getVideogamesByName} from '../actions';
import './SearchBar.css'

export default function SearchBar({setCurrentPage}){
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);

    }

    function handleSubmit(e){
        e.preventDefault();
        if(!name){
            return('no se encontró')
        }
        dispatch(getVideogamesByName(name));
        setTimeout(() => {
            setCurrentPage(1);
            
        }, 2500);
        
        
    }

    return (
        <div className="search-container">
            <input className='search-input' type = 'text' placeholder = 'search...' onChange={(e) => handleInputChange(e)}/>
            <button type = 'submit' className='search-button' onClick={(e) => { handleSubmit(e)}}>GO</button>
        </div>
    )
}