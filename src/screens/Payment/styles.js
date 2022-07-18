import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  paymnetContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  titlePage: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
  },
  rowAddress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  titleAddress: {
    color: 'black',
    fontWeight: '800',
    fontSize: 18,
  },
  addressCard: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 10,
  },
  textAddress: {
    color: 'black',
    paddingBottom: 8,
    paddingTop: 8,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  textPhone: {
    color: 'black',
    paddingBottom: 8,
    paddingTop: 8,
  },
  deliveryCard: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 15,
    justifyContent: 'space-between',
  },
  lableRadio: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDelivery: {
    color: 'black',
  },
  rowTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  btnCheckout: {
    marginTop: 20,
    borderRadius: 15,
    padding: 15,
    fontWeight: '900',
  },
});
