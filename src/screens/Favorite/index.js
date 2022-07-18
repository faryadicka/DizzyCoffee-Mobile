import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import Imagep from '../../assets/img/product.png';
import {getProductsAxios, getFavoriteAxios} from '../../modules/products';
import CardProductsMore from '../../components/CardProductsMore';

function SeeMore({route, navigation}) {
  const [products, setProducts] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [errMsg, setErrMsg] = useState([]);
  const [paramsCostum, setParamsCostum] = useState({
    category: '',
    search: '',
    sort: '',
    order: '',
    favorite: 'favorite',
  });
  const {params = paramsCostum} = route;
  const titleScreen =
    route.params?.favorite === 'favorite'
      ? 'Favorite'
      : route.params?.category === 1
      ? 'Coffee'
      : route.params?.category === 2
      ? 'Non Coffee'
      : 'Foods';
  const getFavoriteHome = favorites => {
    getFavoriteAxios(favorites)
      .then(res => {
        console.log(res);
        setFavorite(res.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getProductsHome = (category, search, sort, order) => {
    getProductsAxios(category, search, sort, order)
      .then(res => {
        console.log(res);
        setProducts(res.data?.data);
      })
      .catch(err => {
        console.log(err);
        setErrMsg(err.response?.data.message);
      });
  };
  useEffect(() => {
    getProductsHome(params.category, params.search, params.sort, params.order);
    getFavoriteHome(params.favorite);
  }, [
    params.category,
    params.search,
    params.sort,
    params.order,
    params.favorite,
  ]);
  return (
    <ScrollView style={styles.productsContainer}>
      <Text style={styles.titleProducts}>{titleScreen}</Text>
      <View style={styles.wrapperProducts}>
        {route.params?.favorite === 'favorite'
          ? favorite.map(item => (
              <CardProductsMore
                key={item.id}
                image={item.image}
                title={item.name}
                price={item.price}
                id={item.id}
                navigation={navigation}
              />
            ))
          : products.map(item => (
              <CardProductsMore
                key={item.id}
                image={item.image}
                title={item.name}
                price={item.price}
                id={item.id}
                navigation={navigation}
              />
            ))}
      </View>
    </ScrollView>
  );
}

export default SeeMore;
