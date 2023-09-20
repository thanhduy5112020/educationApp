import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import ListeningBackground from '../../components/ListeningGame/ListeningBackground';
// import ListeningBackground from '../../components/ListeningGame/ListeningBackground';
const ListeningGame1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ListeningBackground navigation={navigation} />
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

export default ListeningGame1;
