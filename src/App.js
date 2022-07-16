import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Welcome from './screens/Welcome/index';
import Login from './screens/Login/index';
import Register from './screens/Register/index';
import Forgot from './screens/Forgot/index';
import Home from './screens/Home/index';

export default function App() {
  const {Navigator, Screen} = createDrawerNavigator();
  return (
    <Navigator initialRouteName="welcome" screenOptions={{headerShown: false}}>
      <Screen name="welcome" component={Welcome} />
      <Screen name="home" component={Home} />
      <Screen name="login" component={Login} />
      <Screen name="register" component={Register} />
      <Screen name="forgot" component={Forgot} />
    </Navigator>
  );
}
