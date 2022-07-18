import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 25,
    width: '40%',
    marginVertical: 10,
    margin: 10,
    padding: 20,
    position: 'relative',
    alignItems: 'center',
    paddingTop: 90,
    marginTop: 50,
    height: 170,
  },
  titleProduct: {
    marginTop: 10,
    fontWeight: '900',
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    position: 'absolute',
    top: 70,
  },
  priceProduct: {
    marginTop: 10,
    color: '#6A4029',
    fontWeight: '800',
    fontSize: 18,
    position: 'absolute',
    top: 115,
  },
  imageProduct: {
    width: 120,
    height: 120,
    borderRadius: 60,
    position: 'absolute',
    bottom: 100,
  },
});
