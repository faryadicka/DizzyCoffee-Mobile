import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import {formatToCurrency} from '../../helpers/formatToCurrency';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

function CardProducts({id, image, title, price, navigation, params, discount}) {
  return (
    <Pressable
      onPress={() => {
        if (params !== 'promo') {
          return navigation.navigate('ProductDetail', {id});
        }
      }}>
      <View style={styles.cardContainer}>
        {params === 'promo' ? (
          <View style={styles.discount}>
            <Text style={styles.discountText}>{discount} %</Text>
          </View>
        ) : null}
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
        <Image
          source={{uri: image}}
          style={params === 'promo' ? styles.imagePromo : styles.image}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>
          IDR{' '}
          {params === 'promo'
            ? `${formatToCurrency(price - (price * discount) / 100)}`
            : `${formatToCurrency(price)}`}
        </Text>
        {params === 'promo' ? (
          <Text style={styles.normalPrice}>IDR {formatToCurrency(price)}</Text>
        ) : null}
      </View>
    </Pressable>
  );
}

export default CardProducts;
