import axios from 'axios';


export function getVideogames(){
    return async function (dispatch){
        var json = await axios.get('http://localhost:3001/videogames', {});
        return dispatch({
            type: 'GET_VIDEOGAMES',
            payload: json.data
        })
    }
}

export function getMoreVideogames(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/morevideogames', {});
        return dispatch({
            type: 'GET_MORE_VIDEOGAMES',
            payload: json.data
        })
    }
}