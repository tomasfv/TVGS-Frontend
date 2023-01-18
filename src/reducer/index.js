
const initialState = {
    allVideogames: [],
}



function rootReducer(state = initialState, action) { 
    switch(action.type){
        case "GET_VIDEOGAMES":
            return{
                ...state,
                allVideogames: action.payload
            }
        case "GET_MORE_VIDEOGAMES":
            return{
                ...state,
                allVideogames: state.allVideogames.concat(action.payload)
            }
            default:
                return state;
    }
}

export default rootReducer;