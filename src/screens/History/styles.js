import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerHistory: {
    flex: 1,
    backgroundColor: '#ECECEC',
    alignItems: 'center',
  },
  orderDelete: {
    color: 'black',
    marginTop: 20,
  },
  cardWrapper: {
    flex: 1,
    width: '90%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignContent: 'center',
    paddingTop: 15,
    justifyContent: 'center',
  },
  cardBody: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bodyWrapper: {
    flexDirection: 'row',
  },
  imageHistory: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginRight: 15,
  },
  cardTitle: {
    color: 'black',
    fontWeight: '800',
    fontSize: 16,
  },
  cardPrice: {
    color: '#895537',
    fontWeight: '800',
    fontSize: 15,
  },
  containerModal: {
    // backgroundColor: '#a6a6a61a',
    flex: 1,
    padding: 50,
    justifyContent: 'center',
  },
  bodyModal: {
    paddingTop: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    height: 180,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: '#6A4029',
  },
  textModal: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
  btnDelete: {
    width: 100,
    backgroundColor: '#895537',
    borderRadius: 15,
  },
  // cardHistory: {
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 9,
  //   },
  //   shadowOpacity: 0.1,
  //   shadowRadius: 1,
  //   elevation: 15,
  // },
  // card: {
  //   backgroundColor: 'white',
  //   borderRadius: 25,
  //   width: '100%',
  //   marginVertical: 10,
  //   margin: 0,
  //   padding: 20,
  //   position: 'relative',
  //   alignItems: 'center',
  //   paddingTop: 90,
  //   height: 40,
  // },
  // fontTitle: {
  //   color: 'red',
  // },
});
