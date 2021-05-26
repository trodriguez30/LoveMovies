import MoviesReducer from './movies/reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

const moviesPersistConfig = {
  key: 'movies',
  storage: AsyncStorage,
  whitelist: ['movies'],
};

const createRootReducer = combineReducers({
  movies: persistReducer(moviesPersistConfig, MoviesReducer),
});

export default createRootReducer;
