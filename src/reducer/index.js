
const initialState = {
    allVideogames: [],
    videogames: [],
    genres: [],
    detail: [],
}



function rootReducer(state = initialState, action) { 
    switch(action.type){
        case "GET_VIDEOGAMES":
            return{
                ...state,
                allVideogames: action.payload,
                videogames: action.payload,
            }
        
        case "GET_MORE_VIDEOGAMES":
            return{
                ...state,
                allVideogames: state.allVideogames.concat(action.payload)
            }
        case "GET_VIDEOGAMES_BY_NAME":
            return{
                ...state,
                allVideogames: action.payload
            }
        
        case "GET_GENRES":
            return{
                ...state,
                genres: action.payload
            }

        case "GET_DETAIL":
            return{
                ...state,
                detail: action.payload
            }
        
        case "CLEAN_DETAIL":
            return{
                ...state,
                detail: []
            }
        
        case "FILTER_BY_GENRE":
            const fullVideogames = state.videogames;
            let resultApi = fullVideogames.filter(v => v.genres && v.genres.includes(action.payload))
            let resultDb = fullVideogames.filter(v => v.genres && v.genres.map(g => g.name).includes(action.payload))
            let result = resultApi.concat(resultDb)
            
            return{
                ...state,
                allVideogames: result
            }
        
        case "FILTER_BY_ORIGIN":
            const totalVideogames = state.videogames
            const originFilter = action.payload === 'created' ? 
                 totalVideogames.filter(el => el.createdInDb) :
                 totalVideogames.filter(el => !el.createdInDb)
                 console.log('ORIGIN FILTER: ', originFilter);
                 console.log('TOTAL VIDEOGAMES: ', totalVideogames);
            return{
                ...state,
                allVideogames: action.payload === 'all' ? state.videogames : originFilter        
            }

            case "ORDER_BY_NAME":
                let sortedArr = action.payload === 'asc' ?
                    state.allVideogames.sort(function(a, b){
                        if(a.name.toLowerCase() > b.name.toLowerCase()) {
                            return 1;
                        }
                        if(b.name.toLowerCase() > a.name.toLowerCase()) {
                            return -1;
                        }
                        return 0;
                    }) :
                    state.allVideogames.sort(function(a, b){
                        if(a.name.toLowerCase() > b.name.toLowerCase()) {
                            return -1;
                        }
                        if(b.name.toLowerCase() > a.name.toLowerCase()) {
                            return 1;
                        }
                        return 0;
                    })
                    return {
                        ...state,
                        allVideogames: sortedArr
                    }
                
                case "ORDER_BY_RATING":
                    let sortedRating = action.payload === 'max' ?
                        state.allVideogames.sort(function(a, b){
                            if(a.rating < b.rating) {
                                return 1;
                            }
                            if(b.rating < a.rating) {
                                return -1;
                            }
                            return 0;
                        }) :
                        state.allVideogames.sort(function(a, b){
                            if(a.rating < b.rating) {
                                return -1;
                            }
                            if(b.rating < a.rating) {
                                return 1;
                            }
                            return 0;
                        })
                        return {
                            ...state,
                            allVideogames: sortedRating
                        }
            





            default:
                return state;
    }
}

export default rootReducer;