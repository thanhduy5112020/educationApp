import StartScreen from '../screens/StartScreen';
import AdvertisingScreen from '../screens/AdvertisingScreen';
import MainScreen from '../screens/MainScreen';
import StageScreen from '../screens/StageScreen';
import ProgressScreen from '../screens/ProgressScreen/ProgressScreen';
import ListeningProgress from '../screens/ProgressScreen/ListeningProgress';
import SpeakingProgress from '../screens/ProgressScreen/SpeakingProgress';
import PuzzleProgress from '../screens/ProgressScreen/PuzzleProgress';
import ListeningGame1 from '../screens/ListeningScreen/ListeningGame1';
import ListeningGame2 from '../screens/ListeningScreen/ListeningGame2';
// import ListeningModalDialog from '../core/Modal/ListeningModalDialog';

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
    name: 'ListeningGame1',
    component: ListeningGame1,
  },
  {
    name: 'ListeningGame2',
    component: ListeningGame2,
  },
];
