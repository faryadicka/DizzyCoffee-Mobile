import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground} from 'react-native';
import {Button} from '@rneui/themed';
import styles from './styles';
import bgImage from '../../assets/img/bgregister.png';

const CustomTitle = () => {
  return (
    <View>
      <Text style={styles.btnTitle}>Create with Google</Text>
    </View>
  );
};
const Register = () => {
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
  };
  return (
    <View style={styles.containerRegister}>
      <ImageBackground source={bgImage} style={styles.BgImage}>
        <View style={styles.bgShadow}>
          <Text style={styles.headerRegister}>Sign Up</Text>
          <View style={styles.containerInput}>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.inputField}
                placeholder="Enter your email adress"
                onChange={email => setInput({...input, email})}
              />
            </View>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.inputField}
                placeholder="Enter your password"
                onChange={password => setInput({...input, password})}
              />
            </View>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.inputField}
                placeholder="Enter your phone number"
                onChange={phone => setInput({...input, phone})}
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
                onPress={handleRegister}
                title={<CustomTitle />}
                color="#FFF"
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Register;
