import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import styles from './styles';
import {View, Image, Text, Pressable} from 'react-native';
import {Button} from '@rneui/base';
import {getProfileAxios} from '../../modules/user';
import Avatar from '../../assets/img/avatar.png';
import Ion from 'react-native-vector-icons/EvilIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {getAllhistories} from '../../modules/history';

const Profile = () => {
  const tokenRedux = useSelector(state => state.auth.dataLogin?.token);
  const userData = useSelector(state => state.users.dataUser);
  const [profile, setProfile] = useState({});
  const [histories, setHistories] = useState([]);
  const getProfile = token => {
    getProfileAxios(token)
      .then(res => {
        setProfile(res.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getHistories = token => {
    getAllhistories(token)
      .then(res => {
        setHistories(res.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProfile(tokenRedux);
    getHistories(tokenRedux);
  }, [tokenRedux]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerProfile}>
        <View style={styles.containerPhoto}>
          <Image
            source={
              profile?.image_profile ? {uri: profile?.image_profile} : Avatar
            }
            style={styles.imageProfile}
          />
          <Pressable style={styles.btnEdit}>
            <Ion name="pencil" size={20} color="white" />
          </Pressable>
        </View>
        <Text style={styles.fullname}>
          {profile.display_name ? `${profile.display_name}` : null}
        </Text>
        <Text style={styles.Description}>
          {profile.email}
          {'\n'}
          {`+62 ${profile.phone?.slice(1)}`}
          {'\n'}
          {profile.address ? profile.address : null}
        </Text>
      </View>
      <View style={styles.containerOrder}>
        <View style={styles.orderText}>
          <Text style={styles.order}>Order History</Text>
          <Text style={styles.more}>See more</Text>
        </View>
        <ScrollView horizontal={true}>
          {histories.length >= 0 ? (
            <>
              {histories.map(item => (
                <Image
                  key={item.id}
                  source={{uri: item.image}}
                  style={styles.imageOrder}
                />
              ))}
            </>
          ) : (
            <Text style={styles.noneProduct}>No order purchased yet</Text>
          )}
        </ScrollView>
      </View>
      <View style={styles.containerEdit}>
        <Pressable style={styles.btnEditProfile}>
          <Text style={styles.btnText}>Edit Password</Text>
          <Ion name="chevron-right" size={20} color="#6A4029" />
        </Pressable>
        <Pressable style={styles.btnEditProfile}>
          <Text style={styles.btnText}>FAQ</Text>
          <Ion name="chevron-right" size={20} color="#6A4029" />
        </Pressable>
        <Pressable style={styles.btnEditProfile}>
          <Text style={styles.btnText}>Help</Text>
          <Ion name="chevron-right" size={20} color="#6A4029" />
        </Pressable>
        <Button title="Save" color="#6A4029" buttonStyle={styles.btnSave} />
      </View>
    </ScrollView>
  );
};

export default Profile;
