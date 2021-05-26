import React from 'react';

import {FlatList, RefreshControl, StyleSheet} from 'react-native';
import MovieItem from './MovieItem';
import {Colors, Metrics} from '../../settings/theme';
import {MovieInterface, MovieListProps} from '../../types/types';
export const MovieList = (props: MovieListProps) => {
  const refreshAction = 'onRefresh' in props ? props.onRefresh : () => null;

  const renderItem = ({item}: {item: MovieInterface}) => (
    <MovieItem item={item} />
  );

  return (
    <FlatList
      contentContainerStyle={styles.flatlist}
      disableVirtualization={false}
      refreshControl={
        <RefreshControl
          refreshing={props.refreshing}
          onRefresh={refreshAction}
        />
      }
      showsVerticalScrollIndicator={false}
      data={props.data}
      renderItem={renderItem}
      keyExtractor={(item: MovieInterface) => item.imdbID}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  searchInput: {
    marginVertical: Metrics.Margin,
  },
  emptyState: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.Background,
    width: Metrics.ScreenWidth,
    paddingHorizontal: Metrics.Padding * 2,
  },
  flatlist: {flexGrow: 1, paddingBottom: 50, paddingTop: Metrics.Padding * 2},
});
export default MovieList;
