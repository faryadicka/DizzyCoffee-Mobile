import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import {formatToCurrency} from '../../helpers/formatToCurrency';

function CardProducts({id, image, title, price, navigation}) {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('ProductDetail', {id});
      }}>
      <View style={styles.cardContainer}>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>IDR {formatToCurrency(price)}</Text>
      </View>
    </Pressable>
  );
}

export default CardProducts;
