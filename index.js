import { AppRegistry } from 'react-native';
import App from './src/App'; // Aponta para o App.js dentro de src
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
