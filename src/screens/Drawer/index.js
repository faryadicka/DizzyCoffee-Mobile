import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import styles from './styles';
import Avatar from '../../assets/img/avaNav.png';
import Evil from 'react-native-vector-icons/EvilIcons';
import Ion from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Awesome5 from 'react-native-vector-icons/FontAwesome5';
import Awesome from 'react-native-vector-icons/FontAwesome';

const MyDrawer = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerAvatar}>
        <Image source={Avatar} style={styles.Avatar} />
        <Text style={styles.nameDrawer}>Ferry Aryadicka</Text>
        <Text style={styles.emailDrawer}>faryadicka@outlook.com</Text>
      </View>
      <View style={styles.containerList}>
        <View style={styles.listNav}>
          <Evil name="user" size={25} color="#6A4029" />
          <Text style={styles.textNav}>Edit Profile</Text>
        </View>
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
            navigation.navigate('Home');
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
