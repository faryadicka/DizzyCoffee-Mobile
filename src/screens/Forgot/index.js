import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground} from 'react-native';
import {Button} from '@rneui/base';
import styles from './styles';
import bgImage from '../../assets/img/bgforgot.png';

const Forgot = () => {
  const [email, setEmail] = '';
  return (
    <View style={styles.containerForgot}>
      <ImageBackground source={bgImage} style={styles.BgImage}>
        <View style={styles.bgShadow}>
          <Text style={styles.forgotHeader}>Don't {'\n'} Worry!</Text>
          <Text style={styles.forgotSub}>
            Enter your email adress to {'\n'} get reset password link
          </Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter your email adress"
              onChange={text => setEmail(text)}
            />
          </View>
          <View style={styles.Button}>
            <Button
              color="#6A4029"
              title="Send link"
              buttonStyle={styles.btnStyle}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Forgot;
