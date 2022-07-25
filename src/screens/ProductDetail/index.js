import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Button} from '@rneui/base';
import styles from './styles';
import {getDetailAxios} from '../../modules/products';
import {formatToCurrency} from '../../helpers/formatToCurrency';
import {useDispatch} from 'react-redux';
import {addCartAction} from '../../redux/actionCreator/cart';
import Toast from 'react-native-toast-message';

function ProductDetail({route}) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [size, setSize] = useState('');
  const getDetail = id => {
    getDetailAxios(id)
      .then(res => {
        setProduct(res.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    getDetail(route.params.id);
  }, [route]);
  return (
    <ScrollView>
      <View style={styles.containerDetail}>
        <Image source={{uri: product.image}} style={styles.image} />
        <Text style={styles.titleName}>{product.name}</Text>
        <Text style={styles.price}>
          IDR {product?.price ? formatToCurrency(product.price) : null}
        </Text>
      </View>
      <View style={styles.deliveryInfo}>
        <Text style={styles.titleDelivery}>Delivery Info</Text>
        <Text style={styles.descDelivery}>
          Delivered only on monday until friday from{' '}
          {product.start_hour?.slice(1, 2)} am to{' '}
          {product.end_hour?.slice(1, 2)} pm
        </Text>
        <Text style={styles.titleDesc}>Description</Text>
        <Text style={styles.descDelivery}>{product.description}</Text>
      </View>
      <Text style={styles.Choose}>Choose size product :</Text>
      <View style={styles.wrapBtnSize}>
        <Button
          onPress={() => setSize('Regular')}
          size="sm"
          title="R"
          color="#FFBA33"
          buttonStyle={size === 'Regular' ? styles.btnActive : styles.btnSize}
        />
        <Button
          onPress={() => setSize('Large')}
          size="sm"
          title="L"
          color="#FFBA33"
          buttonStyle={size === 'Large' ? styles.btnActive : styles.btnSize}
        />
        <Button
          onPress={() => setSize('Extra Large')}
          size="sm"
          title="XL"
          color="#FFBA33"
          buttonStyle={
            size === 'Extra Large' ? styles.btnActive : styles.btnSize
          }
        />
      </View>
      <View style={styles.deliveryInfo}>
        <Button
          onPress={() => {
            dispatch(
              addCartAction(
                product.name,
                product.price,
                size,
                product.image,
                route.params.id,
              ),
            );
            Toast.show({
              type: 'success',
              text1: 'Success ',
              text2: 'Please check your cart to next proccess!',
            });
          }}
          title="Add to cart"
          color="#6A4029"
          buttonStyle={styles.btnCart}
        />
      </View>
    </ScrollView>
  );
}

export default ProductDetail;
