import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
const ProgressScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={require('../../../assets/images/ProgressScreen/ProgressScreen.png')}
      />

      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => {
          navigation.pop();
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/ProgressScreen/BackButton.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.number2}
        onPress={() => {
          navigation.navigate('ListeningGame1');
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/ProgressScreen/Number2.png')}
        />
      </TouchableOpacity>
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
  backBtn: {
    position: 'absolute',
    zIndex: 1,
    top: '8.5%',
    left: '9.2%',
    borderRadius: 4,
    opacity: 0,
    // pointerEvents: 'cursor',
  },
  number2: {
    position: 'absolute',
    zIndex: 1,
    bottom: 200,
    left: 370,
    opacity: 0,
    // pointerEvents: 'cursor',
  },
});

export default ProgressScreen;
