import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F8',
  },
  containerProfile: {
    flex: 1,
    backgroundColor: '#ECECEC',
    alignItems: 'center',
    paddingBottom: 20,
  },
  imageProfile: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginTop: 10,
  },
  containerPhoto: {
    position: 'relative',
    padding: 10,
  },
  btnEdit: {
    backgroundColor: '#6A4029',
    width: '7%',
    paddingTop: 4,
    paddingBottom: 4,
    padding: 3,
    borderRadius: 50,
    position: 'absolute',
    top: 85,
    left: 70,
  },
  fullname: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#6A4029',
  },
  Description: {
    fontSize: 14,
    color: '#6A4029',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 25,
  },
  containerOrder: {
    marginTop: 10,
    backgroundColor: '#ECECEC',
    padding: 15,
  },
  orderText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  imageOrder: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 10,
  },
  order: {
    fontWeight: '800',
    color: '#6A4029',
  },
  more: {
    color: '#6A4029',
  },
  containerEdit: {
    marginTop: 10,
    backgroundColor: '#ECECEC',
    padding: 15,
  },
  btnEditProfile: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  btnText: {
    fontWeight: '800',
    fontSize: 16,
    color: '#6A4029',
  },
  btnSave: {
    borderRadius: 10,
    padding: 13,
  },
  noneProduct: {
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000070',
  },
  modalBody: {
    width: 365,
    height: 280,
    backgroundColor: '#e9e9e9',
    padding: 20,
    borderRadius: 15,
    borderColor: '#6A4029',
    borderWidth: 2,
    marginTop: 350,
    alignItems: 'center',
  },
  titleModal: {
    fontSize: 30,
    color: 'black',
  },
  btnUpload: {
    marginTop: 15,
    backgroundColor: '#6A4029',
    borderRadius: 10,
  },
  containerBtnUpload: {
    width: '90%',
  },
});
