import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import PuzzleBackground from './PuzzleBackground';
import AnswerButton from '../../core/Button/AnswerButton';
const Game1 = ({ navigation }) => {
  return (
    <>
      <PuzzleBackground
        title="카드 뒤집기"
        question="주어진 시간 안에 카드를 뒤집어 같은 그림끼리 찾아보자!"
        navigation={navigation}
        leftPosContent="31.5%"
        leftPosTitle="42%"
        destination="PuzzleGame1"
      />
      {/* <TouchableOpacity
        style={styles.yellowBoard}
        onPress={() => {
          console.log('playing the audio');
        }}
      >
        <Image
          //   style={{ width: 40, height: 40 }}
          resizeMode="cover"
          source={require('../../../assets/images/ListeningGame/Game5/YellowBoard.png')}
        />
      </TouchableOpacity> */}
    </>
  );
};

// const styles = StyleSheet.create({
//   audio: {
//     position: 'absolute',
//     top: 440,
//     left: '47%',
//     zIndex: 3,
//     // fontWeight: 700,
//   },
//   yellowBoard: {
//     position: 'absolute',
//     top: 310,
//     left: '28%',
//     zIndex: 3,
//     // fontWeight: 700,
//   },
// });

export default Game1;
