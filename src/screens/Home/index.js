import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import styles from './styles';
import Bsearch from '../../assets/img/bsearch.png';
import {getProductsAxios, getFavoriteAxios} from '../../modules/products';
import {getUserDataAction} from '../../redux/actionCreator/users';
import {useSelector, useDispatch} from 'react-redux';
import CardProducts from '../../components/CardProducts';
import {Button} from '@rneui/base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = ({route, navigation}) => {
  const [products, setProducts] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [errMsg, setErrMsg] = useState([]);
  const tokenRedux = useSelector(state => state.auth.dataLogin?.token);
  const dispatch = useDispatch();
  const [paramsCostum, setParamsCostum] = useState({
    category: '',
    search: '',
    sort: '',
    order: '',
    favorite: 'favorite',
  });
  const {params = paramsCostum} = route;
  const getFavoriteHome = favorites => {
    getFavoriteAxios(favorites)
      .then(res => {
        // console.log(res);
        setFavorite(res.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getProductsHome = (category, search, sort, order, page, limit) => {
    getProductsAxios(category, search, sort, order, page, limit)
      .then(res => {
        console.log(res.data);
        setProducts(res.data?.data);
      })
      .catch(err => {
        console.log(err);
        setErrMsg(err.response?.data.message);
      });
  };
  useEffect(() => {
    getProductsHome(params.category);
    getFavoriteHome(params.favorite);
    dispatch(getUserDataAction(tokenRedux));
  }, [
    params.category,
    params.search,
    params.sort,
    params.order,
    params.favorite,
    dispatch,
    tokenRedux,
  ]);
  const handleSearch = () => {
    getProductsAxios(params.category, paramsCostum.search)
      .then(res => {
        console.log(res.data);
        setProducts(res.data?.data);
      })
      .catch(err => {
        console.log(err);
        setErrMsg(err.response?.data.message);
      });
  };
  return (
    <View style={styles.homeContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.textHome}>A good coffee is {'\n'}a good day</Text>
        {true ? (
          <View keyboardShouldPersistTaps style={styles.inputField}>
            <TextInput
              keyboardAppearance="dark"
              style={styles.inputSearch}
              placeholderTextColor="black"
              placeholder="Search"
              onChangeText={search =>
                setParamsCostum({...paramsCostum, search})
              }
            />
            <Button buttonStyle={styles.btnSearch} onPress={handleSearch}>
              <FontAwesome name="search" size={25} color="white" />
            </Button>
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
            route.params?.favorite === 'favorite'
              ? navigation.navigate('Favorite', {favorite: 'favorite'})
              : route.params?.category === 1
              ? navigation.navigate('Favorite', {category: 1})
              : route.params?.category === 2
              ? navigation.navigate('Favorite', {category: 2})
              : route.params?.category === 3
              ? navigation.navigate('Favorite', {category: 3})
              : navigation.navigate('Favorite');
          }}
          style={styles.textViewAll}>
          See more
        </Text>
      </View>
      <ScrollView horizontal={true} style={styles.cardsWrap}>
        {products.length <= 0 || favorite.length <= 0 ? (
          <View style={styles.Loading}>
            <Image
              source={require('../../assets/gif/loader-small.gif')}
              style={styles.loadingGif}
            />
          </View>
        ) : (
          <>
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
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
