import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import styles from './styles';
import {View, Image, Text, Pressable, Modal} from 'react-native';
import {Button} from '@rneui/base';
import {getProfileAxios, updateProfileAxios} from '../../modules/user';
import Avatar from '../../assets/img/avatar.png';
import Ion from 'react-native-vector-icons/EvilIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {getAllhistories} from '../../modules/history';
import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';

const Profile = ({navigation}) => {
  const tokenRedux = useSelector(state => state.auth.dataLogin?.token);
  const [profile, setProfile] = useState({});
  const [histories, setHistories] = useState([]);
  const [body, setBody] = useState({
    image: null,
  });
  const [modal, setModal] = useState({
    upload: false,
    status: false,
  });

  const getProfile = token => {
    getProfileAxios(token)
      .then(res => {
        setProfile(res.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getHistories = (token, limit) => {
    getAllhistories(token, limit)
      .then(res => {
        setHistories(res.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProfile(tokenRedux);
    getHistories(tokenRedux, 12);
  }, [tokenRedux]);
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setBody({
        ...body,
        image: {
          uri: image.path,
          type: image.mime,
          name: image.path,
        },
      });
      setModal({...modal, upload: false});
    });
  };
  const chooseFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setBody({
        ...body,
        image: {
          uri: image.path,
          type: image.mime,
          name: image.path,
        },
      });
      setModal({...modal, upload: false});
    });
  };

  const uploadImage = () => {
    const bodyForm = new FormData();
    bodyForm.append('image', body.image);
    return bodyForm;
  };

  const handlerUpdateProfile = () => {
    const bodyForm = uploadImage();
    updateProfileAxios(bodyForm, tokenRedux)
      .then(res => {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: res.data?.message,
        });
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: err.response?.data.message,
        });
      });
  };
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.containerProfile}>
          <View style={styles.containerPhoto}>
            <Image
              source={
                profile?.image_profile
                  ? {uri: body.image ? body.image.uri : profile?.image_profile}
                  : Avatar
              }
              style={styles.imageProfile}
            />
            <Pressable
              onPress={() => setModal({...modal, upload: true})}
              style={styles.btnEdit}>
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
            <Pressable
              onPress={() => {
                navigation.navigate('History');
              }}>
              <Text style={styles.more}>See more</Text>
            </Pressable>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
          <Pressable
            onPress={() => {
              navigation.navigate('EditPassword');
            }}
            style={styles.btnEditProfile}>
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
          <Button
            onPress={handlerUpdateProfile}
            title="Save"
            color="#6A4029"
            buttonStyle={styles.btnSave}
          />
        </View>
      </ScrollView>
      <Modal visible={modal.upload} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalBody}>
            <Text style={styles.titleModal}>Upload Photo</Text>
            <Text>Choose Your Profile Picture</Text>
            <View style={styles.containerBtnUpload}>
              <Button
                onPress={takePhotoFromCamera}
                buttonStyle={styles.btnUpload}>
                Take a Photo
              </Button>
              <Button
                onPress={chooseFromLibrary}
                buttonStyle={styles.btnUpload}>
                Choose from library
              </Button>
              <Button
                onPress={() => {
                  setModal({...modal, upload: false});
                }}
                buttonStyle={styles.btnUpload}>
                Cancel
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Profile;
