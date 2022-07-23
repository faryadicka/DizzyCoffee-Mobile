import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, TextInput, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Button} from '@rneui/themed';
import {loginAction} from '../../redux/actionCreator/auth';
import styles from './styles';
import ModalNav from '../../components/ModalNav/ModalNav/index';
import bgImage from '../../assets/img/bglogin.png';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  // const tokenRedux = useSelector(state => state.auth.dataLogin?.token);
  const [showPass, setShowPass] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isError, setIseError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    err: '',
    success: '',
  });
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    const body = {
      email: input.email,
      password: input.password,
    };
    setLoading(true);
    dispatch(loginAction(body))
      .then(res => {
        console.log(res);
        setMessage({...message, success: 'Login Success!'});
        setShowModal(true);
        setIseError(false);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setShowModal(true);
        setMessage({...message, err: err.response?.data.message});
        setIseError(true);
        setLoading(false);
      });
  };
  return (
    <>
      <View keyboardShouldPersistTaps="always" style={styles.containerLogin}>
        <ImageBackground source={bgImage} style={styles.BgImage}>
          <View style={styles.bgShadow}>
            <Text style={styles.headerLogin}>Login</Text>
            <View style={styles.containerInput}>
              <View style={styles.inputBox}>
                <TextInput
                  placeholderTextColor="white"
                  value={input.email}
                  style={styles.inputField}
                  placeholder="Enter your email adress"
                  onChangeText={email => setInput({...input, email})}
                />
              </View>
              <View style={styles.inputBox}>
                <TextInput
                  placeholderTextColor="white"
                  secureTextEntry={!showPass}
                  value={input.password}
                  style={styles.inputField}
                  placeholder="Enter your password"
                  onChangeText={password => setInput({...input, password})}
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
              <Text
                onPress={() => {
                  navigation.navigate('Forgot');
                }}
                style={styles.forgotText}>
                Forgot password?
              </Text>
              <View style={styles.Button}>
                <Button
                  buttonStyle={styles.btnStyle}
                  title="Login"
                  color="#FFBA33"
                  onPress={handleLogin}
                  loading={loading}
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
        route="Home"
        setShow={setShowModal}
      />
    </>
  );
};

export default Login;
