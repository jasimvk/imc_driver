/**
 * @format
 */
import SplashScreen from 'react-native-splash-screen';


import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';



setTimeout(() => {
    SplashScreen.hide();
  }, 10000);
AppRegistry.registerComponent(appName, () => App);
