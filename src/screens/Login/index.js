import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, TextInput, ImageBackground} from 'react-native';
import {Button} from '@rneui/base';
import {loginAction} from '../../redux/actionCreator/auth';
import styles from './styles';
import bgImage from '../../assets/img/bglogin.png';

const Login = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const handleLogin = () => {
    const body = {
      email: input.email,
      password: input.password,
    };
    dispatch(loginAction(body));
  };
  return (
    <View style={styles.containerLogin}>
      <ImageBackground source={bgImage} style={styles.BgImage}>
        <View style={styles.bgShadow}>
          <Text style={styles.headerLogin}>Login</Text>
          <View style={styles.containerInput}>
            <View style={styles.inputBox}>
              <TextInput
                value={input.email}
                style={styles.inputField}
                placeholder="Enter your email adress"
                onChangeText={email => setInput({...input, email})}
              />
            </View>
            <View style={styles.inputBox}>
              <TextInput
                value={input.password}
                style={styles.inputField}
                placeholder="Enter your password"
                onChangeText={password => setInput({...input, password})}
              />
            </View>
            <Text style={styles.forgotText}>Forgot password?</Text>
            <View style={styles.Button}>
              <Button
                buttonStyle={styles.btnStyle}
                title="Login"
                color="#FFBA33"
                onPress={handleLogin}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
