import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
    padding: 40,
  },
  titleScreen: {
    fontSize: 15,
    marginBottom: 50,
    textAlign: 'center',
    color: '#6A4029',
    fontWeight: '800',
  },
  containerInput: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  inputPass: {
    width: '90%',
    padding: 10,
    color: 'black',
  },
  btnSave: {
    backgroundColor: '#6A4029',
    padding: 15,
    borderRadius: 15,
    marginTop: 20,
  },
  errMsg: {
    color: 'red',
    marginBottom: 10,
  },
});
