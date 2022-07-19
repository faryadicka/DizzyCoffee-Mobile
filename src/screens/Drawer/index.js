import React, {useEffect, useState} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import styles from './styles';
import Avatar from '../../assets/img/avatar.png';
import Evil from 'react-native-vector-icons/EvilIcons';
import Ion from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Awesome5 from 'react-native-vector-icons/FontAwesome5';
import Awesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import {getProfileAxios} from '../../modules/user';

const MyDrawer = ({navigation}) => {
  const tokenRedux = useSelector(state => state.auth.dataLogin?.token);
  const [profile, setProfile] = useState({});
  const getProfile = token => {
    getProfileAxios(token)
      .then(res => {
        console.log(res);
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
    <View style={styles.container}>
      <View style={styles.containerAvatar}>
        <Image
          source={profile.image ? {uri: profile.image_profile} : Avatar}
          style={styles.Avatar}
        />
        <Text style={styles.nameDrawer}>{profile.display_name}</Text>
        <Text style={styles.emailDrawer}>{profile.email}</Text>
      </View>
      <View style={styles.containerList}>
        <Pressable
          onPress={() => {
            navigation.navigate('EditProfile');
          }}
          style={styles.listNav}>
          <Evil name="user" size={25} color="#6A4029" />
          <Text style={styles.textNav}>Edit Profile</Text>
        </Pressable>
        <View style={styles.listNav}>
          <Material name="cart-arrow-down" size={25} color="#6A4029" />
          <Text style={styles.textNav}>Orders</Text>
        </View>
        <View style={styles.listNav}>
          <Ion name="md-fast-food-outline" size={25} color="#6A4029" />
          <Text style={styles.textNav}>All menu</Text>
        </View>
        <View style={styles.listNav}>
          <Material name="note-text-outline" size={25} color="#6A4029" />
          <Text style={styles.textNav}>Orders</Text>
        </View>
        <View style={styles.listNavEnd}>
          <Awesome5 name="shield-alt" size={25} color="#6A4029" />
          <Text style={styles.textNav}>Security</Text>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate('Landing');
          }}
          style={styles.listNavSignOut}>
          <Text style={styles.textNav}>Sign-out</Text>
          <Awesome name="long-arrow-right" size={25} color="#6A4029" />
        </Pressable>
      </View>
    </View>
  );
};

export default MyDrawer;
