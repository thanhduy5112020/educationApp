import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
const StageScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={require('../../assets/images/StageScreen/StageScreen.png')}
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

export default StageScreen;
