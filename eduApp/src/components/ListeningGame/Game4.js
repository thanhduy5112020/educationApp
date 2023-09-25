import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import ListeningBackground from './ListeningBackground';
import AnswerButton from '../../core/Button/AnswerButton';
const Game4 = ({ navigation }) => {
  const [anwsOptions, setAnwsOptions] = useState([
    {
      content: 'O',
      top: 590,
      left: 460,
    },
    {
      content: 'X',
      top: 590,
      left: 740,
    },
  ]);
  return (
    <>
      <ListeningBackground
        title="소음 훈련"
        question="소음을 듣고 그림과 상황이 일치하면 O, 그렇지 않으면 X를 선택해보자!"
        navigation={navigation}
        leftPosContent="25%"
        destination="ListeningGame5"
      />
      <TouchableOpacity
        style={styles.audio}
        onPress={() => {
          console.log('playing the audio');
        }}
      >
        <Image
          style={{ width: 40, height: 40 }}
          resizeMode="cover"
          source={require('../../../assets/images/core/Audio.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.car}
        onPress={() => {
          console.log('playing the audio');
        }}
      >
        <Image
          //   style={{ width: 40, height: 40 }}
          resizeMode="cover"
          source={require('../../../assets/images/ListeningGame/Game4/Car.png')}
        />
      </TouchableOpacity>
      {anwsOptions.map((item, index) => (
        <AnswerButton
          customWidth={179}
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
    top: 520,
    left: '32%',
    zIndex: 3,
    // fontWeight: 700,
  },
  car: {
    position: 'absolute',
    top: 320,
    left: '31%',
    zIndex: 2,
  },
});

export default Game4;
