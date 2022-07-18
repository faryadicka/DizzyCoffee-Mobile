import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {registerAxios} from '../../modules/auth';
import {Button} from '@rneui/themed';
import styles from './styles';
import bgImage from '../../assets/img/bgregister.png';
import ModalNav from '../../components/ModalNav/ModalNav';

const CustomTitle = () => {
  return (
    <View>
      <Text style={styles.btnTitle}>Create with Google</Text>
    </View>
  );
};
const Register = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [isError, setIseError] = useState(false);
  const [message, setMessage] = useState({
    err: '',
    success: '',
  });
  const [input, setInput] = useState({
    email: '',
    password: '',
    phone: '',
  });
  const handleRegister = () => {
    const body = {
      email: input.email,
      password: input.password,
      phone: input.phone,
    };
    registerAxios(body)
      .then(res => {
        console.log(res);
        setIseError(false);
        setMessage({...message, success: 'Register Success!'});
        setShowModal(true);
      })
      .catch(err => {
        console.log(err);
        setMessage({...message, err: err.response?.data.message});
        setIseError(true);
        setShowModal(true);
      });
  };
  return (
    <>
      <View style={styles.containerRegister}>
        <ImageBackground source={bgImage} style={styles.BgImage}>
          <View style={styles.bgShadow}>
            <Text style={styles.headerRegister}>Sign Up</Text>
            <View style={styles.containerInput}>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter your email adress"
                  onChangeText={email => setInput({...input, email})}
                  value={input.email}
                />
              </View>
              <View style={styles.inputBox}>
                <TextInput
                  secureTextEntry={!showPass}
                  style={styles.inputField}
                  placeholder="Enter your password"
                  onChangeText={password => setInput({...input, password})}
                  value={input.password}
                />
                <Icon
                  name={showPass ? 'eye' : 'eye-off'}
                  size={20}
                  color="#fff"
                  onPress={() => {
                    setShowPass(!showPass);
                  }}
                />
              </View>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter your phone number"
                  onChangeText={phone => setInput({...input, phone})}
                  value={input.phone}
                />
              </View>
              <View style={styles.Button}>
                <Button
                  buttonStyle={styles.btnStyle}
                  onPress={handleRegister}
                  title="Create Account"
                  color="#6A4029"
                />
              </View>
              <View style={styles.Button}>
                <Button
                  buttonStyle={styles.btnStyle}
                  title={<CustomTitle />}
                  color="#FFF"
                />
              </View>
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

export default Register;
