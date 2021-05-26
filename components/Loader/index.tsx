import React from 'react';

import {View, ActivityIndicator, Text, StyleSheet} from 'react-native';
import {Colors, FontStyle, Metrics} from '../../settings/theme';
import {LoaderInterface} from '../../types/types';

function Loader(props: LoaderInterface) {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color={props.color} />
      <Text style={styles.loaderText}>{props.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    backgroundColor: Colors.Background,
    width: Metrics.ScreenWidth,
    height: Metrics.ScreenHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderText: {
    ...FontStyle.Subtitle,
    color: Colors.SuperDark,
    marginTop: Metrics.Margin,
  },
});

export default Loader;
