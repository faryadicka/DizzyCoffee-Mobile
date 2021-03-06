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
    width: '35%',
    marginVertical: 10,
    margin: 10,
    padding: 20,
    position: 'relative',
    alignItems: 'center',
    paddingTop: 90,
    marginTop: 50,
    height: 180,
  },
  titleProduct: {
    marginTop: 10,
    fontWeight: '900',
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    position: 'absolute',
    top: 80,
  },
  priceProduct: {
    marginTop: 10,
    color: '#6A4029',
    fontWeight: '800',
    fontSize: 13,
    position: 'absolute',
    top: 115,
  },
  imageProduct: {
    width: 115,
    height: 116,
    borderRadius: 60,
    position: 'absolute',
    bottom: 100,
  },
});
