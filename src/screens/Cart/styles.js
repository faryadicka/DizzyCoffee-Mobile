import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerCart: {
    backgroundColor: '#ECECEC',
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 50,
    justifyContent: 'space-between',
    paddingBottom: 50,
  },
  containerCard: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  imageCart: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginRight: 10,
  },
  titleCart: {
    fontWeight: 'bold',
    color: 'black',
  },
  sizeCart: {
    color: 'black',
  },
  addInfo: {
    width: 195,
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  qtyCart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6A4029',
    width: 80,
    justifyContent: 'space-between',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 4,
  },
  btnQty: {
    backgroundColor: 'red',
    width: 40,
    height: 40,
  },
  qty: {
    color: 'white',
  },
  btnConfirm: {
    borderRadius: 15,
    padding: 18,
  },
  imageEmpty: {
    width: 220,
    height: 150,
    position: 'relative',
    left: 20,
  },
  btnCart: {
    backgroundColor: '#6A4029',
    borderRadius: 15,
  },
});
