import {Dispatch} from 'redux';
import {sendMoviesRequest} from './services';

// Define action types
export const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_ERROR = 'GET_MOVIES_ERROR';

//Define actions
export const getMovies = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getMoviesRequest());
    try {
      const {data} = await sendMoviesRequest();
      if ('Search' in data) {
        dispatch(getMoviesSuccess(data.Search));
      } else {
        throw new Error();
      }
    } catch (error) {
      dispatch(getMoviesError('Error al obtener listado. Intente nuevamente'));
    }
  };
};

const getMoviesSuccess = (payload: any) => ({
  type: GET_MOVIES_SUCCESS,
  payload,
});

const getMoviesRequest = () => ({
  type: GET_MOVIES_REQUEST,
});

const getMoviesError = (error: string) => ({
  type: GET_MOVIES_ERROR,
  payload: {
    error,
  },
});
