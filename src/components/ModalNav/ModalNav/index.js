import React from 'react';
import {Modal, View, Text} from 'react-native';
import {Button} from '@rneui/themed';
import styles from './styles';

const ModalNav = ({
  show = false,
  hide,
  navigation,
  title,
  btnTitle,
  status,
  route = '',
}) => {
  return (
    <>
      <Modal animationType="slide" transparent={true} visible={show}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
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
              <Text style={styles.textStyle}>
                {!status ? route : 'Try Again'}
              </Text>
            </Button>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ModalNav;
