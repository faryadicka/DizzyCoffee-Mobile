import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    marginLeft: 15,
    padding: 20,
    width: 180,
    backgroundColor: 'white',
    borderRadius: 30,
    paddingTop: 120,
    position: 'relative',
  },
  title: {
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
  },
  price: {
    color: '#6A4029',
    fontWeight: '500',
    textAlign: 'center',
  },
  image: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 10,
    bottom: 70,
    left: 21,
  },
});
