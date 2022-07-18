import React from 'react';
import {Modal, View, Text} from 'react-native';
import {Button} from '@rneui/themed';
import styles from './styles';
import Evil from 'react-native-vector-icons/EvilIcons';

const ModalNav = ({
  show = false,
  hide,
  navigation,
  title,
  status = false,
  route = '',
  setShow,
}) => {
  return (
    <>
      <Modal animationType="slide" transparent={true} visible={show}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.closeButton}>
              <Evil
                name="close"
                size={20}
                color="black"
                onPress={() => {
                  setShow(false);
                }}
              />
            </View>
            <Text style={styles.modalText}>{title}</Text>
            <Button
              buttonStyle={[styles.button, styles.buttonClose]}
              onPress={
                !status
                  ? () => {
                      navigation.navigate(route);
                    }
                  : hide
              }>
              <Text style={styles.textStyle}>{!status ? route : 'Close'}</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ModalNav;
