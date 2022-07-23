import React, {useEffect, useState} from 'react';
import {View, Image, Pressable} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ion from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {useSelector} from 'react-redux';
import {getProfileAxios} from '../../modules/user';
import Avatar from '../../assets/img/avatar.png';

const HeaderRight = ({navigation}) => {
  const tokenRedux = useSelector(state => state.auth.dataLogin?.token);
  const [profile, setProfile] = useState({});
  const getProfile = token => {
    getProfileAxios(token)
      .then(res => {
        setProfile(res.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProfile(tokenRedux);
  }, [tokenRedux]);
  return (
    <View style={styles.headerContainer}>
      <Pressable style={styles.imgWrap}>
        <Ion name="ios-chatbubble-ellipses-outline" size={20} color="black" />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Cart')}
        style={styles.imgWrap}>
        <Feather name="shopping-cart" size={20} color="black" />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Profile')}
        style={styles.imgWrap}>
        <Image
          source={profile.image_profile ? {uri: profile.image_profile} : Avatar}
          style={styles.imgHeader}
        />
      </Pressable>
    </View>
  );
};
export default HeaderRight;
