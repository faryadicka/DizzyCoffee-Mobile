import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';
import Octicons from 'react-native-vector-icons/Octicons';
import {Button} from '@rneui/themed';
import ImagePicker from 'react-native-image-crop-picker';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Toast from 'react-native-toast-message';
import {createPromoAxios} from '../../modules/promos';

const CreatePromo = () => {
  const tokenRedux = useSelector(state => state.auth.dataLogin?.token);
  const [open, setOpen] = useState(false);
  const [body, setBody] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
    discount: null,
    availableEnd: new Date(),
    availableStart: moment(new Date()).format('YYYY-MM-DD'),
    couponCode: null,
  });
  const [modal, setModal] = useState({
    modalUpload: false,
  });
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
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

  const createForm = () => {
    const bodyForm = new FormData();
    bodyForm.append('productName', body.name);
    bodyForm.append('image', body.image);
    bodyForm.append('normalPrice', body.price);
    bodyForm.append('discount', body.discount);
    bodyForm.append('availableStart', body.availableStart);
    bodyForm.append('availableEnd', body.availableEnd);
    bodyForm.append('coupon', body.couponCode);
    bodyForm.append('description', body.description);
    return bodyForm;
  };

  const handleCreatePromo = () => {
    const bodyForm = createForm();
    createPromoAxios(bodyForm, tokenRedux)
      .then(res => {
        console.log(res);
        Toast.show({
          type: 'success',
          text1: 'Product created 👍',
          text2: res.data?.message,
        });
        setBody({
          name: '',
          price: '',
          deliveryInfo: '',
          description: '',
          image: '',
          categoryId: '',
        });
      })
      .catch(err => {
        console.log(err);
        Toast.show({
          type: 'error',
          text1: 'Create promo failed 😌',
          text2: err.response?.data.message,
        });
      });
  };
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerPromo}>
          <View style={styles.Photo}>
            <View style={styles.photoWrapper}>
              <Image
                source={{
                  uri: body.image
                    ? body.image.uri
                    : 'https://res.cloudinary.com/dizzycloud/image/upload/v1658740969/dizzy/uploads/vector_jqswov.jpg',
                }}
                style={styles.imageProduct}
              />
              <Pressable
                onPress={() => {
                  setModal({...modal, modalUpload: true});
                }}
                style={styles.btnUpload}>
                <Octicons name="plus" size={30} color="white" />
              </Pressable>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.labelStyle}>Name</Text>
            <TextInput
              placeholder="Input the product name"
              placeholderTextColor="#9F9F9F"
              value={body.name}
              onChangeText={name => setBody({...body, name})}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.labelStyle}>Price</Text>
            <TextInput
              placeholder="Input the promo price"
              placeholderTextColor="#9F9F9F"
              value={body.price}
              onChangeText={price => setBody({...body, price})}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.labelStyle}>Discount</Text>
            <TextInput
              placeholder="Input the promo discount"
              placeholderTextColor="#9F9F9F"
              value={body.discount}
              onChangeText={discount => setBody({...body, discount})}
            />
          </View>
          <View style={styles.dateBox}>
            <Text style={styles.labelStyle}>Expired Date</Text>
            <View style={styles.containerDate}>
              <Text style={styles.textExpired}>{`${moment(
                body.availableEnd,
              ).format('MMMM Do YYYY')}`}</Text>
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
                date={body.availableEnd}
                onConfirm={dateInput => {
                  setOpen(false);
                  setBody({...body, availableEnd: dateInput});
                  setBody({
                    ...body,
                    availableEnd: moment(dateInput).format('YYYY-MM-DD'),
                  });
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </View>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.labelStyle}>Description</Text>
            <TextInput
              placeholder="Input the promo description"
              placeholderTextColor="#9F9F9F"
              value={body.description}
              onChangeText={description => setBody({...body, description})}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.labelStyle}>Coupon</Text>
            <TextInput
              placeholder="Input the promo coupon"
              placeholderTextColor="#9F9F9F"
              value={body.couponCode}
              onChangeText={couponCode => setBody({...body, couponCode})}
            />
          </View>
          <Button
            onPress={handleCreatePromo}
            buttonStyle={styles.btnSave}
            color="#6A4029">
            Save Promo
          </Button>
        </View>
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
                buttonStyle={styles.btnUpload1}>
                Take a Photo
              </Button>
              <Button
                onPress={chooseFromLibrary}
                buttonStyle={styles.btnUpload1}>
                Choose from library
              </Button>
              <Button
                onPress={() => {
                  setModal({...modal, modalUpload: false});
                }}
                buttonStyle={styles.btnUpload1}>
                Cancel
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default CreatePromo;
