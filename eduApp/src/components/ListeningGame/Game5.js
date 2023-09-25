import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import ListeningBackground from './ListeningBackground';
import AnswerButton from '../../core/Button/AnswerButton';
const Game5 = ({ navigation }) => {
  const [anwsOptions, setAnwsOptions] = useState([
    {
      content: '검은 머리',
      top: 570,
      left: 460,
    },
    {
      content: '빨강 머리',
      top: 570,
      left: 650,
    },
    {
      content: '노랑 머리',
      top: 570,
      left: 840,
    },
  ]);
  return (
    <>
      <ListeningBackground
        title="이야기 훈련"
        question="들려주는 이야기를 듣고 주어진 문제를 풀어보자!"
        navigation={navigation}
        leftPosContent="31.5%"
        leftPosTitle="42%"
        destination="PuzzleGame1"
      />
      <TouchableOpacity
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
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.audio}
        onPress={() => {
          console.log('playing the audio');
        }}
      >
        <Image
          style={{ width: 94, height: 94 }}
          resizeMode="cover"
          source={require('../../../assets/images/core/Audio.png')}
        />
      </TouchableOpacity>
      {anwsOptions.map((item, index) => (
        <AnswerButton
          type="long"
          customWidth={84.3}
          customHeight={36}
          key={index}
          id={index}
          content={item.content}
          top={item.top}
          left={item.left}
        />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  audio: {
    position: 'absolute',
    top: 440,
    left: '47%',
    zIndex: 3,
    // fontWeight: 700,
  },
  yellowBoard: {
    position: 'absolute',
    top: 310,
    left: '28%',
    zIndex: 3,
    // fontWeight: 700,
  },
});

export default Game5;
