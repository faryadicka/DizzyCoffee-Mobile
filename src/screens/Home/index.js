import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import styles from './styles';
import Bsearch from '../../assets/img/bsearch.png';
import {getProductsAxios, getFavoriteAxios} from '../../modules/products';
import CardProducts from '../../components/CardProducts';

const Home = ({route, navigation}) => {
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
  const getFavoriteHome = favorite => {
    getFavoriteAxios(favorite)
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
  console.log(route);
  return (
    <View style={styles.homeContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.textHome}>A good coffee is {'\n'}a good day</Text>
        {true ? (
          <View style={styles.inputField}>
            <Image source={Bsearch} />
            <TextInput
              style={styles.inputSearch}
              placeholderTextColor="black"
              placeholder="Search"
              onChangeText={search =>
                setParamsCostum({...paramsCostum, search})
              }
            />
          </View>
        ) : null}
      </View>
      <View style={styles.categoryWrap}>
        <Text
          onPress={() => {
            navigation.navigate('Main', {favorite: 'favorite'});
          }}
          style={route.params?.favorite ? styles.textActive : styles.textColor}>
          Favorite
        </Text>
        <Text
          onPress={() => {
            navigation.navigate('Main', {category: 1});
          }}
          style={
            route.params?.category === 1 ? styles.textActive : styles.textColor
          }>
          Coffee
        </Text>
        <Text
          onPress={() => {
            navigation.navigate('Main', {category: 2});
          }}
          style={
            route.params?.category === 2 ? styles.textActive : styles.textColor
          }>
          Non Coffee
        </Text>
        <Text
          onPress={() => {
            navigation.navigate('Main', {category: 3});
          }}
          style={
            route.params?.category === 3 ? styles.textActive : styles.textColor
          }>
          Foods
        </Text>
      </View>
      <View style={styles.viewAll}>
        <Text style={styles.textViewAll}>All</Text>
        <Text
          onPress={() => {
            navigation.navigate('Favorite');
          }}
          style={styles.textViewAll}>
          See more
        </Text>
      </View>
      <View style={styles.cardsWrap}>
        {route.params?.favorite === 'favorite'
          ? favorite.map(item => (
              <CardProducts
                key={item.id}
                image={item.image}
                title={item.name}
                price={item.price}
                id={item.id}
                navigation={navigation}
              />
            ))
          : products.map(item => (
              <CardProducts
                key={item.id}
                image={item.image}
                title={item.name}
                price={item.price}
                id={item.id}
                navigation={navigation}
              />
            ))}
      </View>
    </View>
  );
};

export default Home;
