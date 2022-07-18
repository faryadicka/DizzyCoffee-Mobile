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
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  titleName: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
  },
  price: {
    color: '#6A4029',
    fontSize: 20,
    fontWeight: '400',
    marginTop: 5,
  },
  deliveryInfo: {
    textAlign: 'left',
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 8,
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
    marginTop: 2,
    color: 'black',
    fontWeight: '500',
    fontSize: 20,
  },
  btnCart: {
    borderRadius: 20,
    padding: 14,
  },
  wrapBtnSize: {
    paddingLeft: 40,
    paddingRight: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnSize: {
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 100,
    width: 30,
    height: 30,
  },
  btnActive: {
    backgroundColor: '#6A4029',
    width: 30,
    height: 30,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 100,
  },
});
