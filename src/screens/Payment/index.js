import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Button} from '@rneui/base';
import {RadioButton} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles';
import {getProfileAxios} from '../../modules/user';
import {setCheckoutAction} from '../../redux/actionCreator/cart';

const Payment = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [change, setChange] = useState(false);
  const [checked, setChecked] = React.useState('Dine in');
  const tokenRedux = useSelector(state => state.auth.dataLogin?.token);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const getProfile = token => {
    getProfileAxios(token)
      .then(res => {
        console.log(res);
        setPhone(res.data?.data.phone);
        setAddress(res.data?.data.address);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProfile(tokenRedux);
  }, [tokenRedux]);
  return (
    <View style={styles.paymnetContainer}>
      <Text style={styles.titlePage}>Delivery</Text>
      <View style={styles.rowAddress}>
        <Text style={styles.titleAddress}>Address details</Text>
        <Text
          style={change ? styles.activeText : null}
          onPress={() => {
            setChange(!change);
          }}>
          {change ? 'Input Active' : 'change'}
        </Text>
      </View>
      <View style={styles.addressCard}>
        <TextInput
          editable={change}
          selectTextOnFocus={change}
          multiline={true}
          numberOfLines={4}
          style={styles.textAddress}
          value={address}
          onChangeText={input => setAddress(input)}
        />
        <TextInput
          editable={change}
          selectTextOnFocus={change}
          style={styles.textPhone}
          value={phone}
          onChangeText={input => setPhone(input)}
        />
      </View>
      <View style={styles.deliveryCard}>
        <View style={styles.lableRadio}>
          <RadioButton
            color="#6A4029"
            value="Door Delivery"
            status={checked === 'Door Delivery' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Door Delivery')}
          />
          <Text style={styles.textDelivery}>Door Delivery</Text>
        </View>
        <View style={styles.lableRadio}>
          <RadioButton
            color="#6A4029"
            value="Pick up"
            status={checked === 'Pick up' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Pick up')}
          />
          <Text style={styles.textDelivery}>Pick up</Text>
        </View>
        <View style={styles.lableRadio}>
          <RadioButton
            color="#6A4029"
            value="Dine in"
            status={checked === 'Dine in' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Dine in')}
          />
          <Text style={styles.textDelivery}>Dine In</Text>
        </View>
      </View>
      <View style={styles.rowTotal}>
        <Text>Total</Text>
        <Text style={styles.titleAddress}>IDR {cart.total}</Text>
      </View>
      <Button
        onPress={() => {
          dispatch(setCheckoutAction(address, phone, checked));
          navigation.navigate('Confirm');
        }}
        title="Proceed to payment"
        color="#6A4029"
        buttonStyle={styles.btnCheckout}
      />
    </View>
  );
};

export default Payment;
