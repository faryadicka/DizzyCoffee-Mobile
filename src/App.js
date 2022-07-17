import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ion from 'react-native-vector-icons/Ionicons';
import Welcome from './screens/Welcome/index';
import Login from './screens/Login/index';
import Register from './screens/Register/index';
import Forgot from './screens/Forgot/index';
import Landing from './screens/Landing/index';
import Home from './screens/Home/index';
import Favorite from './screens/Favorite/index';
import ProductDetail from './screens/ProductDetail/index';
import MyDrawer from './screens/Drawer/index';
import HeaderRight from './components/Header/index';

const DrawerNav = ({navigation}) => {
  const {Navigator, Screen} = createDrawerNavigator();
  return (
    <Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#ffffff00',
        },
      }}
      drawerContent={props => <MyDrawer {...props} />}>
      <Screen
        name="Main"
        component={Home}
        options={{headerRight: () => <HeaderRight />, headerTitle: ''}}
      />
      <Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerLeft: () => (
            <View style={{paddingLeft: 20}}>
              <Ion
                onPress={() => {
                  navigation.navigate('Main');
                }}
                name="chevron-back-outline"
                size={20}
                color="black"
              />
            </View>
          ),
        }}
      />
      <Screen
        options={{
          headerStyle: {backgroundColor: '#f5279100', shadowColor: '#f5279100'},
          headerTitle: '',
          headerLeft: () => (
            <View style={{paddingLeft: 20}}>
              <Ion
                onPress={() => {
                  navigation.navigate('Main');
                }}
                name="chevron-back-outline"
                size={20}
                color="black"
              />
            </View>
          ),
        }}
        name="ProductDetail"
        component={ProductDetail}
      />
    </Navigator>
  );
};

const App = () => {
  const {Navigator, Screen} = createStackNavigator();
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Landing" component={Landing} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Forgot" component={Forgot} />
      <Screen name="Home" component={DrawerNav} />
    </Navigator>
  );
};

export default App;
