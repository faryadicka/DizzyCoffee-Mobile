import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from '@rneui/base';
import styles from './styles';
import {getDetailAxios} from '../../modules/products';
import {formatToCurrency} from '../../helpers/formatToCurrency';

function ProductDetail({route}) {
  const [product, setProduct] = useState({});
  const getDetail = id => {
    getDetailAxios(id)
      .then(res => {
        console.log(res);
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
    <>
      <View style={styles.containerDetail}>
        <Image source={{uri: product.image}} style={styles.image} />
        <Text style={styles.titleName}>{product.name}</Text>
        <Text style={styles.price}>IDR {formatToCurrency(product.price)}</Text>
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
      <View style={styles.deliveryInfo}>
        <Button
          title="Add to cart"
          color="#6A4029"
          buttonStyle={styles.btnCart}
        />
      </View>
    </>
  );
}

export default ProductDetail;
