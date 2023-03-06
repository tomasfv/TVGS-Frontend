import axios from 'axios';


export function getVideogames(){
    return async function (dispatch){
        var json = await axios.get('/videogames', {});
        return dispatch({
            type: 'GET_VIDEOGAMES',
            payload: json.data
        })
    }
}

export function getMoreVideogames(){
    return async function(dispatch){
        var json = await axios.get('/morevideogames', {});
        return dispatch({
            type: 'GET_MORE_VIDEOGAMES',
            payload: json.data
        })
    }
}

export function getVideogamesByName(name){
    return async function(dispatch){
        try{
        var json = await axios.get('/search?name='+ name, {});
        return dispatch({
            type: "GET_VIDEOGAMES_BY_NAME",
            payload: json.data
        })
    } catch(error) {
        console.log(error);
        alert(`Video Game ${name} Not Found`)
    }
    }
}

export function filterByGenre(name){
    return async function(dispatch){
        
            var json = await axios.get('/genrefilter?name=' + name, {});
            return dispatch({
                type: "FILTER_BY_GENRE",
                payload: json.data
            })
        
    }
}
// export function getVideogamesByName(name){
//     return async function(dispatch){
//         try{
//         var json = await axios.get(`/search?name=${name}`, {});
//         return dispatch({
//             type: "GET_VIDEOGAMES_BY_NAME",
//             payload: json.data
//         })
//     } catch(error) {
//         console.log(error);
//         alert(`Video Game ${name} Not Found`)
//     }
//     }
// }

export function getGenres(){
    return async function(dispatch){
        var json = await axios.get('/genres', {});
        return dispatch({
            type: "GET_GENRES",
            payload: json.data
        })
    }
}

export function getDetail(id){
    return async function(dispatch){
        try{
            var json = await axios.get('/videogames/' + id);
            return dispatch({ 
                type: "GET_DETAIL", 
                payload: json.data 
            })
        }catch(error){
            console.log(error)
        }
    }
}

export function postUser(payload){
    return async function(dispatch){
        const response = await axios.post("/user", payload);
        return response;
    }
}

export function cleanDetail(){
    return {
        type: "CLEAN_DETAIL"
    }
}

// export function filterByGenre(payload){
    
//     return{
//         type: "FILTER_BY_GENRE",
//         payload,
//     }
// }


export function filterByOrigin(payload){
    return {
        type: "FILTER_BY_ORIGIN",
        payload
    }
}

export function orderByName(payload){
    return { 
        type: "ORDER_BY_NAME",
        payload
    }
}

export function orderByRating(payload){
    return {
        type: "ORDER_BY_RATING",
        payload
    }
}

