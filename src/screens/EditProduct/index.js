import React, {useEffect, useState} from 'react';
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
import {updateProductAxios, getDetailAxios} from '../../modules/products';
import Toast from 'react-native-toast-message';

const EditProduct = ({route}) => {
  const tokenRedux = useSelector(state => state.auth.dataLogin?.token);
  const [body, setBody] = useState({
    name: '',
    price: '',
    deliveryInfo: '',
    description: '',
    image: null,
    categoryId: null,
    id: '',
  });
  const [modal, setModal] = useState({
    modalUpload: false,
  });
  const getDetailProduct = id => {
    getDetailAxios(id)
      .then(res => {
        setBody({
          name: res.data?.data.name,
          price: res.data?.data.price.toString(),
          deliveryInfo: res.data?.data.delivery_info,
          description: res.data?.data.description,
          image: {
            uri: res.data?.data.image,
            type: 'image/jpeg',
            name: 'default.jpg',
          },
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
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
  const createForm = () => {
    const bodyForm = new FormData();
    bodyForm.append('name', body.name);
    bodyForm.append('image', body.image);
    bodyForm.append('price', body.price);
    bodyForm.append('deliveryInfo', body.deliveryInfo);
    bodyForm.append('description', body.description);
    bodyForm.append('categoryId', body.categoryId);
    return bodyForm;
  };
  const handleUpdateProduct = () => {
    const bodyForm = createForm();
    updateProductAxios(route.params.id, bodyForm, tokenRedux)
      .then(res => {
        console.log(res);
        Toast.show({
          type: 'success',
          text1: 'Product updated!',
          text2: res.data?.message,
        });
      })
      .catch(err => {
        console.log(err);
        Toast.show({
          type: 'error',
          text1: 'Update product failed 😌',
          text2: err.response?.data.message,
        });
      });
  };

  useEffect(() => {
    getDetailProduct(route.params.id);
  }, [route]);
  return (
    <>
      <ScrollView>
        <View style={styles.containerNew}>
          <View style={styles.Photo}>
            <View style={styles.photoWrapper}>
              <Image
                source={
                  body.image
                    ? {
                        uri: body.image.uri,
                      }
                    : null
                }
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
              placeholder="Input the product price"
              placeholderTextColor="#9F9F9F"
              value={body.price}
              onChangeText={price => setBody({...body, price})}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.labelStyle}>Delivery info</Text>
            <TextInput
              placeholder="Type delivery information"
              placeholderTextColor="#9F9F9F"
              value={body.deliveryInfo}
              onChangeText={deliveryInfo => setBody({...body, deliveryInfo})}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.labelStyle}>Description</Text>
            <TextInput
              placeholder="Describe your product"
              placeholderTextColor="#9F9F9F"
              value={body.description}
              onChangeText={description => setBody({...body, description})}
            />
          </View>
          <View style={styles.buttonBox}>
            <Text style={styles.labelStyle}>Select Category</Text>
            <View style={styles.btnWrapperCategory}>
              <Button
                onPress={() => setBody({...body, categoryId: 1})}
                buttonStyle={
                  body.categoryId === 1 ? styles.btnActive : styles.btnCategory
                }>
                COFFEE
              </Button>
              <Button
                onPress={() => setBody({...body, categoryId: 2})}
                buttonStyle={
                  body.categoryId === 2 ? styles.btnActive : styles.btnCategory
                }>
                NON COFFEE
              </Button>
              <Button
                onPress={() => setBody({...body, categoryId: 3})}
                buttonStyle={
                  body.categoryId === 3 ? styles.btnActive : styles.btnCategory
                }>
                FOOD
              </Button>
            </View>
          </View>
          <Button
            onPress={handleUpdateProduct}
            buttonStyle={styles.btnSave}
            color="#6A4029">
            Save Product
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

export default EditProduct;
