import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from '@rneui/base';
import {RadioButton} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import {formatToCurrency} from '../../helpers/formatToCurrency';
import Awesome from 'react-native-vector-icons/FontAwesome';
import CreditCard from '../../assets/img/credit.png';
import {paymentAxios} from '../../modules/payment';
import {clearCartAction} from '../../redux/actionCreator/cart';
import ModalNav from '../../components/ModalNav/ModalNav/index';
import {sendLocalNotification} from '../../helpers/notifications';

const Confirm = ({navigation}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const token = useSelector(state => state.auth.dataLogin?.token);
  const [paymentMethods, setPaymentMethods] = useState('Card');
  const [showModal, setShowModal] = useState(false);
  const [isError, setIseError] = useState(false);
  const [message, setMessage] = useState({
    err: '',
    success: '',
  });
  // const dispatch = useDispatch();
  const handlePayment = () => {
    const body = {
      paymentMethods,
      size: cart.size,
      time: '',
      deliveryMethods: cart.delivery,
      quantity: cart.qty,
      productsId: cart.id,
      total: Number(cart.total),
      subtotal: 0,
      shipping: 0,
      taxAndFees: 0,
      phone: cart.phone,
      address: cart.address,
    };
    paymentAxios(body, token)
      .then(res => {
        console.log(res);
        setIseError(false);
        setMessage({...message, success: 'Payment Success!'});
        setShowModal(true);
        sendLocalNotification(
          'Payment Status',
          'Payment successfully, please check your history for detail!',
        );
        dispatch(clearCartAction());
      })
      .catch(err => {
        console.log(err);
        setMessage({...message, err: err.response?.data.message});
        setIseError(true);
        setShowModal(true);
      });
  };
  return (
    <View>
      <ScrollView scrollEnabled={true} style={styles.confirmContainer}>
        <Text style={styles.label}>Products</Text>
        <View style={styles.cardList}>
          <View style={styles.flexList}>
            <Image source={{uri: cart.image}} style={styles.imageList} />
            <View>
              <Text>{cart.name}</Text>
              <Text>x {cart.qty}</Text>
              <Text>{cart.size}</Text>
            </View>
          </View>
          <Text>IDR {formatToCurrency(cart.price)}</Text>
        </View>
        <Text style={styles.label}>Payment Method</Text>
        <View style={styles.cardMethods}>
          <View style={styles.lableRadio}>
            <RadioButton
              color="#6A4029"
              value="Card"
              status={paymentMethods === 'Card' ? 'checked' : 'unchecked'}
              onPress={() => setPaymentMethods('Card')}
            />
            <View style={[styles.card, styles.box]}>
              <Awesome name="credit-card" color="white" size={15} />
            </View>
            <Text style={styles.textDelivery}>Card</Text>
          </View>
          <View style={[styles.lableRadio, styles.border]}>
            <RadioButton
              color="#6A4029"
              value="Bank"
              status={paymentMethods === 'Bank' ? 'checked' : 'unchecked'}
              onPress={() => setPaymentMethods('Bank')}
            />
            <View style={[styles.box, styles.bank]}>
              <Awesome name="bank" color="white" size={15} />
            </View>
            <Text style={styles.textDelivery}>Bank Account</Text>
          </View>
          <View style={styles.lableRadio}>
            <RadioButton
              color="#6A4029"
              value="COD"
              status={paymentMethods === 'COD' ? 'checked' : 'unchecked'}
              onPress={() => setPaymentMethods('COD')}
            />
            <View style={[styles.box, styles.delivery]}>
              <Awesome name="truck" color="white" size={15} />
            </View>
            <Text style={styles.textDelivery}>Cash on delivery</Text>
          </View>
        </View>
        <Text style={styles.label}>My Card</Text>
        <View style={styles.credit}>
          <Image source={CreditCard} />
        </View>
        <View style={styles.rowTotal}>
          <Text style={styles.total}>Total</Text>
          <Text style={[styles.total, styles.bold]}>IDR {cart.total}</Text>
        </View>
        <Button
          onPress={handlePayment}
          color="#6A4029"
          title="Proceed payment"
          buttonStyle={styles.btnPayment}
        />
      </ScrollView>
      <ModalNav
        show={showModal}
        hide={() => setShowModal(!showModal)}
        navigation={navigation}
        title={!isError ? message.success : message.err}
        status={isError}
        route="Main"
        setShow={setShowModal}
      />
    </View>
  );
};

export default Confirm;
