import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const PuzzleGame1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is a puzzle game</Text>
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
});

export default PuzzleGame1;
