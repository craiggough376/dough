import React, { useReducer, useContext } from "react";
import Reducer from "./Reducer";

export const Context = React.createContext();
const defaultState = {
  player: {
    name: "Craig",
    health: 100,
    originalHealth: 100,
    weapon: {
      name: "Hand Sanitiser",
      damage: 10,
      weight: 2,
    },
    experiencePoints: 1,
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
