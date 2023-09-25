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
import ListeningGame3 from '../screens/ListeningScreen/ListeningGame3';
import ListeningGame4 from '../screens/ListeningScreen/ListeningGame4';
import ListeningGame5 from '../screens/ListeningScreen/ListeningGame5';
import PuzzleGame1 from '../screens/PuzzleScreen/PuzzleGame1';
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
    name: 'ListeningGame3',
    component: ListeningGame3,
  },
  {
    name: 'ListeningGame2',
    component: ListeningGame2,
  },
  {
    name: 'ListeningGame4',
    component: ListeningGame4,
  },
  {
    name: 'ListeningGame5',
    component: ListeningGame5,
  },
  {
    name: 'PuzzleGame1',
    component: PuzzleGame1,
  },
];
