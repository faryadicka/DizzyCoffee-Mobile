import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, View, Image, Pressable} from 'react-native';
import {Button} from '@rneui/base';
import styles from './styles';
import {formatToCurrency} from '../../helpers/formatToCurrency';
import {addCartAction} from '../../redux/actionCreator/cart';
import Ant from 'react-native-vector-icons/AntDesign';

const Cart = ({navigation}) => {
  const id = useSelector(state => state.cart.id);
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const cart = useSelector(state => state.cart);
  const size =
    cart.size === 'Regular'
      ? 'R'
      : cart.size === 'Large'
      ? 'L'
      : cart.size === 'Extra Large'
      ? 'XL'
      : null;
  return (
    <View style={styles.containerCart}>
      <View style={styles.containerCard}>
        <Image source={{uri: cart.image}} style={styles.imageCart} />
        <View>
          <Text style={styles.titleCart}>{cart.name}</Text>
          <Text style={styles.sizeCart}>
            {size} ({cart.size})
          </Text>
          <View style={styles.addInfo}>
            <Text>
              IDR{' '}
              {qty >= 0
                ? formatToCurrency(cart.price * qty)
                : formatToCurrency(cart.price)}
            </Text>
            <View style={styles.qtyCart}>
              <Pressable onPress={() => (qty <= 0 ? null : setQty(qty - 1))}>
                <Ant name="minus" color="white" />
              </Pressable>
              <Text style={styles.qty}>{qty}</Text>
              <Pressable
                onPress={() => {
                  setQty(qty + 1);
                }}>
                <Ant name="plus" color="white" />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <Button
        onPress={() => {
          dispatch(
            addCartAction(
              cart.name,
              cart.price,
              cart.size,
              cart.image,
              id,
              Number(formatToCurrency(cart.price * qty)),
              qty,
            ),
          );
          navigation.navigate('Payment');
        }}
        title="Confirm and Checkout"
        color="#6A4029"
        buttonStyle={styles.btnConfirm}
      />
    </View>
  );
};

export default Cart;