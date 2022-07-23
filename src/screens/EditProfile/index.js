import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  Image,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  Modal,
} from 'react-native';
import moment from 'moment';
import {RadioButton} from 'react-native-paper';
import {Button} from '@rneui/base';
import {getProfileAxios, updateProfileAxios} from '../../modules/user';
import ModalNav from '../../components/ModalNav/ModalNav/index';
import DatePicker from 'react-native-date-picker';
import Avatar from '../../assets/img/avatar.png';
import Ion from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';
import ImagePicker from 'react-native-image-crop-picker';

const EditProfile = ({navigation}) => {
  const tokenRedux = useSelector(state => state.auth.dataLogin?.token);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState({
    modalUpload: false,
    modalStatus: false,
  });
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState('');
  const [body, setBody] = useState({
    phone: '',
    display: '',
    birthdate: '',
    address: '',
    gender: 'Male',
    image: null,
  });
  const [message, setMessage] = useState({
    success: '',
    error: '',
  });
  const getProfile = token => {
    getProfileAxios(token)
      .then(res => {
        setEmail(res.data?.data.email);
        setBody({
          phone: res.data?.data.phone,
          display: res.data?.data.display_name,
          birthdate: res.data?.data.birthdate,
          address: res.data?.data.address,
          gender: res.data?.data.gender,
          image: {uri: res.data?.data.image_profile},
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProfile(tokenRedux);
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
      setModal({...modal, modalUpload: false});
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
      setModal({...modal, modalUpload: false});
    });
  };

  const uploadImage = () => {
    const bodyForm = new FormData();
    bodyForm.append('phone', body.phone);
    bodyForm.append('display', body.display);
    bodyForm.append('address', body.address);
    bodyForm.append('birthdate', body.birthdate);
    bodyForm.append('image', body.image);
    bodyForm.append('gender', body.gender);
    return bodyForm;
  };
  const handlerUpdateProfile = () => {
    const bodyForm = uploadImage();
    console.log(body.image);
    updateProfileAxios(bodyForm, tokenRedux)
      .then(res => {
        console.log(res);
        setIsError(false);
        setMessage({...message, success: res.data?.message});
        setModal({...modal, modalStatus: true});
      })
      .catch(err => {
        setIsError(true);
        console.log(err);
        setMessage({...message, error: err.response?.data.message});
        setModal({...modal, modalStatus: true});
      });
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.containerEdit}>
          <View style={styles.containerPhoto}>
            <Image
              source={{
                uri: body.image
                  ? body.image.uri
                  : 'https://res.cloudinary.com/dizzycloud/image/upload/v1658539666/dizzy/uploads/avatar_uqrkxm.png',
              }}
              style={styles.imageProfile}
            />
            <Pressable
              onPress={() => {
                setModal({...modal, modalUpload: true});
              }}
              style={styles.btnEdit}>
              <Ion name="pencil" size={20} color="white" />
            </Pressable>
          </View>
        </View>
        <View style={styles.containerTextEdit}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Name :</Text>
            <TextInput
              value={body.display}
              placeholder="Input your fullname"
              onChangeText={display => setBody({...body, display})}
            />
          </View>
          <View style={styles.radioBox}>
            <View style={styles.radio}>
              <RadioButton
                color="#6A4029"
                value="Male"
                status={body.gender === 'Male' ? 'checked' : 'unchecked'}
                onPress={() => setBody({...body, gender: 'Male'})}
              />
              <Text style={styles.labelGender}>Male</Text>
            </View>
            <View style={styles.radio}>
              <RadioButton
                color="#6A4029"
                value="Female"
                status={body.gender === 'Female' ? 'checked' : 'unchecked'}
                onPress={() => setBody({...body, gender: 'Female'})}
              />
              <Text style={styles.labelGender}>Female</Text>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Email Address :</Text>
            <TextInput
              editable={false}
              value={email}
              placeholder="Input your Email Address"
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Phone Number :</Text>
            <TextInput
              value={body.phone}
              placeholder="Input your phone number"
              onChangeText={phone => setBody({...body, phone})}
            />
          </View>
          <View style={styles.dateBox}>
            <Text style={styles.label}>Date of Birth :</Text>
            <View style={styles.containerDate}>
              <Text>{`${moment(body.birthdate).format('MMMM Do YYYY')}`}</Text>
              <Fontisto
                name="date"
                size={20}
                onPress={() => setOpen(true)}
                style={styles.dateLogo}
              />
              <DatePicker
                modal
                mode="date"
                open={open}
                date={date}
                onConfirm={dateInput => {
                  setOpen(false);
                  setDate(dateInput);
                  setBody({
                    ...body,
                    birthdate: moment(dateInput).format('YYYY-MM-DD'),
                  });
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </View>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Delivery Adress :</Text>
            <TextInput
              value={body.address}
              placeholder="Input your Delivery Address"
              onChangeText={address => setBody({...body, address})}
            />
          </View>
          <Button
            onPress={handlerUpdateProfile}
            title="Save and Update"
            color="#6A4029"
            buttonStyle={styles.btnSave}
          />
        </View>
        <ModalNav
          show={modal.modalStatus}
          hide={() => setModal({...modal, modalStatus: false})}
          navigation={navigation}
          title={isError ? message.error : message.success}
          status={true}
          setShow={setModal}
        />
      </ScrollView>
      <Modal
        visible={modal.modalUpload}
        transparent={true}
        animationType="slide">
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
                  setModal({...modal, modalUpload: false});
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

export default EditProfile;
