import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  homeContainer: {
    backgroundColor: 'white',
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
});
