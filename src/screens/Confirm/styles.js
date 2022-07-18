import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  confirmContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    backgroundColor: '#F2F2F2',
  },
  label: {
    fontWeight: '800',
    color: 'black',
    fontSize: 20,
    marginTop: 20,
  },
  cardList: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageList: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  flexList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardMethods: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginTop: 15,
  },
  lableRadio: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDelivery: {
    color: 'black',
    marginLeft: 5,
  },
  box: {
    position: 'relative',
    padding: 5,
    borderRadius: 3,
  },
  border: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#F2F2F2',
    marginBottom: 5,
    marginTop: 5,
    paddingBottom: 5,
    paddingTop: 5,
  },
  card: {
    backgroundColor: '#F47B0A',
  },
  bank: {
    backgroundColor: '#895537',
  },
  delivery: {
    backgroundColor: '#FFBA33',
  },
  rowTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  total: {
    color: 'black',
    fontSize: 20,
    paddingLeft: 20,
    marginBottom: 20,
    position: 'relative',
    bottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  btnPayment: {
    marginBottom: 50,
    padding: 15,
    borderRadius: 10,
  },
});
