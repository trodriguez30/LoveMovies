import {ActionInterface, StateInterface} from '../../types/types';
import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
} from './actions';

const initialState = {
  fetchingMovies: false,
  movies: [],
  error: null,
  moviesFetched: false,
  moviesFetchFailed: false,
};

export default function reducer(
  state: StateInterface = initialState,
  action: ActionInterface,
) {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return {
        ...state,
        fetchingMovies: true,
        movies: [],
        error: null,
        moviesFetched: false,
        moviesFetchFailed: false,
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        fetchingMovies: false,
        movies: action.payload,
        error: null,
        moviesFetched: true,
        moviesFetchFailed: false,
      };
    case GET_MOVIES_ERROR:
      return {
        ...state,
        fetchingMovies: false,
        movies: [],
        error: action.payload.error,
        moviesFetched: false,
        moviesFetchFailed: true,
      };
    default:
      return state;
  }
}
