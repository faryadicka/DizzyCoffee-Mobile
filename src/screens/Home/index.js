import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import styles from './styles';
import Bsearch from '../../assets/img/bsearch.png';
// import {getProductsAxios} from '../../modules/products';

const Home = ({route, navigation}) => {
  // const [products, setProducts] = useState([]);
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
      <View style={styles.categoryWrap}>
        <Text style={styles.textColor}>Favorite</Text>
        <Text
          onPress={() => {
            navigation.navigate('Main', {category: 1});
          }}
          style={styles.textColor}>
          Coffee
        </Text>
        <Text
          onPress={() => {
            navigation.navigate('Main', {category: 2});
          }}
          style={styles.textColor}>
          Non Coffee
        </Text>
        <Text
          onPress={() => {
            navigation.navigate('Main', {category: 3});
          }}
          style={styles.textColor}>
          Foods
        </Text>
      </View>
    </View>
  );
};

export default Home;
