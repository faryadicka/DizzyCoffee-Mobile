import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, FlatList, Image, Pressable, Modal} from 'react-native';
import styles from './styles';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {getAllhistories} from '../../modules/history';
import {Button} from '@rneui/themed';

function History() {
  const [history, setHistory] = useState([]);
  const [newHistory, setNewHistory] = useState([]);
  const [show, setShow] = useState(false);
  const tokenRedux = useSelector(state => state.auth.dataLogin?.token);
  const getHistories = (token, limit) => {
    getAllhistories(token, limit)
      .then(res => {
        console.log(res);
        setHistory(res.data?.data);
      })
      .catch(err => {
        console.log(err.response?.data.message);
      });
  };
  const renderItem = ({item}) => {
    return (
      <>
        <View key={item.id} style={styles.cardBody}>
          <View style={styles.bodyWrapper}>
            <Image source={{uri: item.image}} style={styles.imageHistory} />
            <View>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardPrice}>IDR {item.price}</Text>
              <Text style={styles.cardPrice}>{`${item.size}`}</Text>
            </View>
          </View>
          <Pressable
            onPress={() => {
              let select = [...history];
              let newHistories = select.filter(prd => prd.id !== item.id);
              setNewHistory(newHistories);
              setShow(true);
            }}>
            <Material name="trash-can-outline" color="#895537" size={25} />
          </Pressable>
        </View>
      </>
    );
  };
  useEffect(() => {
    getHistories(tokenRedux, 12);
  }, [tokenRedux]);
  console.log(history);
  return (
    <>
      <View style={styles.containerHistory}>
        <Text style={styles.orderDelete}>
          Tap <Material name="trash-can-outline" color="black" size={25} /> to
          delete history.
        </Text>
        <View style={styles.cardWrapper}>
          <FlatList
            data={history}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <Modal transparent={true} visible={show} animationType="slide">
        <View style={styles.containerModal}>
          <View style={styles.bodyModal}>
            <Text style={styles.textModal}>
              Are you sure to delete this history?
            </Text>
            <View style={styles.btnWrapper}>
              <Button
                onPress={() => {
                  setShow(false);
                }}
                buttonStyle={styles.btnDelete}>
                NO
              </Button>
              <Button
                onPress={() => {
                  setHistory(newHistory);
                  setShow(false);
                }}
                buttonStyle={styles.btnDelete}>
                YES
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default History;
