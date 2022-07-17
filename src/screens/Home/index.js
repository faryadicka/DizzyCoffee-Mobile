import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import styles from './styles';
import Bsearch from '../../assets/img/bsearch.png';

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.textHome}>A good coffee is {'\n'}a good day</Text>
        {true ? (
          <View style={styles.inputField}>
            <Image source={Bsearch} />
            <TextInput placeholderTextColor="black" placeholder="Search" />
          </View>
        ) : null}
      </View>
      <Text style={styles.textColor}>Favorite Products</Text>
    </View>
  );
};

export default Home;
