import React, { useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import SpeakingBackground from './SpeakingBackground';
import RecordButton from '../../core/Button/RecordButton';
import { Audio } from 'expo-av';
// import Voice from 'react-native-voice';

const Game1 = ({ navigation }) => {
  return (
    <>
      <SpeakingBackground
        title="단어 말하기"
        question="소리를 듣고 따라말한 후 비교해보자!"
        destination="SpeakingGame1Result"
        navigation={navigation}
      />
      <TouchableOpacity
        style={styles.wave1}
        onPress={async () => {
          const soundObject = new Audio.Sound();
          try {
            await soundObject.loadAsync(
              require('../../../assets/audio/SpeakingWoman.mp3'),
            );
            await soundObject.playAsync();
          } catch (error) {
            console.log('Error playing sound:', error);
          }
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game1/wave.png')}
        />
      </TouchableOpacity>

      <View style={styles.wave2}>
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game1/wave2.png')}
        />
      </View>
      <RecordButton destination="SpeakingGame1Result" navigation={navigation} />
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

export default Game1;
