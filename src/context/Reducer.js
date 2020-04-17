export default function Reducer(state, action) {
  switch (action.type) {
    case "SET_PLAYER":
      return {
        ...state,
        player: {
          ...state.player,
          name: action.data.name,
          weapon: action.data.weapon,
        },
      };
    case "SET_HEALTH":
      return {
        ...state,
        player: {
          ...state.player,
          health: action.data,
        },
      };
    case "SET_ENEMY":
      return {
        ...state,
        enemy: action.data,
      };
    default:
      return state;
  }
}
