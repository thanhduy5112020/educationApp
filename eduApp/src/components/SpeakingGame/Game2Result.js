import React, { useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import SpeakingBackground from './SpeakingBackground';
import SpeakingTwoButton from '../../core/Button/SpeakingTwoButton';
import { Audio } from 'expo-av';

const Game2Result = ({ navigation }) => {
  return (
    <>
      <SpeakingBackground
        title="문장 말하기"
        question="단어를 이용해 문장을 만든 후 직접 읽어보자!"
        destination="SpeakingGame3"
        navigation={navigation}
      />
      <View
        style={styles.blankText}
      >
        <Image

          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game2/answer.png')}
        />
      </View>

      <View
        style={styles.hint}
      >
        <Image

          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game2/hintSmall.png')}
        />
      </View>

      <TouchableOpacity
        style={styles.fullText}
        onPress={async () => {
          const soundObject = new Audio.Sound();
          try {
            await soundObject.loadAsync(
              require('../../../assets/audio/sentenCorrect1.m4a'),
            );
            await soundObject.playAsync();
          } catch (error) {
            console.log('Error playing sound:', error);
          }
        }}
      >
        <Image

          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game2/audio.png')}
        />
      </TouchableOpacity>

      <SpeakingTwoButton destination="SpeakingGame3" navigation={navigation} />

    </>
  );
};

const styles = StyleSheet.create({
  blankText: {
    position: 'absolute',
    top: 290,

    zIndex: 3,
  },

  hint: {
    position: 'absolute',
    top: 390,
    zIndex: 3,
  },

  fullText: {
    position: 'absolute',
    top: 550,
    zIndex: 3,
  }
});

export default Game2Result;
