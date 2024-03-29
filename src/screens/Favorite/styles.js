import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  productsContainer: {
    backgroundColor: '#F2F2F2',
    flex: 1,
    marginTop: 20,
  },
  titleProducts: {
    color: 'black',
    marginTop: 10,
    fontWeight: '800',
    fontSize: 20,
    textAlign: 'center',
  },
  wrapperProducts: {
    flex: 1,
    width: '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: 10,
    alignContent: 'center',
    position: 'relative',
  },
  FlatList: {
    position: 'relative',
    left: 40,
  },
  filterProducts: {
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center',
  },
  btnFeature: {
    borderRadius: 10,
    backgroundColor: '#6A4029',
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000a8',
  },
  modalBody: {
    width: 300,
    height: 350,
    backgroundColor: '#b7b7b7',
    padding: 20,
    borderRadius: 15,
    borderColor: '#6A4029',
    borderWidth: 2,
  },
  btnModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnModalContent: {
    backgroundColor: '#6A4029',
    borderRadius: 10,
    width: 100,
  },
  btnSearch: {
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    backgroundColor: '#6A4029',
  },
  inputSearch: {
    width: '65%',
    backgroundColor: '#b7b7b7',
    padding: 7,
    borderRadius: 15,
    paddingLeft: 15,
    color: 'white',
  },
  labelRadio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  textOrder: {
    color: 'white',
    fontWeight: '800',
  },
  orderContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  titleSort: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  btnFilter: {
    marginRight: 10,
    marginTop: 10,
    backgroundColor: '#6A4029',
    borderRadius: 10,
  },
  btnActive: {
    marginRight: 10,
    marginTop: 10,
    backgroundColor: '#FFBA33',
    borderRadius: 10,
  },
  loaderComponent: {
    position: 'relative',
    right: 35,
  },
});
