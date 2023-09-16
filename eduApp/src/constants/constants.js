import StartScreen from '../screens/StartScreen';
import AdvertisingScreen from '../screens/AdvertisingScreen';
import MainScreen from '../screens/MainScreen';
import StageScreen from '../screens/StageScreen';
import ProgressScreen from '../screens/ProgressScreen'

export const stackScreen = [
  {
    name: 'Start',
    component: StartScreen,
  },
  {
    name: 'AdvertisingScreen',
    component: AdvertisingScreen,
  },
  {
    name: 'Main',
    component: MainScreen,
  },
  {
    name: 'Stage',
    component: StageScreen,
  },
  {
    name: 'Progress',
    component: ProgressScreen,
  }
];
