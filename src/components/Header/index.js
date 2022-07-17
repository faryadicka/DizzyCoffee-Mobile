import React from 'react';
import {View, Image, Pressable} from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import styles from './styles';
import Chat from '../../assets/img/chat.png';
import Cart from '../../assets/img/cart.png';
import Ava from '../../assets/img/avaBar.png';

const HeaderRigh = () => {
  return (
    <View style={styles.headerContainer}>
      <Pressable style={styles.imgWrap}>
        <Image source={Chat} style={styles.imgHeader} />
      </Pressable>
      <Pressable style={styles.imgWrap}>
        <Image source={Cart} style={styles.imgHeader} />
      </Pressable>
      <Pressable style={styles.imgWrap}>
        <Image source={Ava} style={styles.imgHeader} />
      </Pressable>
    </View>
  );
};
export default HeaderRigh;
