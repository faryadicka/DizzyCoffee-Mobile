import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Welcome from './screens/Welcome/index';
import Login from './screens/Login/index';
import Register from './screens/Register/index';
import Forgot from './screens/Forgot/index';
import Landing from './screens/Landing/index';

export default function App() {
  const {Navigator, Screen} = createDrawerNavigator();
  return (
    <Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Landing" component={Landing} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Forgot" component={Forgot} />
    </Navigator>
  );
}
