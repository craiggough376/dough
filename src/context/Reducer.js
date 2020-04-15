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
    default:
      return state;
  }
}
