import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello World 1</Text> */}
      {/* <Image
          source={{ uri: 'hotel2.jpg' }}
          style={{ width: 200, height: 200}}
        /> */}
      <Image
        resizeMode="cover"
        source={require('./assets/images/START.png')}
        // style={{ width: '100%', height: '100%' }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
