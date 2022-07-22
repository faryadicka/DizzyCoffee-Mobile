import React, {useEffect, useState} from 'react';
import {View, ScrollView, Modal, Text, TextInput} from 'react-native';
import styles from './styles';
import {getProductsAxios, getFavoriteAxios} from '../../modules/products';
import CardProductsMore from '../../components/CardProductsMore';
import {Button} from '@rneui/base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RadioButton} from 'react-native-paper';

function SeeMore({route, navigation}) {
  const [products, setProducts] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [errMsg, setErrMsg] = useState([]);
  const [scroll, setScroll] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [checked, setChecked] = useState({
    order: 'ASC',
    sort: 'name',
  });
  const [paramsCostum, setParamsCostum] = useState({
    category: '',
    search: '',
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
  const getProductsHome = (category, search, sort, order) => {
    getProductsAxios(category, search, sort, order)
      .then(res => {
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
  }, [params.category, params.favorite]);
  const handleSearch = () => {
    getProductsAxios(params.category, params.search)
      .then(res => {
        setProducts(res.data?.data);
      })
      .catch(err => {
        console.log(err);
        setErrMsg(err.response?.data.message);
      });
  };
  const handlerSort = () => {
    getProductsAxios(
      paramsCostum.category,
      paramsCostum.search,
      checked.sort,
      checked.order,
    )
      .then(res => {
        console.log(res.data);
        setProducts(res.data?.data);
      })
      .catch(err => {
        console.log(err);
        setErrMsg(err.response?.data.message);
      });
    setModalShow(false);
  };
  console.log(paramsCostum.category);
  return (
    <>
      <ScrollView scrollEnabled={scroll} style={styles.productsContainer}>
        <View style={styles.filterProducts}>
          <TextInput
            keyboardAppearance="dark"
            style={styles.inputSearch}
            placeholderTextColor="black"
            placeholder="Search"
            onChangeText={search => setParamsCostum({...paramsCostum, search})}
          />
          <Button buttonStyle={styles.btnSearch} onPress={handleSearch}>
            <FontAwesome name="search" size={23} color="white" />
          </Button>
          <Button
            onPress={() => setModalShow(!modalShow)}
            buttonStyle={styles.btnFeature}>
            FILTER
          </Button>
        </View>
        <View style={styles.wrapperProducts}>
          {route.params?.favorite
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
      <Modal visible={modalShow} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalBody}>
            <Text style={styles.titleSort}>FILTER</Text>
            <View style={styles.filterContainer}>
              <Button
                onPress={() => setParamsCostum({...paramsCostum, category: 1})}
                buttonStyle={
                  paramsCostum.category === 1
                    ? styles.btnActive
                    : styles.btnFilter
                }>
                COFFEE
              </Button>
              <Button
                onPress={() => setParamsCostum({...paramsCostum, category: 2})}
                buttonStyle={
                  paramsCostum.category === 2
                    ? styles.btnActive
                    : styles.btnFilter
                }>
                NON COFFEE
              </Button>
              <Button
                onPress={() => setParamsCostum({...paramsCostum, category: 3})}
                buttonStyle={
                  paramsCostum.category === 3
                    ? styles.btnActive
                    : styles.btnFilter
                }>
                FOODS
              </Button>
            </View>
            <Text style={styles.titleSort}>SORT</Text>
            <View style={styles.orderContainer}>
              <View style={styles.labelRadio}>
                <RadioButton
                  color="#6A4029"
                  value="name"
                  status={checked.sort === 'name' ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setChecked({
                      ...checked,
                      sort: 'name',
                    })
                  }
                />
                <Text style={styles.textOrder}>NAME</Text>
              </View>
              <View style={styles.labelRadio}>
                <RadioButton
                  color="#6A4029"
                  value="price"
                  status={checked.sort === 'price' ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setChecked({
                      ...checked,
                      sort: 'price',
                    })
                  }
                />
                <Text style={styles.textOrder}>PRICE</Text>
              </View>
            </View>
            <Text style={styles.titleSort}>ORDER</Text>
            <View style={styles.orderContainer}>
              <View style={styles.labelRadio}>
                <RadioButton
                  color="#6A4029"
                  value="ASC"
                  status={checked.order === 'ASC' ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setChecked({
                      ...checked,
                      order: 'ASC',
                    })
                  }
                />
                <Text style={styles.textOrder}>ASC</Text>
              </View>
              <View style={styles.labelRadio}>
                <RadioButton
                  color="#6A4029"
                  value="DESC"
                  status={checked.order === 'DESC' ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setChecked({
                      ...checked,
                      order: 'DESC',
                    })
                  }
                />
                <Text style={styles.textOrder}>DESC</Text>
              </View>
            </View>
            <View style={styles.btnModal}>
              <Button
                buttonStyle={styles.btnModalContent}
                onPress={() => setModalShow(false)}>
                CLOSE
              </Button>
              <Button
                buttonStyle={styles.btnModalContent}
                onPress={handlerSort}>
                SET
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default SeeMore;
