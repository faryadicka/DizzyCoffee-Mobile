import React from 'react';
import {View, Image, Pressable} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ion from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Ava from '../../assets/img/avaBar.png';

const HeaderRight = () => {
  return (
    <View style={styles.headerContainer}>
      <Pressable style={styles.imgWrap}>
        <Ion name="ios-chatbubble-ellipses-outline" size={20} color="black" />
      </Pressable>
      <Pressable style={styles.imgWrap}>
        <Feather name="shopping-cart" size={20} color="black" />
      </Pressable>
      <Pressable style={styles.imgWrap}>
        <Image source={Ava} style={styles.imgHeader} />
      </Pressable>
    </View>
  );
};
export default HeaderRight;
