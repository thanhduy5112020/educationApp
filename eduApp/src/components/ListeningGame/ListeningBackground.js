import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import BackButton from '../../core/Button/BackButton';
import ConfirmButton from '../../core/Button/ConfirmButton';
import ListeningModalDialog from '../../core/Modal/ListeningModalDialog';
const ListeningBackground = ({ navigation, title, question, destination }) => {
  return (
    <>
      <Image
        resizeMode="cover"
        source={require('../../../assets/images/ListeningGame/ListeningBackground.png')}
        // source={require('../../../assets/images/ListeningGame/Game1/FullScreen.png')}
      ></Image>
      <View style={styles.textTitle}>
        <Text style={{ fontSize: 50, fontWeight: 'bold' }}>{title}</Text>
      </View>
      <View style={styles.quesContent}>
        <Text style={{ fontSize: 28 }}>{question}</Text>
      </View>
      {/* {anwsOptions.map((item, index) => (
        <AnswerButton
          id={index}
          content={item.content}
          top={item.top}
          left={item.left}
          selectedOrder={item.order}
          callbackFunc={(isSelected, index) =>
            updateStackChoice(isSelected, index)
          }
        />
      ))} */}
      <BackButton navigation={navigation} navigateTo="Progress" />
      <ConfirmButton
        Modal={ListeningModalDialog}
        destination={destination}
        navigation={navigation}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    position: 'absolute',
    top: 165,
    left: '43.6%',
    zIndex: 3,
    // fontWeight: 700,
  },
  quesContent: {
    position: 'absolute',
    top: 235,
    left: '32%',
    zIndex: 3,
  },
});

export default ListeningBackground;
