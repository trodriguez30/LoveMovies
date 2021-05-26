import React, {useEffect, useState} from 'react';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {getMovies} from '../redux/movies/actions';
import Loader from '../components/Loader';
import {Colors} from '../settings/theme';
import EmptyState from '../components/EmptyState/Index';
import {MovieList} from '../components/Movie/MovieList';

export const Movies = () => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const {
    fetchingMovies,
    movies,
    error,
    moviesFetchFailed,
    moviesFetched,
  } = useSelector((state: RootStateOrAny) => state.movies);

  useEffect(() => {
    getMoviesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (fetchingMovies) {
      setRefreshing(true);
    }
    if (moviesFetchFailed || moviesFetched) {
      setRefreshing(false);
    }
  }, [moviesFetchFailed, fetchingMovies, moviesFetched]);

  function getMoviesList() {
    dispatch(getMovies());
  }

  //Loader while waiting for the result to the api
  if (fetchingMovies) {
    return <Loader color={Colors.Primary} label="Cargando películas..." />;
  }

  //Handle error response from API
  if (moviesFetchFailed) {
    return (
      <EmptyState
        message={error}
        icon={require('../assets/icons/warning.png')}
        onPress={getMoviesList}
      />
    );
  }

  //Handle screen when the endpoint returns an empty array
  if (moviesFetched && movies.length === 0) {
    return (
      <EmptyState
        message="No se encontró información para mostrar"
        icon={require('../assets/icons/empty.png')}
        onPress={getMoviesList}
        buttonLabel="Recargar"
      />
    );
  }

  //Show movie items when API response is successful
  return (
    <MovieList
      data={movies}
      error={error}
      onRefresh={getMoviesList}
      refreshing={refreshing}
    />
  );
};

export default Movies;
