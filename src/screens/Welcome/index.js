import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Button} from '@rneui/base';
import styles from './styles';
import bgImage from '../../assets/img/bgwelcome.png';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.welcomeContainer}>
      <ImageBackground source={bgImage} style={styles.BgImage}>
        <View style={styles.bgShadow}>
          <View>
            <Text style={styles.welcomeHeader}>Coffee For Everyone</Text>
            <View style={styles.welcomeBtn}>
              <Button
                buttonStyle={styles.btnStyle}
                onPress={() => {
                  navigation.navigate('Landing');
                }}
                title="Get started"
                color="#FFBA33"
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
