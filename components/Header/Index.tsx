import * as React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, Metrics, FontStyle, Shadow} from '../../settings/theme';
import {HeaderProps} from '../../types/types';

const Header = (props: HeaderProps) => {
  return (
    <SafeAreaView style={styles.headerContent}>
      <Image source={props.icon} resizeMode="contain" style={styles.icon} />
      <Text style={styles.headerTitle}>{props.title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContent: {
    paddingVertical: Metrics.Padding * 4,
    paddingHorizontal: Metrics.Padding * 2,
    flexDirection: 'column',
    backgroundColor: Colors.Primary,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    ...Shadow,
  },
  headerTitle: {
    ...FontStyle.Big,
    color: Colors.White,
    width: '70%',
    textAlign: 'center',
    marginBottom: Metrics.Margin / 2,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: Metrics.Margin * 2,
  },
});

export default Header;
