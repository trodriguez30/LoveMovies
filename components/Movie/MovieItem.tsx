import * as React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {Shadow, Colors, Metrics, FontStyle} from '../../settings/theme';
import {MovieInterface} from '../../types/types';
import Detail from './MovieDetail';

const MovieItem = (props: {item: MovieInterface}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemContent}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: props.item.Poster}}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={[styles.flex, styles.info]}>
          <View style={[styles.flex, styles.topInfo]}>
            <View style={styles.details}>
              <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
                {props.item.Title}
              </Text>
              <Detail
                icon={require('../../assets/icons/list.png')}
                label="Tipo"
                detail={props.item.Type}
              />
              <Detail
                icon={require('../../assets/icons/calendar.png')}
                label="Año"
                detail={props.item.Year}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  itemContainer: {
    padding: Metrics.Padding * 2,
    borderRadius: Metrics.BorderRadius,
    height: 150 + Metrics.Padding * 3,
    marginBottom: Metrics.Margin * 2,
  },
  itemContent: {
    height: 150 + Metrics.Padding * 2,
    padding: Metrics.Padding,
    backgroundColor: Colors.White,
    flexDirection: 'row',
    ...Shadow,
    borderRadius: Metrics.BorderRadius,
  },
  imageContainer: {
    width: 110,
    height: 150,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  info: {paddingLeft: Metrics.Padding},
  topInfo: {
    flexDirection: 'row',
    width: '100%',
  },
  title: {
    ...FontStyle.Subtitle,
    color: Colors.SuperDark,
    marginBottom: Metrics.Margin * 2,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default MovieItem;
