import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    marginLeft: 15,
    paddingLeft: 20,
    paddingRight: 20,
    width: 180,
    backgroundColor: 'white',
    borderRadius: 30,
    paddingTop: 130,
    paddingBottom: 15,
    position: 'relative',
    top: 30,
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
    borderRadius: 15,
    bottom: 60,
    left: 21,
  },
  editButton: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#6A4029',
    position: 'absolute',
    zIndex: 2,
    left: 135,
    top: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
});
