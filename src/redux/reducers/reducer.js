import { ADD_MOVIES } from "../actions/actions-type";

const initialState = {
  listMovies: [],
  movies: [],
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIES:
        return { ...state, movies : action.movies }

    default:
      return state;
  }
};

export default reducer;