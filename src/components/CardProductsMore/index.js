import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './style';
import {formatToCurrency} from '../../helpers/formatToCurrency';

const CardProductsMore = ({id, image, title, price, navigation}) => {
  return (
    <Pressable
      style={[styles.cardContainer, styles.card]}
      onPress={() => {
        navigation.navigate('ProductDetail', {id});
      }}>
      <Image source={{uri: image}} style={styles.imageProduct} />
      <Text style={styles.titleProduct}>{title}</Text>
      <Text style={styles.priceProduct}>IDR {formatToCurrency(price)}</Text>
    </Pressable>
  );
};

export default CardProductsMore;
