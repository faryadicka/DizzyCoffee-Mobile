import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  productsContainer: {
    backgroundColor: '#F2F2F2',
    flex: 1,
  },
  titleProducts: {
    color: 'black',
    marginTop: 10,
    fontWeight: '800',
    fontSize: 20,
    textAlign: 'center',
  },
  wrapperProducts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    // backgroundColor: 'white',
    width: 360,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    justifyContent: 'center',
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 50,
  },
});
