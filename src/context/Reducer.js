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
    case "SET_ENEMY_HEALTH":
      return {
        ...state,
        enemy: {
          ...state.enemy,
          health: action.data,
        },
      };
    case "SET_EXPERIENCE":
      return {
        ...state,
        player: {
          ...state.player,
          experiencePoints: action.data,
        },
      };
    case "SET_POTION":
      return {
        ...state,
        player: {
          ...state.player,
          potion: action.data,
        },
      };
    default:
      return state;
  }
}
