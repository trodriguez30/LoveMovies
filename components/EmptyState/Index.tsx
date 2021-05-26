import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Metrics, Colors, FontStyle, Shadow} from '../../settings/theme';
import {EmptyStateProps} from '../../types/types';

const EmptyState = (props: EmptyStateProps) => {
  return (
    <View style={[styles.container, props.style]}>
      <Image source={props.icon} resizeMode="contain" style={styles.icon} />
      <Text style={styles.label}>{props.message}</Text>
      {'onPress' in props && (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
          <Text style={[FontStyle.NormalBold, styles.textStyle]}>
            {'buttonLabel' in props ? props.buttonLabel : 'Aceptar'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Metrics.ScreenHeight,
    backgroundColor: Colors.Background,
    width: Metrics.ScreenWidth,
    paddingHorizontal: Metrics.Padding * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: Metrics.Margin * 2,
  },
  label: {
    ...FontStyle.Normal,
    color: Colors.SuperDark,
    textAlign: 'center',
  },
  button: {
    borderRadius: Metrics.BorderRadius,
    paddingHorizontal: Metrics.Padding * 2,
    paddingVertical: Metrics.Padding / 2,
    elevation: 2,
    width: Metrics.ScreenWidth / 2,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Primary,
    marginTop: Metrics.Margin * 4,
    ...Shadow,
  },
  textStyle: {
    textAlign: 'center',
    color: Colors.White,
  },
});
export default EmptyState;
