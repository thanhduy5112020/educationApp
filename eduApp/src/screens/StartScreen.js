import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={require('../../assets/images/START.png')}
      />
      <StatusBar style="auto" />

      <TouchableOpacity
        title="Navigate to next screen"
        style={styles.customButton}
        onPress={() => {
          navigation.navigate('AdvertisingScreen');
        }}
      >
        <Text>Tap to move next screen</Text>
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
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  overlayText: {
    position: 'absolute',
    zIndex: 1,
    top: '20%',
  },
  customButton: {
    position: 'absolute',
    zIndex: 1,
    top: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 4,
  },
});

export default StartScreen;
