import React, { useState } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const ConfirmButton = ({ style = styles.absolute, Modal }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setModalVisible(true);
      }}
      style={style}
    >
      <Image
        resizeMode="cover"
        source={require('../../../assets/images/core/ConfirmButton.png')}
      />
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    bottom: 75,
    left: 555,
  },
});

export default ConfirmButton;
