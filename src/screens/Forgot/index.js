import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground} from 'react-native';
import {forgotAxios} from '../../modules/auth';
import {Button} from '@rneui/base';
import styles from './styles';
import bgImage from '../../assets/img/bgforgot.png';
import ModalNav from '../../components/ModalNav/ModalNav/index';

const Forgot = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isError, setIseError] = useState(false);
  const [message, setMessage] = useState({
    err: '',
    success: '',
  });

  const handleForgot = () => {
    const body = {
      email,
    };
    forgotAxios(body)
      .then(res => {
        console.log(res.data?.message);
        setMessage({...message, success: res.data?.message});
        setShowModal(true);
        setIseError(false);
      })
      .catch(err => {
        console.log(err);
        setMessage({...message, err: err.response?.data.message});
        setShowModal(true);
        setIseError(true);
      });
  };
  return (
    <>
      <View style={styles.containerForgot}>
        <ImageBackground source={bgImage} style={styles.BgImage}>
          <View style={styles.bgShadow}>
            <Text style={styles.forgotHeader}>Don't {'\n'} Worry!</Text>
            <Text style={styles.forgotSub}>
              Enter your email adress to {'\n'} get reset password link
            </Text>
            <View style={styles.inputBox}>
              <TextInput
                placeholderTextColor="white"
                style={styles.inputField}
                placeholder="Enter your email adress"
                onChangeText={text => setEmail(text)}
              />
            </View>
            <View style={styles.Button}>
              <Button
                color="#6A4029"
                title="Send link"
                buttonStyle={styles.btnStyle}
                onPress={handleForgot}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
      <ModalNav
        show={showModal}
        hide={() => setShowModal(false)}
        navigation={navigation}
        title={!isError ? message.success : message.err}
        status={isError}
        route="Login"
        setShow={setShowModal}
      />
    </>
  );
};

export default Forgot;
