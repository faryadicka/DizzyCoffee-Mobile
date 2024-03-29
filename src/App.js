import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import styles from './styles';
import SplashScreen from 'react-native-splash-screen';
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
import Cart from './screens/Cart/index';
import Payment from './screens/Payment/index';
import Profile from './screens/Profile/index';
import EditProfile from './screens/EditProfile/index';
import EditPassword from './screens/EditPassword/index';
import HeaderRight from './components/Header/index';
import Confirm from './screens/Confirm';
import History from './screens/History';
import CreateProduct from './screens/CreateProduct';
import CreatePromo from './screens/CreatePromo';
import EditProduct from './screens/EditProduct';
import EditPromo from './screens/EditPromo';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

const DrawerNav = ({navigation}) => {
  const id = useSelector(state => state.cart.id);
  const cart = useSelector(state => state.cart);

  const {Navigator, Screen} = createDrawerNavigator();
  return (
    <Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#ffffff00',
        },
        headerShadowVisible: false,
      }}
      drawerContent={props => <MyDrawer {...props} />}>
      <Screen
        name="Main"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerRight: () => <HeaderRight navigation={navigation} />,
          headerTitle: '',
        }}
      />
      <Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTitleStyle: {fontWeight: '900'},
          headerTitle: 'Favorite Products',
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <Ion
                onPress={() => {
                  navigation.replace('Home');
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
          headerStyle: {backgroundColor: '#F2F2F2'},
          headerTitle: 'Product Detail',
          headerTitleStyle: {fontWeight: '900'},
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={styles.headerLeft}>
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
          headerRight: () => (
            <View style={styles.headerRight}>
              <Ion
                onPress={() => {
                  navigation.navigate('Cart');
                }}
                name="cart-outline"
                size={20}
                color="black"
              />
            </View>
          ),
        }}
        name="ProductDetail"
        component={ProductDetail}
      />
      <Screen
        name="Cart"
        component={Cart}
        options={{
          headerStyle: {
            backgroundColor: '#ECECEC',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: '800'},
          headerTitle: 'Cart',
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <Ion
                onPress={() => {
                  cart.size
                    ? navigation.navigate('ProductDetail', {id: Number(id)})
                    : navigation.goBack();
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
        name="Payment"
        component={Payment}
        options={{
          headerStyle: {
            backgroundColor: '#ECECEC',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: '800'},
          headerTitle: 'Checkout',
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <Ion
                onPress={() => {
                  navigation.navigate('Cart');
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
        name="Confirm"
        component={Confirm}
        options={{
          headerStyle: {
            backgroundColor: '#ECECEC',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: '800'},
          headerTitle: 'Payment',
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <Ion
                onPress={() => {
                  navigation.navigate('Payment');
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
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: '#ECECEC',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: '800'},
          headerTitle: 'My Profile',
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <Ion
                onPress={() => {
                  navigation.push('Home');
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
        name="EditProfile"
        component={EditProfile}
        options={{
          headerStyle: {
            backgroundColor: '#ECECEC',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: '800'},
          headerTitle: 'Edit Profile',
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <Ion
                onPress={() => {
                  navigation.push('Home');
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
        name="History"
        component={History}
        options={{
          headerStyle: {
            backgroundColor: '#ECECEC',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: '800'},
          headerTitle: 'Order History',
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <Ion
                onPress={() => {
                  navigation.push('Home');
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
        name="EditPassword"
        component={EditPassword}
        options={{
          headerStyle: {
            backgroundColor: '#ECECEC',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: '800'},
          headerTitle: 'Edit Password',
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <Ion
                onPress={() => {
                  navigation.navigate('Profile');
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
        name="CreateProduct"
        component={CreateProduct}
        options={{
          headerStyle: {
            backgroundColor: '#ECECEC',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: '800'},
          headerTitle: 'New Product',
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <Ion
                onPress={() => {
                  navigation.push('Home');
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
        name="CreatePromo"
        component={CreatePromo}
        options={{
          headerStyle: {
            backgroundColor: '#ECECEC',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: '800'},
          headerTitle: 'New Promo',
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <Ion
                onPress={() => {
                  navigation.push('Home');
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
        name="EditProduct"
        component={EditProduct}
        options={{
          headerStyle: {
            backgroundColor: '#ECECEC',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: '800'},
          headerTitle: 'Edit Product',
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <Ion
                onPress={() => {
                  navigation.push('Home');
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
        name="EditPromo"
        component={EditPromo}
        options={{
          headerStyle: {
            backgroundColor: '#ECECEC',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: '800'},
          headerTitle: 'Edit Promo',
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <Ion
                onPress={() => {
                  navigation.push('Home');
                }}
                name="chevron-back-outline"
                size={20}
                color="black"
              />
            </View>
          ),
        }}
      />
    </Navigator>
  );
};

const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={styles.toastStyleSuccess}
      text1Style={styles.text1Toast}
      text2Style={styles.text2Toast}
      contentContainerStyle={styles.containerToast}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      style={styles.toastStyleError}
      text1Style={styles.text1Toast}
      text2Style={styles.text2Toast}
      contentContainerStyle={styles.containerToast}
    />
  ),
};

const App = () => {
  const Token = useSelector(state => state.auth.dataLogin?.token);
  const {Navigator, Screen} = createStackNavigator();
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <Navigator
        initialRouteName={Token ? 'Home' : 'Welcome'}
        screenOptions={{headerShown: false}}>
        <Screen name="Welcome" component={Welcome} />
        <Screen name="Landing" component={Landing} />
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen name="Forgot" component={Forgot} />
        <Screen name="Home" component={DrawerNav} />
      </Navigator>
      <Toast config={toastConfig} />
    </>
  );
};

export default App;
