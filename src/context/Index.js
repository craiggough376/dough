import React, { useReducer, useContext } from "react";
import Reducer from "./Reducer";

export const Context = React.createContext();
const defaultState = {
  player: {
    health: 100,
  },
};

export function createProvider() {
  return function Provider({ children }) {
    const [state, dispatch] = useReducer(Reducer, defaultState);
    return (
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    );
  };
}

export function useStore() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useStore must be used within context provider");
  }
  return context;
}

export function useDispatch() {
  const { dispatch } = useStore();
  return dispatch;
}

export function useSelector(fn) {
  const { state } = useStore();
  return fn(state);
}
