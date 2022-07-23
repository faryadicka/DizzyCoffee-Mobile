import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  homeContainer: {
    backgroundColor: '#F2F2F2',
    flex: 1,
  },
  textHome: {
    color: 'black',
    fontSize: 35,
    fontWeight: '700',
  },
  textContainer: {
    paddingLeft: 40,
    paddingTop: 20,
  },
  inputField: {
    backgroundColor: '#b7b7b7',
    width: '75%',
    marginTop: 20,
    borderRadius: 10,
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingLeft: 10,
    paddingRight: 10,
  },
  textColor: {
    color: '#9A9A9D',
    marginTop: 20,
  },
  textActive: {
    color: '#6A4029',
    marginTop: 20,
    borderBottomColor: '#6A4029',
    borderBottomWidth: 2,
  },
  cardsWrap: {
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 30,
  },
  viewAll: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 60,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 20,
  },
  textViewAll: {
    color: '#6A4029',
  },
  inputSearch: {
    width: '100%',
  },
  Loading: {
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    position: 'relative',
    left: 70,
    bottom: 40,
  },
  btnSearch: {
    width: '55%',
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: '#6A4029',
  },
});
