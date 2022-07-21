import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground, ScrollView} from 'react-native';
import {forgotAxios, resetAxios} from '../../modules/auth';
import {Button} from '@rneui/base';
import styles from './styles';
import bgImage from '../../assets/img/bgforgot.png';
import ModalNav from '../../components/ModalNav/ModalNav/index';
import Feather from 'react-native-vector-icons/Feather';

const Forgot = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [reset, setReset] = useState(false);
  const [isError, setIseError] = useState(false);
  const [email, setEmail] = useState('');
  const [resetPass, setResetPass] = useState({
    email: '',
    new: '',
    otp: '',
  });
  const [message, setMessage] = useState({
    err: '',
    success: '',
  });

  const handlerReset = () => {
    const body = {
      email: resetPass.email,
      newPassword: resetPass.new,
      otp: resetPass.otp,
    };
    resetAxios(body)
      .then(res => {
        console.log(res);
        setShowModal(true);
        setResetPass({email: '', new: '', otp: ''});
        setMessage({...message, success: res.data?.message});
        setIseError(false);
      })
      .catch(err => {
        console.log(err);
        setIseError(true);
        setMessage({...message, err: err.response?.data.message});
        setShowModal(true);
      });
  };

  const handleForgot = () => {
    const body = {
      email,
    };
    forgotAxios(body)
      .then(res => {
        console.log(res.data?.message);
        setMessage({...message, success: res.data?.message});
        setIseError(false);
        setEmail('');
        setShowMsg(true);
        setTimeout(() => {
          setReset(!reset);
        }, 4000);
      })
      .catch(err => {
        console.log(err);
        setMessage({...message, err: err.response?.data.message});
        setShowMsg(true);
        setIseError(true);
      });
  };
  return (
    <>
      {!reset ? (
        <View keyboardShouldPersistTaps="always" style={styles.containerForgot}>
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
              {showMsg ? (
                <>
                  {!isError ? (
                    <Text style={styles.textSuccess}>{message.success}!</Text>
                  ) : (
                    <Text style={styles.textErr}>{message.err}</Text>
                  )}
                </>
              ) : null}
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
      ) : (
        <View keyboardShouldPersistTaps="always" style={styles.containerForgot}>
          <ImageBackground source={bgImage} style={styles.BgImage}>
            <View style={styles.bgShadow}>
              <Text style={styles.ResetHeader}>Reset Password</Text>
              <Text style={styles.forgotSub}>
                Enter your new password & confirm password, and don't forget
                yout OTP code!
              </Text>
              <View style={styles.inputBox}>
                <TextInput
                  placeholderTextColor="white"
                  style={styles.inputField}
                  placeholder="Enter your email"
                  onChangeText={passInput =>
                    setResetPass({...resetPass, email: passInput})
                  }
                />
              </View>
              <View style={styles.inputBox}>
                <TextInput
                  secureTextEntry={!showPass}
                  placeholderTextColor="white"
                  style={styles.inputField}
                  placeholder="Enter your new password"
                  onChangeText={passInput =>
                    setResetPass({...resetPass, new: passInput})
                  }
                />
                <Feather
                  onPress={() => {
                    setShowPass(!showPass);
                  }}
                  name={showPass ? 'eye' : 'eye-off'}
                  size={23}
                  color="white"
                />
              </View>
              <View style={styles.inputBox}>
                <TextInput
                  keyboardType="numeric"
                  secureTextEntry={!showOTP}
                  placeholderTextColor="white"
                  style={styles.inputField}
                  placeholder="Enter your OTP code"
                  onChangeText={otpInput =>
                    setResetPass({...resetPass, otp: otpInput})
                  }
                />
                <Feather
                  onPress={() => {
                    setShowOTP(!showOTP);
                  }}
                  name={showOTP ? 'eye' : 'eye-off'}
                  size={23}
                  color="white"
                />
              </View>
              <View style={styles.Button}>
                <Button
                  color="#6A4029"
                  title="Reset Password"
                  buttonStyle={styles.btnStyle}
                  onPress={handlerReset}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      )}
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
