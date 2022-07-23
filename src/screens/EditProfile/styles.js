import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F8',
  },
  containerEdit: {
    alignItems: 'center',
    flex: 1,
  },
  containerTextEdit: {
    padding: 30,
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
  inputBox: {
    marginTop: 10,
    borderBottomColor: '#9F9F9F',
    borderBottomWidth: 1,
  },
  dateBox: {
    marginTop: 10,
    borderBottomColor: '#9F9F9F',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  radioBox: {
    marginTop: 10,
    flexDirection: 'row',
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  labelGender: {
    marginLeft: 5,
    fontSize: 16,
    color: 'black',
  },
  label: {
    fontWeight: '800',
    fontSize: 16,
  },
  containerDate: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnSave: {
    marginTop: 20,
    padding: 13,
    borderRadius: 15,
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
