const initState = {
  playerDeets: {
    src: '',
    title: '',
    artist: '',
    deetsList: [],
    playing: false,
    index: 0,
    x: 0
  }
}

const rootReducer = (state = initState, action) => {
  if (action.type == "REPLACE_PLAYLIST") {
    const { playerDeets, ...newState } = state; //Remove previous playerDeets immutably
      return Object.assign({}, newState, {playerDeets: action.payload}) //Adds new playlistDeets from action payload
    }

    return state;
  }

export default rootReducer;
