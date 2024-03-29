import React from 'react';
import {Modal, View, Text} from 'react-native';
import {Button} from '@rneui/themed';
import styles from './styles';

const ModalNav = ({
  show = false,
  hide,
  navigation,
  title,
  status = false,
  route = '',
  setShow,
}) => {
  const titleBtn = route === 'Main' ? 'Home' : route;
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
                      setShow(false);
                      if (route === 'Home') {
                        navigation.replace(route, {category: 1});
                      }
                      navigation.navigate(route);
                    }
                  : hide
              }>
              <Text style={styles.textStyle}>
                {!status ? titleBtn : 'Close'}
              </Text>
            </Button>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ModalNav;
