export default function Reducer(state, action){
    switch(action.type){
        case "SET_NAME":
            return {...state, player: {...state.player, name: action.data}}
            default:
                return state
    }
   
}