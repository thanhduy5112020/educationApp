import React, { useState } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
const ProgressScreen = ({ navigation }) => {

  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={require('../../../assets/images/ProgressScreen/ProgressScreen.png')}
      />

      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => {
          navigation.pop();
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/ProgressScreen/BackButton.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.yellowNumber}
        onPress={toggleInstructions}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/ProgressScreen/YellowNumber.png')}
        />
      </TouchableOpacity>

      {showInstructions && (
        <View style={styles.instructionContainer}>
          <TouchableOpacity
            style={styles.xBtn}
            onPress={toggleInstructions}>
            <Image
              resizeMode="cover"
              source={require('../../../assets/images/ProgressScreen/xButton.png')}
            />
          </TouchableOpacity>
          <Image
            resizeMode="cover"
            source={require('../../../assets/images/ProgressScreen/Instruct.png')}
          />
          <TouchableOpacity
            style={styles.startBtn}
            onPress={() => {
              navigation.navigate('Stage1');
            }}
          >
            <Image
              resizeMode="cover"
              source={require('../../../assets/images/ProgressScreen/StartButton.png')}
            />
          </TouchableOpacity>

          {/* <Image
              style={styles.video}
              resizeMode="cover"
              source={require('../../../assets/images/ProgressScreen/video.png')}
            /> */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtn: {
    position: 'absolute',
    zIndex: 1,
    top: '8.5%',
    left: '9.2%',
    borderRadius: 4,
    opacity: 0,
    // pointerEvents: 'cursor',
  },
  yellowNumber: {
    position: 'absolute',
    zIndex: 1,
    top: '62%',
    left: '23%',
    borderRadius: 4,
    opacity: 0,
  },
  instructionContainer: {
    position: 'absolute',
    zIndex: 1,
  },
  xBtn: {
    position: 'absolute',
    zIndex: 1,
    top: '5%',
    right: '5%',
  },
  startBtn: {
    position: 'absolute',
    zIndex: 1,
    top: '85%',
    right: '40%',
  },
  video: {
    position: 'absolute',
    zIndex: 1,
    top: '85%',
    right: '40%',
  }
});

export default ProgressScreen;
