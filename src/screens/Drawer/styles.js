import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    borderTopEndRadius: 25,
  },
  color: {
    color: 'black',
  },
  containerAvatar: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6A4029',
    borderTopEndRadius: 25,
    borderBottomEndRadius: 25,
  },
  Avatar: {
    borderRadius: 100,
    width: 80,
    height: 80,
  },
  nameDrawer: {
    marginTop: 10,
    fontWeight: '900',
    fontSize: 15,
    color: '#FFF',
  },
  emailDrawer: {
    marginTop: 10,
    fontSize: 15,
    color: '#FFF',
    fontWeight: '100',
  },
  containerList: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  listNav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#6A4029',
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingTop: 15,
  },
  listNavEnd: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
    paddingTop: 15,
  },
  listNavSignOut: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  textNav: {
    color: '#6A4029',
    fontSize: 15,
    marginStart: 10,
    marginEnd: 10,
    fontWeight: '400',
  },
});
