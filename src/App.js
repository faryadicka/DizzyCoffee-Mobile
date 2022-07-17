import React from 'react';
// import {Text, View, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import Welcome from './screens/Welcome/index';
import Login from './screens/Login/index';
import Register from './screens/Register/index';
import Forgot from './screens/Forgot/index';
import Landing from './screens/Landing/index';
import Home from './screens/Home/index';
// import HeaderRight from './components/Header/index';

const App = () => {
  const {Navigator, Screen} = createStackNavigator();
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Landing" component={Landing} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Forgot" component={Forgot} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default App;
