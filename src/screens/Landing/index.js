import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Button} from '@rneui/base';
import styles from './styles';
import bgImage from '../../assets/img/bglanding.png';

const Home = ({navigation}) => {
  return (
    <View style={styles.homeContainer}>
      <ImageBackground source={bgImage} style={styles.bgImage}>
        <View style={styles.bgShadow}>
          <View style={styles.containerHeader}>
            <Text style={styles.homeHeader}>Welcome!</Text>
            <Text style={styles.homeSub}>
              Get a cup of coffee for free every sunday morning
            </Text>
          </View>
          <View style={styles.containerBtn}>
            <Button
              buttonStyle={styles.btnStyle}
              onPress={() => {
                navigation.navigate('Register');
              }}
              title="Create New Account"
              color="#6A4029"
            />
            <View style={styles.loginBtn}>
              <Button
                buttonStyle={styles.btnStyle}
                onPress={() => {
                  navigation.navigate('Login');
                }}
                title="Login"
                color="#FFBA33"
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
