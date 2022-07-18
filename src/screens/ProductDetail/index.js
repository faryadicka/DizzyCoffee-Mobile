import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from '@rneui/base';
import styles from './styles';
import {getDetailAxios} from '../../modules/products';
import {formatToCurrency} from '../../helpers/formatToCurrency';
import {useDispatch} from 'react-redux';
import {addCartAction} from '../../redux/actionCreator/cart';
import ModalNav from '../../components/ModalNav/ModalNav';

function ProductDetail({route, navigation}) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [showModal, setShowModal] = useState(false);
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
    <>
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
            setShowModal(true);
          }}
          title="Add to cart"
          color="#6A4029"
          buttonStyle={styles.btnCart}
        />
      </View>
      <ModalNav
        show={showModal}
        hide={() => setShowModal(!showModal)}
        navigation={navigation}
        title="Product added to cart successfully"
        status={false}
        route="Cart"
        setShow={setShowModal}
      />
    </>
  );
}

export default ProductDetail;
