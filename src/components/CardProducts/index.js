import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import {formatToCurrency} from '../../helpers/formatToCurrency';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

function CardProducts({id, image, title, price, navigation, params}) {
  console.log(params);
  return (
    <Pressable
      onPress={() => {
        if (params !== 'promo') {
          return navigation.navigate('ProductDetail', {id});
        }
      }}>
      <View style={styles.cardContainer}>
        <Pressable
          onPress={() => {
            if (params === 'promo') {
              return navigation.navigate('EditPromo', {id});
            }
            navigation.navigate('EditProduct', {id});
          }}
          style={styles.editButton}>
          <EvilIcons name="pencil" size={30} color="white" />
        </Pressable>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>IDR {formatToCurrency(price)}</Text>
      </View>
    </Pressable>
  );
}

export default CardProducts;
