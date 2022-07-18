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
    alignItems: 'center',
    paddingTop: 20,
  },
  inputField: {
    backgroundColor: '#EFEEEE',
    width: 290,
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
    marginTop: 40,
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
    width: 300,
    padding: 10,
  },
});
