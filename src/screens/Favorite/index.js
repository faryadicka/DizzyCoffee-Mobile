import React, {useEffect, useState} from 'react';
import {
  View,
  Modal,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {getProductsAxios, getFavoriteAxios} from '../../modules/products';
import CardProductsMore from '../../components/CardProductsMore';
import {Button} from '@rneui/base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RadioButton} from 'react-native-paper';

function SeeMore({route, navigation}) {
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [errMsg, setErrMsg] = useState([]);
  const [currentPage, setCurrentPage] = useState(route.params.page);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getProductsHome = (category, search, sort, order, page) => {
    getProductsAxios(category, search, sort, order, page)
      .then(res => {
        setProducts(res.data?.data);
        // setProducts([...products, ...res.data?.data]);
        setMeta(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setErrMsg(err.response?.data.message);
      });
  };
  const renderItem = ({item}) => {
    return (
      <CardProductsMore
        key={item.id}
        image={item.image}
        title={item.name}
        price={item.price}
        id={item.id}
        navigation={navigation}
      />
    );
  };
  const renderLoader = () => {
    return (
      <>
        {loading ? (
          <View style={styles.loaderComponent}>
            <ActivityIndicator size="large" color="#6A4029" />
          </View>
        ) : null}
      </>
    );
  };
  const loadMore = () => {
    if (meta.nextLink) {
      return setCurrentPage(currentPage + 1);
    }
  };
  useEffect(() => {
    getProductsHome(
      params.category,
      '',
      checked.sort,
      checked.order,
      currentPage,
    );
    getFavoriteHome(params.favorite);
  }, [
    checked.order,
    checked.sort,
    currentPage,
    params.category,
    params.favorite,
  ]);
  const handleSearch = () => {
    getProductsAxios(params.category, paramsCostum.search)
      .then(res => {
        console.log(res.data.data);
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
      currentPage,
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
    setCurrentPage(1);
  };
  console.log(meta);
  return (
    <>
      <View style={styles.productsContainer}>
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
          <FlatList
            style={styles.FlatList}
            data={route.params?.favorite ? favorite : products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={false}
            numColumns={2}
            ListFooterComponent={renderLoader}
            onEndReached={loadMore}
          />
        </View>
      </View>
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
