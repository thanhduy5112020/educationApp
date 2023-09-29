import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import ListeningBackground from './ListeningBackground';
import AnswerButton from '../../core/Button/AnswerButton';
import { Audio } from 'expo-av';
const Game2 = ({ navigation }) => {
  const [anwsOptions, setAnwsOptions] = useState([
    {
      content: '나는 오늘 놀이공원에 놀러간다',
      top: 390,
      left: 450,
    },
    {
      content: '나는 내일 워터파크에 가기로 했다',
      top: 460,
      left: 450,
    },
    {
      content: '너는 매일 아침 일찍 운동을 한다',
      top: 530,
      left: 450,
    },
    {
      content: '노는 아이는 일찍 잠에 든다',
      top: 600,
      left: 450,
    },
  ]);
  return (
    <>
      <ListeningBackground
        title="문장 훈련"
        question="소리를 듣고 올바른 문장을 선택해보자!"
        navigation={navigation}
        leftPosContent="35%"
        destination="ListeningGame3"
      />
      <TouchableOpacity
        style={styles.audio}
        onPress={async () => {
          const soundObject = new Audio.Sound();
          try {
            await soundObject.loadAsync(
              require('../../../assets/audio/SentenceTraining.mp3'),
            );
            await soundObject.playAsync();
          } catch (error) {
            console.log('Error playing sound:', error);
          }
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/core/Audio.png')}
        />
      </TouchableOpacity>
      {anwsOptions.map((item, index) => (
        <AnswerButton
          type="long"
          key={index}
          id={index}
          content={item.content}
          top={item.top}
          left={item.left}
          // selectedOrder={item.order}
          // callbackFunc={(isSelected, index) =>
          //   updateStackChoice(isSelected, index)
          // }
        />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  audio: {
    position: 'absolute',
    top: 280,
    left: '46%',
    zIndex: 3,
    // fontWeight: 700,
  },
});

export default Game2;
