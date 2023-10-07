import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import BackButton from '../../core/Button/BackButton';
import SpeakingConfirmButton from '../../core/Button/SpeakingConfirmButton';
import ListeningModalDialog from '../../core/Modal/ListeningModalDialog';
const SpeakingBackground = ({
  navigation,
  title,
  question,
  destination,
  leftPosContent = 'auto',
  leftPosTitle = '44.6%',
}) => {
  return (
    <>
      <Image
        resizeMode="cover"
        source={require('../../../assets/images/SpeakingGame/SpeakingBackground.png')}
        // source={require('../../../assets/images/ListeningGame/Game5/FullScreen.png')}
      ></Image>
      <View style={[styles.textTitle]}>
        <Text style={{ fontSize: 50, fontWeight: 'bold' }}>{title}</Text>
      </View>
      <View style={[styles.quesContent]}>
        <Text style={{ fontSize: 28 }}>{question}</Text>
      </View>
      <BackButton navigation={navigation} navigateTo="Progress" />
      {/* <SpeakingConfirmButton
        Modal={ListeningModalDialog}
        destination={destination}
        navigation={navigation}
      /> */}
    </>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    position: 'absolute',
    top: '18%',
    zIndex: 3,
    textAlign: "center",

  },

  quesContent: {
    position: 'absolute',
    textAlign: "center",
    top: "28%",
    zIndex: 3,
  },
});

export default SpeakingBackground;
