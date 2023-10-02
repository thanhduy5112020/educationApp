import React, { useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import SpeakingBackground from './SpeakingBackground';

const Game1Result = ({ navigation }) => {
  return (
    <>
      <SpeakingBackground
        title="단어 말하기"
        question="소리를 듣고 따라말한 후 비교해보자!"
        destination="SpeakingGame2"
        navigation={navigation}
      />
      <TouchableOpacity
        style={styles.wave1}
        onPress={() => {
          console.log('playing the audio');
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game1/wave.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.wave2}
        onPress={() => {
          console.log('playing the audio');
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game1/wave.png')}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  wave1: {
    position: 'absolute',
    top: 321,
    left: '20%',
    zIndex: 3,
    // fontWeight: 700,
  },
  wave2: {
    position: 'absolute',
    top: 321,
    left: '53%',
    zIndex: 3,
    // fontWeight: 700,
  },
});

export default Game1Result;
