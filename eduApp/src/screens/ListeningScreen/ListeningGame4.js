import React from 'react';
import { StyleSheet, View } from 'react-native';
import Game4 from '../../components/ListeningGame/Game4';
// import ListeningBackground from '../../components/ListeningGame/ListeningBackground';
const ListeningGame4 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Game4 navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ListeningGame4;
