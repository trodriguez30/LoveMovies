import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {Colors} from '../settings/theme';
import Header from '../components/Header/Index';
import Movies from '../screens/Movies';

export const Main = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.Primary} />
      <Header
        title="¡Bienvenido(a)!"
        icon={require('../assets/icons/cinema.png')}
      />
      <Movies />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
});
export default Main;
