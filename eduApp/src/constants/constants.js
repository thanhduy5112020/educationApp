import StartScreen from '../screens/StartScreen';
import AdvertisingScreen from '../screens/AdvertisingScreen';
import MainScreen from '../screens/MainScreen';
import StageScreen from '../screens/StageScreen';
import ProgressScreen from '../screens/ProgressScreen/ProgressScreen';
import ListeningProgress from '../screens/ProgressScreen/ListeningProgress';
import SpeakingProgress from '../screens/ProgressScreen/SpeakingProgress';
import PuzzleProgress from '../screens/ProgressScreen/PuzzleProgress';
import Stage1Screen from '../screens/Stage1Screen/Stage1Screen'

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
  },
  {
    name: 'ListeningProgress',
    component: ListeningProgress,
  },
  {
    name: 'SpeakingProgress',
    component: SpeakingProgress,
  },
  {
    name: 'PuzzleProgress',
    component: PuzzleProgress,
  },
  {
    name: 'Stage1',
    component: Stage1Screen,
  },
];
