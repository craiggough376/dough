import React, { useReducer } from 'react'
import Reducer from './Reducer'

export const Context = React.createContext()
const defaultState = {
    player: {}
}

export function createProvider(){
    return function Provider({children}){
        const [state, dispatch] = useReducer(Reducer, defaultState)
        return (
            <Context.Provider value={{state, dispatch}}>
                {children}
            </Context.Provider>
        )
    }

}