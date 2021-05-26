export interface MovieInterface {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface ActionInterface {
  type: string;
  payload?: any;
}

export interface StateInterface {
  fetchingMovies: boolean;
  movies: MovieInterface[];
  error: null | string;
  moviesFetched: boolean;
  moviesFetchFailed: boolean;
}

export interface LoaderInterface {
  color: string;
  label: string;
}

export interface EmptyStateProps {
  message: string;
  style?: object;
  icon: any;
  onPress?: () => void;
  buttonLabel?: string;
}

export interface MovieListProps {
  data: Array<MovieInterface>;
  error?: string;
  onRefresh?: () => void;
  refreshing?: boolean;
}

export interface MovieDetailInterface {
  icon: any;
  label: string;
  detail: string;
}

export interface HeaderProps {
  title: string;
  icon: any;
}
