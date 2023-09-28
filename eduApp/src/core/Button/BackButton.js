import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const BackButton = ({ navigation, style = styles.absolute, navigateTo }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigateTo ? navigation.navigate(navigateTo) : navigation.pop();
      }}
      style={style}
    >
      <Image
        resizeMode="cover"
        source={require('../../../assets/images/core/BackButton.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 55,
    left: 175,
  },
});

export default BackButton;
