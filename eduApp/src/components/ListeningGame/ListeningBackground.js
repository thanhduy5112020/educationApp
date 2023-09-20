import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import ConfirmButton from '../../core/Button/ConfirmButton';
import BackButton from '../../core/Button/BackButton';
import ListeningModalDialog from '../../core/Modal/ListeningModalDialog';
const ListeningBackground = ({ navigation }) => {
  return (
    <>
      <Image
        resizeMode="cover"
        // source={require('../../../assets/images/ListeningGame/ListeningBackground.png')}
        source={require('../../../assets/images/ListeningGame/Game1/FullScreen.png')}
      ></Image>
      {/* <ConfirmButton navigation={navigation} /> */}
      <BackButton navigation={navigation} navigateTo="Progress" />
      <ConfirmButton Modal={ListeningModalDialog} />
    </>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 55,
    left: 175,
  },
});

export default ListeningBackground;
