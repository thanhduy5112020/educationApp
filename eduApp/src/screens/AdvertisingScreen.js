import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Slider from '../components/Carousel/Slider';

const AdvertisingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontFamily: 'SUIT',
          fontWeight: 'bold',
          fontSize: 12,
          // lineHeight: '47.7px',
        }}
      >
        청능 훈련을 통해 일상생활속의 대화를 연결시켜드려요!
      </Text>
      <Slider />
    </SafeAreaView>
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

export default AdvertisingScreen;
