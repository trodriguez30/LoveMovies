import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {Metrics, Colors, FontStyle} from '../../settings/theme';
import {MovieDetailInterface} from '../../types/types';

const MovieDetail = (props: MovieDetailInterface) => {
  return (
    <View style={styles.detailContainer}>
      <View style={styles.iconContent}>
        <Image source={props.icon} resizeMode="contain" style={styles.icon} />
      </View>
      <View style={styles.infoContent}>
        <Text style={styles.label}>{props.label}</Text>
        <Text style={styles.text}>{props.detail}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: Metrics.Padding * 2,
    paddingHorizontal: Metrics.Padding,
  },
  iconContent: {width: 24, height: 24},
  icon: {
    width: '100%',
    height: '100%',
  },
  infoContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: Metrics.Padding,
  },
  label: {
    ...FontStyle.NormalBold,
    color: Colors.SuperDark,
  },
  text: {...FontStyle.Normal, color: Colors.SuperDark},
});

export default MovieDetail;
