import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import styles from './styles';
import {getProductsAxios, getFavoriteAxios} from '../../modules/products';
import {getPromoAxios} from '../../modules/promos';
import {getUserDataAction} from '../../redux/actionCreator/users';
import {useSelector, useDispatch} from 'react-redux';
import CardProducts from '../../components/CardProducts';
import {Button} from '@rneui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Toast from 'react-native-toast-message';

const Home = ({route, navigation}) => {
  const [products, setProducts] = useState([]);
  const [promos, setPromos] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [errMsg, setErrMsg] = useState([]);
  const {dataLogin} = useSelector(state => state.auth);
  const role = useSelector(state => state.auth.dataLogin?.role);
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
        setFavorite(res.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getProductsHome = (category, search, sort, order, page, limit) => {
    getProductsAxios(category, search, sort, order, page, limit)
      .then(res => {
        console.log(res);
        setProducts(res.data?.data);
      })
      .catch(err => {
        console.log(err);
        setErrMsg(err.response?.data.message);
      });
  };
  const getPromosHome = () => {
    getPromoAxios()
      .then(res => {
        console.log(res);
        setPromos(res.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPromosHome();
    getProductsHome(params.category);
    getFavoriteHome(params.favorite);
  }, [params.category, params.favorite]);

  useEffect(() => {
    if (dataLogin?.token) {
      dispatch(getUserDataAction(dataLogin?.token));
    }
  }, [dataLogin, dispatch]);

  const handleSearch = () => {
    getProductsAxios(params.category, paramsCostum.search)
      .then(res => {
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
              placeholderTextColor="white"
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
        <Text
          onPress={() => {
            navigation.navigate('Main', {promo: 'promo'});
          }}
          style={route.params?.promo ? styles.textActive : styles.textColor}>
          Promo
        </Text>
      </View>
      <View style={styles.viewAll}>
        <Text style={styles.textViewAll}>All</Text>
        <Text
          onPress={() => {
            navigation.navigate('Favorite');
            // route.params?.favorite === 'favorite'
            //   ? navigation.navigate('Favorite', {favorite: 'favorite', page: 1})
            //   : route.params?.category === 1
            //   ? navigation.navigate('Favorite', {category: 1, page: 1})
            //   : route.params?.category === 2
            //   ? navigation.navigate('Favorite', {category: 2, page: 1})
            //   : route.params?.category === 3
            //   ? navigation.navigate('Favorite', {category: 3, page: 1})
            //   : navigation.navigate('Favorite', {page: 1});
          }}
          style={styles.textViewAll}>
          See more
        </Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.cardsWrap}>
        {products.length <= 0 || favorite.length <= 0 ? (
          <View style={styles.Loading}>
            <Image
              source={require('../../assets/gif/loader-small.gif')}
              style={styles.loadingGif}
            />
          </View>
        ) : (
          <>
            {route.params?.favorite
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
              : route.params?.promo
              ? promos.map(item => (
                  <CardProducts
                    key={item.id}
                    image={item.image}
                    title={item.products_name}
                    price={item.normal_price}
                    discount={item.discount}
                    id={item.id}
                    navigation={navigation}
                    params={route.params?.promo}
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
      {role === 1 ? (
        <View style={styles.btnAdmin}>
          <Button
            onPress={() => navigation.navigate('CreateProduct')}
            buttonStyle={styles.btnAdd}>
            Add Product
          </Button>
          <Button
            onPress={() => navigation.navigate('CreatePromo')}
            buttonStyle={styles.btnAdd}>
            Add Promo
          </Button>
        </View>
      ) : null}
    </View>
  );
};

export default Home;
