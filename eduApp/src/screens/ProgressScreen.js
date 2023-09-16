import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
const ProgressScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={require('../../assets/images/ProgressScreen/ProgressScreen.png')}
      />
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

export default ProgressScreen;
