import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={require('../../assets/images/MainScreen/Main.png')}
      />
      <TouchableOpacity
        style={styles.yellowBtn}
        onPress={() => {
          navigation.navigate('Stage');
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../assets/images/MainScreen/YellowButton.png')}
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
  yellowBtn: {
    position: 'absolute',
    zIndex: 1,
    top: '50%',
    left: '11.6%',
    borderRadius: 4,
    // opacity: 0,
    // pointerEvents: 'none',
  },
});

export default MainScreen;
