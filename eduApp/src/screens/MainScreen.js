import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={require('../../assets/images/MainScreen/Main.png')}
      />

      <TouchableOpacity
        style={styles.searchingBtn}
        onPress={() => {
          navigation.navigate('Progress');
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../assets/images/MainScreen/Searching.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.yellowBtn}
        onPress={() => {
          navigation.navigate('Stage');
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../assets/images/MainScreen/YellowButton.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.listeningGame}
        onPress={() => {
          navigation.navigate('Progress');
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../assets/images/MainScreen/ListeningGame.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.speakingGame}
        onPress={() => {
          navigation.navigate('Progress');
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../assets/images/MainScreen/SpeakingGame.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.puzzleGame}
        onPress={() => {
          navigation.navigate('Progress');
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../assets/images/MainScreen/PuzzleGame.png')}
        />
      </TouchableOpacity>
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
  yellowBtn: {
    position: 'absolute',
    zIndex: 1,
    top: '50%',
    left: '11.6%',
    borderRadius: 4,
    // opacity: 0,
    // pointerEvents: 'none',
  },
  listeningGame: {
    position: 'absolute',
    zIndex: 1,
    bottom: '8%',
  },
  speakingGame: {
    position: 'absolute',
    zIndex: 1,
    bottom: '8%',
    left: '9.1%',
  },
  puzzleGame: {
    position: 'absolute',
    zIndex: 1,
    bottom: '8%',
    right: '9.1%',
  },
  searchingBtn: {
    position: 'absolute',
    zIndex: 1,
    left: '9.1%',
    top: '10%',
  }

});

export default MainScreen;
