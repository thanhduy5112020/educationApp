import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './src/screens/StartScreen';
import AdvertisingScreen from './src/screens/AdvertisingScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AdvertisingScreen" component={AdvertisingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
