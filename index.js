import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import {Provider as PaperProvider} from 'react-native-paper';

const AppWithRouter = () => (
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <PaperProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </PaperProvider>
    </PersistGate>
  </ReduxProvider>
);

AppRegistry.registerComponent(appName, () => AppWithRouter);
