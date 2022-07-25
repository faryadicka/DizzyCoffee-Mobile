import React, {useEffect, useState} from 'react';
import {Text, View, Image, Pressable, Modal} from 'react-native';
import {Button} from '@rneui/themed';
import styles from './styles';
import Avatar from '../../assets/img/avatar.png';
import Evil from 'react-native-vector-icons/EvilIcons';
import Ion from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Awesome5 from 'react-native-vector-icons/FontAwesome5';
import Awesome from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import {getUserDataAction} from '../../redux/actionCreator/users';
import {logoutAction} from '../../redux/actionCreator/auth';

const MyDrawer = ({navigation}) => {
  const tokenRedux = useSelector(state => state.auth.dataLogin?.token);
  const userData = useSelector(state => state.users.dataUser);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  useEffect(() => {
    dispatch(getUserDataAction(tokenRedux));
  }, [tokenRedux, dispatch]);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerAvatar}>
          <Image
            source={
              userData?.image_profile ? {uri: userData?.image_profile} : Avatar
            }
            style={styles.Avatar}
          />
          <Text style={styles.nameDrawer}>{userData?.display_name}</Text>
          <Text style={styles.emailDrawer}>{userData?.email}</Text>
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
          <Pressable
            onPress={() => {
              navigation.navigate('Favorite', {page: 1});
            }}
            style={styles.listNav}>
            <Ion name="md-fast-food-outline" size={25} color="#6A4029" />
            <Text style={styles.textNav}>All menu</Text>
          </Pressable>
          <View style={styles.listNav}>
            <Material name="note-text-outline" size={25} color="#6A4029" />
            <Text style={styles.textNav}>Orders</Text>
          </View>
          <View style={styles.listNavEnd}>
            <Awesome5 name="shield-alt" size={25} color="#6A4029" />
            <Text style={styles.textNav}>Security</Text>
          </View>
          <Pressable
            onPress={() => setModal(true)}
            style={styles.listNavSignOut}>
            <Text style={styles.textNav}>Sign-out</Text>
            <Awesome name="long-arrow-right" size={25} color="#6A4029" />
          </Pressable>
        </View>
      </View>
      <Modal visible={modal} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalBody}>
            <Text style={styles.textConfirm}>Are you sure?</Text>
            <View style={styles.btnWrapper}>
              <Button
                color="#6A4029"
                buttonStyle={styles.btnModal}
                onPress={() => setModal(!modal)}>
                Cancel
              </Button>
              <Button
                onPress={() => {
                  navigation.replace('Landing');
                  setTimeout(() => {
                    dispatch(logoutAction(null));
                  }, 5000);
                }}
                color="#6A4029"
                buttonStyle={styles.btnModal}>
                Yeet!
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default MyDrawer;
