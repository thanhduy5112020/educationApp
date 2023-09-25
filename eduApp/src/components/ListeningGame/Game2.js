import React from 'react';
import { StyleSheet } from 'react-native';
import ListeningBackground from './ListeningBackground';
const Game2 = ({ navigation }) => {
  return (
    <>
      <ListeningBackground
        title="문장 훈련"
        question="소리를 듣고 올바른 문장을 선택해보자!"
        navigation={navigation}
      />
    </>
  );
};

// const styles = StyleSheet.create({
//   //   audio: {
//   //     position: 'absolute',
//   //     top: 321,
//   //     left: '46%',
//   //     zIndex: 3,
//   //     // fontWeight: 700,
//   //   },
// });

export default Game2;
