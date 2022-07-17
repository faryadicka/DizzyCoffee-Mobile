import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerDetail: {
    backgroundColor: '#F2F2F2',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  titleName: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
  },
  price: {
    color: '#6A4029',
    fontSize: 20,
    fontWeight: '400',
    marginTop: 10,
  },
  deliveryInfo: {
    textAlign: 'left',
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 20,
  },
  titleDelivery: {
    color: 'black',
    fontWeight: '500',
    fontSize: 20,
  },
  descDelivery: {
    color: '#9A9A9D',
    fontSize: 16,
    marginTop: 5,
    fontWeight: '300',
  },
  titleDesc: {
    marginTop: 15,
    color: 'black',
    fontWeight: '500',
    fontSize: 20,
  },
  btnCart: {
    borderRadius: 20,
    padding: 15,
  },
});
